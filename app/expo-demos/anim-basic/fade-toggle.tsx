import { useRef, useState } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';

export default function FadeToggleScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    Animated.timing(fadeAnim, {
      toValue: visible ? 0 : 1,
      duration: 400,
      useNativeDriver: true,
    }).start(() => setVisible((v) => !v));
  };

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-[#151718]">
      <Animated.View
        className="mb-10 h-40 w-40 items-center justify-center rounded-xs bg-orange-400"
        style={{ opacity: fadeAnim }}
      >
        <Text className="text-4xl font-bold text-white">Hello</Text>
      </Animated.View>

      <Pressable
        className="rounded-xs bg-orange-500 px-8 py-3 active:bg-orange-600"
        onPress={toggle}
      >
        <Text className="text-base font-semibold text-white">
          {visible ? 'Fade Out' : 'Fade In'}
        </Text>
      </Pressable>
    </View>
  );
}
