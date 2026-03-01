import { useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { Directions, Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const SCREEN_WIDTH = Dimensions.get("window").width;
const PAGES = ["第 1 页", "第 2 页", "第 3 页", "第 4 页"];
const PAGE_BG = [
  "bg-primary-50 dark:bg-primary-900/10",
  "bg-primary-100 dark:bg-primary-900/20",
  "bg-primary-200 dark:bg-primary-900/30",
  "bg-primary-300 dark:bg-primary-900/40",
];

export default function FlingPagerScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexSV = useSharedValue(0);
  const translateX = useSharedValue(0);

  const goToPage = (index: number) => {
    setCurrentIndex(index);
    translateX.value = withTiming(-index * SCREEN_WIDTH, {
      duration: 300,
      easing: Easing.out(Easing.cubic),
    });
  };

  const flingLeft = Gesture.Fling()
    .direction(Directions.LEFT)
    .onStart(() => {
      "worklet";
      const next = Math.min(currentIndexSV.value + 1, PAGES.length - 1);
      currentIndexSV.value = next;
      runOnJS(goToPage)(next);
    });

  const flingRight = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onStart(() => {
      "worklet";
      const prev = Math.max(currentIndexSV.value - 1, 0);
      currentIndexSV.value = prev;
      runOnJS(goToPage)(prev);
    });

  const gesture = Gesture.Exclusive(flingLeft, flingRight);

  const containerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View className="flex-1 overflow-hidden bg-cream-50 dark:bg-night-800">
      <GestureDetector gesture={gesture}>
        <Animated.View className="flex-1 flex-row" style={containerStyle}>
          {PAGES.map((page, i) => (
            <View
              key={page}
              style={{ width: SCREEN_WIDTH }}
              className={`h-full items-center justify-center ${PAGE_BG[i]}`}
            >
              <Text className="text-3xl font-semibold text-cream-900 dark:text-night-100">{page}</Text>
            </View>
          ))}
        </Animated.View>
      </GestureDetector>

      <View className="absolute bottom-10 left-0 right-0 flex-row justify-center gap-2">
        {PAGES.map((_, i) => (
          <View key={`dot-${i}`} className={`h-2 w-2 rounded-xs ${i === currentIndex ? "bg-primary-500" : "bg-cream-400 dark:bg-night-400"}`} />
        ))}
      </View>
    </View>
  );
}
