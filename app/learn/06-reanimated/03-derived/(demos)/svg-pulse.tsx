import { useEffect } from "react";
import { Text, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function SvgPulseScreen() {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 1500, easing: Easing.inOut(Easing.ease) }), -1, true);
  }, [progress]);

  const animatedProps = useAnimatedProps(() => ({
    r: 30 + progress.value * 20,
    strokeWidth: 10 - progress.value * 8,
    opacity: 0.5 + progress.value * 0.5,
  }));

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <View className="flex-1 items-center justify-center gap-6">
        <View className="items-center">
          <Svg height="140" width="140" viewBox="0 0 120 120">
            <AnimatedCircle cx="60" cy="60" fill="none" stroke="#f97316" animatedProps={animatedProps} />
          </Svg>
        </View>

        <View className="items-center">
          <Text className="text-sm font-semibold text-cream-900 dark:text-night-50">SVG 呼吸圆环</Text>
          <Text className="mt-1 text-xs text-cream-600 dark:text-night-200">同时驱动 r 与 strokeWidth</Text>
        </View>
      </View>
    </View>
  );
}
