import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Text, View } from "react-native";
import Animated, { runOnJS, useAnimatedReaction, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from "react-native-reanimated";

const BAR_WIDTH = 260;

export default function FormatPercentScreen() {
  const progress = useSharedValue(0);
  const [percentLabel, setPercentLabel] = useState("0%");

  const percentText = useDerivedValue(() => {
    return `${Math.round(progress.value * 100)}%`;
  });

  useAnimatedReaction(
    () => percentText.value,
    (value) => {
      runOnJS(setPercentLabel)(value);
    },
    [percentText],
  );

  const barStyle = useAnimatedStyle(() => ({
    width: BAR_WIDTH * progress.value,
  }));

  const fillTo = (value: number) => {
    progress.value = withTiming(value, { duration: 900 });
  };

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <View className="flex-1 items-center justify-center gap-6 px-6">
        <View className="w-full rounded-2xl border border-cream-200 bg-cream-100 p-5 dark:border-night-600 dark:bg-night-700">
          <Text className="text-xs font-semibold uppercase tracking-widest text-cream-600 dark:text-night-200">Derived Value</Text>
          <Text className="mt-3 text-3xl font-semibold text-cream-900 dark:text-night-50">{percentLabel}</Text>
          <Text className="mt-2 text-sm text-cream-700 dark:text-night-200">通过 useDerivedValue 派生百分比文本。</Text>
        </View>

        <View className="w-full">
          <View className="h-2 w-full overflow-hidden rounded-full bg-cream-200 dark:bg-night-600">
            <Animated.View className="h-full rounded-full bg-warning-500 dark:bg-warning-400" style={barStyle} />
          </View>
          <View style={{ width: BAR_WIDTH }} className="mt-2 self-start">
            <Text className="text-xs text-cream-600 dark:text-night-300">progress.value = {percentLabel}</Text>
          </View>
        </View>
      </View>

      <View className="gap-3 px-6 pb-8 h-100 flex-row justify-center">
        <Button label="Reset" variant="outline" onPress={() => fillTo(0)} />
        <Button label="Fill to 80%" variant="warning" onPress={() => fillTo(0.8)} />
      </View>
    </View>
  );
}
