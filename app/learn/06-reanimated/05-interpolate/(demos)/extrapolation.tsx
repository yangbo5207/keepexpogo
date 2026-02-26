import { Button } from "@/components/ui/button";
import { Text, View } from "react-native";
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const BALL_SIZE = 40;

export default function ExtrapolationScreen() {
  const offset = useSharedValue(0);

  const trackWidth = useSharedValue(0);

  const clampStyle = useAnimatedStyle(() => {
    const travel = Math.max(trackWidth.value - 150, 0);
    const translateX = interpolate(offset.value, [0, 100], [0, travel], Extrapolation.CLAMP);
    return { transform: [{ translateX }] };
  });

  const extendStyle = useAnimatedStyle(() => {
    const travel = Math.max(trackWidth.value - 150, 0);
    const translateX = interpolate(offset.value, [0, 100], [0, travel], Extrapolation.EXTEND);
    return { transform: [{ translateX }] };
  });
  const limitLineStyle = useAnimatedStyle(() => ({
    left: Math.max(trackWidth.value - 150, 0),
  }));

  const play = () => {
    offset.value = withTiming(offset.value === 0 ? 150 : 0, { duration: 900 });
  };

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800 px-6">
      <View className="py-16 items-center justify-center gap-10">
        <View className="w-full items-center gap-4">
          <View className="w-full">
            <Text className="mb-2 text-xs font-semibold text-cream-600 dark:text-night-200">CLAMP</Text>
            <View
              className="h-10 w-full overflow-hidden rounded-full bg-cream-200 dark:bg-night-700"
              onLayout={(e) => {
                trackWidth.value = e.nativeEvent.layout.width;
              }}
            >
              <Animated.View className="absolute top-0 h-10 w-0.5 bg-cream-500 dark:bg-night-400" style={limitLineStyle} />
              <Animated.View style={clampStyle} className="h-10 w-10 rounded-full bg-warning-500 shadow-md shadow-warning-500/30" />
            </View>
            <View className="mt-1">
              <Text className="text-xs text-cream-500 dark:text-night-300">超出后被钳制，停止继续移动</Text>
            </View>
          </View>

          <View className="w-full">
            <Text className="mb-2 text-xs font-semibold text-cream-600 dark:text-night-200">EXTEND</Text>
            <View
              className="h-10 w-full overflow-hidden rounded-full bg-cream-200 dark:bg-night-700"
              onLayout={(e) => {
                trackWidth.value = e.nativeEvent.layout.width;
              }}
            >
              <Animated.View className="absolute top-0 h-10 w-0.5 bg-cream-500 dark:bg-night-400" style={limitLineStyle} />
              <Animated.View style={extendStyle} className="h-10 w-10 rounded-full bg-primary-500 shadow-md shadow-primary-500/30" />
            </View>
            <View className="mt-1">
              <Text className="text-xs text-cream-500 dark:text-night-300">超出后继续线性移动</Text>
            </View>
          </View>
        </View>
      </View>

      <Button className="mx-auto my-8" label="Toggle Offset" onPress={play} />
    </View>
  );
}
