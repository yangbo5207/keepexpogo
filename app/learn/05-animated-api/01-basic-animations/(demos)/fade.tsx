import { useRef, useState } from 'react';
import { Animated, Text, View } from 'react-native';

import { Button } from '@/components/ui/button';

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
    <View className="flex-1 items-center justify-center bg-cream-50 p-6 dark:bg-night-800">
      <Animated.View
        className="mb-8 h-40 w-40 items-center justify-center rounded-xs bg-warning-400"
        style={{ opacity: fadeAnim }}
      >
        <Text className="text-base font-semibold text-white/90">Hi!</Text>
      </Animated.View>

      <View className="mb-6 rounded-xs bg-cream-200 px-6 py-3 dark:bg-night-700">
        <Text className="text-center text-sm text-cream-700 dark:text-night-200">
          Opacity:{' '}
          <AnimatedValueText anim={fadeAnim} />
        </Text>
      </View>

      <Button label={visible ? 'Fade Out' : 'Fade In'} onPress={toggle} />

      <View className="mt-8 rounded-xs bg-secondary-50 p-3 dark:bg-secondary-900/20">
        <Text className="text-xs text-secondary-700 dark:text-secondary-300">
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
    <Text className="font-mono text-base font-bold text-warning-600 dark:text-warning-400">
      {val}
    </Text>
  );
}
