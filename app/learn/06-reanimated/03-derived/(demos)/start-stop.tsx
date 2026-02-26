import { Button } from "@/components/ui/button";
import { View } from "react-native";
import Animated, { Easing, cancelAnimation, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

export default function CancelAnimationScreen() {
  const rotation = useSharedValue(0);

  const start = () => {
    const current = rotation.value % 360;
    rotation.value = current;
    rotation.value = withRepeat(withTiming(current + 360, { duration: 1000, easing: Easing.linear }), -1, false);
  };

  const stop = () => {
    cancelAnimation(rotation);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <View className="flex-1 items-center justify-center gap-12 bg-cream-50 dark:bg-night-800">
      <Animated.View style={animatedStyle} className="h-24 w-24 rounded-xl border border-primary-300 bg-primary-200 dark:border-primary-700 dark:bg-primary-500/40" />

      <View className="flex-row gap-4">
        <Button label="Start Spin" onPress={start} />
        <Button label="Stop" variant="danger" onPress={stop} />
      </View>
    </View>
  );
}
