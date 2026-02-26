import { Button } from "@/components/ui/button";
import { Text, View } from "react-native";
import Animated, { Extrapolation, interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export default function InterpolateMultiPropScreen() {
  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [0.5, 1.2], Extrapolation.CLAMP);
    const rotate = interpolate(progress.value, [0, 1], [0, 360], Extrapolation.CLAMP);
    const borderRadius = interpolate(progress.value, [0, 0.5, 1], [20, 60, 20], Extrapolation.CLAMP);
    const backgroundColor = interpolateColor(progress.value, [0, 0.5, 1], ["#3b82f6", "#8b5cf6", "#f97316"]);

    return {
      transform: [{ scale }, { rotate: `${rotate}deg` }],
      borderRadius,
      backgroundColor,
    };
  });

  const toggle = () => {
    progress.value = withTiming(progress.value === 0 ? 1 : 0, { duration: 900 });
  };

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <View className="py-16 items-center justify-center gap-6">
        <View className="items-center">
          <Text className="text-xs font-semibold uppercase tracking-widest text-cream-600 dark:text-night-200">progress = {progress.value === 0 ? "0" : "1"}</Text>
          <Text className="mt-2 text-sm text-cream-700 dark:text-night-200">缩放 + 旋转 + 圆角 + 颜色</Text>
        </View>

        <Animated.View style={animatedStyle} className="h-28 w-28 items-center justify-center shadow-xl">
          <Text className="text-sm font-semibold text-white">Multi</Text>
        </Animated.View>
      </View>

      <Button className="mx-auto my-8" label="Toggle" onPress={toggle} />
    </View>
  );
}
