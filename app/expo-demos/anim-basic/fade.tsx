import { useRef, useState } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';

export default function FadeScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    const toValue = visible ? 0 : 1;
    Animated.timing(fadeAnim, {
      toValue,
      duration: 500,
      useNativeDriver: true,
    }).start(() => setVisible(!visible));
  };

  return (
    <View className="flex-1 items-center justify-center bg-white p-6 dark:bg-[#151718]">
      <Animated.View
        className="mb-8 h-40 w-40 items-center justify-center rounded-xs bg-orange-400"
        style={{ opacity: fadeAnim }}
      >
        <Text className="text-4xl font-bold text-white">Hi!</Text>
      </Animated.View>

      <View className="mb-6 rounded-xs bg-gray-100 px-6 py-3 dark:bg-gray-800">
        <Text className="text-center text-sm text-gray-600 dark:text-gray-300">
          Opacity:{' '}
          <AnimatedValueText anim={fadeAnim} />
        </Text>
      </View>

      <Pressable
        className="rounded-xs bg-orange-500 px-8 py-3 active:bg-orange-600"
        onPress={toggle}
      >
        <Text className="text-base font-semibold text-white">
          {visible ? 'Fade Out' : 'Fade In'}
        </Text>
      </Pressable>

      <View className="mt-8 rounded-xs bg-blue-50 p-3 dark:bg-blue-900/20">
        <Text className="text-xs text-blue-700 dark:text-blue-300">
          使用 Animated.timing 驱动 opacity 从 0 到 1，useNativeDriver: true
          让动画在 UI 线程执行，不受 JS 线程阻塞影响。
        </Text>
      </View>
    </View>
  );
}

function AnimatedValueText({ anim }: { anim: Animated.Value }) {
  const [val, setVal] = useState('0.00');

  anim.addListener(({ value }) => {
    setVal(value.toFixed(2));
  });

  return (
    <Text className="font-mono text-base font-bold text-orange-600 dark:text-orange-400">
      {val}
    </Text>
  );
}
