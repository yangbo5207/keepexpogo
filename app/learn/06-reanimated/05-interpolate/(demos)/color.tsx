import { Button } from "@/components/ui/button";
import { Text, View } from "react-native";
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export default function InterpolateColorScreen() {
  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(progress.value, [0, 1], ["#fef3c7", "#f97316"]);
    const textColor = interpolateColor(progress.value, [0, 1], ["#7c5f2c", "#fff7ed"]);

    return {
      backgroundColor,
      color: textColor,
    };
  });

  const toggle = () => {
    progress.value = withTiming(progress.value === 0 ? 1 : 0, { duration: 700 });
  };

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <View className="py-16 items-center justify-center gap-6">
        <View className="items-center">
          <Text className="text-xs font-semibold uppercase tracking-widest text-cream-600 dark:text-night-200">progress = {progress.value === 0 ? "0" : "1"}</Text>
          <Text className="mt-2 text-sm text-cream-700 dark:text-night-200">颜色在主题色之间平滑过渡</Text>
        </View>

        <Animated.View style={animatedStyle} className="h-28 w-28 items-center justify-center rounded-2xl shadow-xl">
          <Animated.Text style={animatedStyle} className="text-sm font-semibold">
            Color
          </Animated.Text>
        </Animated.View>
      </View>

      <Button className="mx-auto my-8" label="Toggle Color" onPress={toggle} />
    </View>
  );
}
