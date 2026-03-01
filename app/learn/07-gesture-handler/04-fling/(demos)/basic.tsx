import { useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { Directions, Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function FlingBasicScreen() {
  const [, setActiveIndex] = useState(0);
  const currentIndex = useSharedValue(0);
  const offsetX = useSharedValue(0);

  const trackStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offsetX.value }],
  }));

  const flingRight = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onStart(() => {
      "worklet";
      if (currentIndex.value <= 0) return;
      currentIndex.value = 0;
      offsetX.value = withTiming(0, { duration: 260 });
      runOnJS(setActiveIndex)(0);
    });

  const flingLeft = Gesture.Fling()
    .direction(Directions.LEFT)
    .onStart(() => {
      "worklet";
      if (currentIndex.value >= 1) return;
      currentIndex.value = 1;
      offsetX.value = withTiming(-SCREEN_WIDTH, { duration: 260 });
      runOnJS(setActiveIndex)(1);
    });

  const gesture = Gesture.Exclusive(flingLeft, flingRight);

  return (
    <GestureDetector gesture={gesture}>
      <View className="flex-1 overflow-hidden">
        <Animated.View className="flex-1 flex-row" style={[{ width: SCREEN_WIDTH * 2 }, trackStyle]}>
          <View className="flex-1 items-center justify-center bg-cream-100" style={{ width: SCREEN_WIDTH }}>
            <Text className="text-3xl font-semibold text-cream-900">页面 A</Text>
            <Text className="mt-3 text-sm text-cream-700">左屏内容</Text>
          </View>

          <View className="flex-1 items-center justify-center bg-primary-500" style={{ width: SCREEN_WIDTH }}>
            <Text className="text-3xl font-semibold text-white">页面 B</Text>
            <Text className="mt-3 text-sm text-white/85">右屏内容</Text>
          </View>
        </Animated.View>
      </View>
    </GestureDetector>
  );
}
