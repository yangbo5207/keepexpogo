import { useRef, useState } from 'react';
import { Animated, Text, View } from 'react-native';

import { Button } from '@/components/ui/button';

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
    <View className="flex-1 items-center justify-center bg-cream-50 dark:bg-night-800">
      <Animated.View
        className="mb-10 h-40 w-40 items-center justify-center rounded-xs bg-warning-400"
        style={{ opacity: fadeAnim }}
      >
        <Text className="text-base font-semibold text-white/90">Hello</Text>
      </Animated.View>

      <Button label={visible ? 'Fade Out' : 'Fade In'} onPress={toggle} />
    </View>
  );
}
