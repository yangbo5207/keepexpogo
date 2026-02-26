import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

export default function PulseScreen() {
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withRepeat(withTiming(1.1, { duration: 1000 }), -1, true);
  }, [scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const stopPulse = () => {
    scale.value = 1;
  };

  const resumePulse = () => {
    scale.value = withRepeat(withTiming(1.1, { duration: 1000 }), -1, true);
  };

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <View className="flex-1 items-center justify-center">
        <Animated.View className="rounded-full bg-warning-500 px-10 py-4 dark:bg-warning-400" style={animatedStyle}>
          <Text className="text-base font-semibold text-white dark:text-night-900">Pulse Button</Text>
        </Animated.View>
      </View>

      <View className="px-6 pb-6 h-100">
        <View className="flex-row justify-center gap-3">
          <Button label="Stop Pulse" variant="warning" onPress={stopPulse} />
          <Button label="Resume Pulse" variant="outline" onPress={resumePulse} />
        </View>
      </View>
    </View>
  );
}
