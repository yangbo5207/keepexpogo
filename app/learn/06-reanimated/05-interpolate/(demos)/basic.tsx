import { Button } from "@/components/ui/button";
import { Text, View } from "react-native";
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export default function InterpolateBasicScreen() {
  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(progress.value, [0, 1], [24, -24], Extrapolation.CLAMP);
    const scale = interpolate(progress.value, [0, 1], [1, 1.12], Extrapolation.CLAMP);
    const opacity = interpolate(progress.value, [0, 1], [0.5, 1], Extrapolation.CLAMP);

    return {
      transform: [{ translateY }, { scale }],
      opacity,
    };
  });

  const toggle = () => {
    progress.value = withTiming(progress.value === 0 ? 1 : 0, { duration: 600 });
  };

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <View className="py-16 items-center justify-center gap-6">
        <View className="items-center">
          <Text className="text-xs font-semibold uppercase tracking-widest text-cream-600 dark:text-night-200">progress = {progress.value === 0 ? "0" : "1"}</Text>
          <Text className="mt-2 text-sm text-cream-700 dark:text-night-200">插值驱动位移、缩放、透明度</Text>
        </View>

        <Animated.View style={animatedStyle} className="h-24 w-24 items-center justify-center rounded-2xl bg-primary-500 shadow-xl shadow-primary-500/30">
          <Text className="text-sm font-semibold text-white">Card</Text>
        </Animated.View>
      </View>

      <Button className="mx-auto my-8" label="Toggle Progress" onPress={toggle} />
    </View>
  );
}
