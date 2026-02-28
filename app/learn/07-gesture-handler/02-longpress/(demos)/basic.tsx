import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export default function LongPressBasicScreen() {
  const scale = useSharedValue(1);
  const bgOpacity = useSharedValue(0);
  const [menuCount, setMenuCount] = useState(0);

  const fullOverlay = () => ({
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#000",
  });

  const showContextMenu = () => {
    setMenuCount((current) => current + 1);
    console.log("open context menu");
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const overlayStyle = useAnimatedStyle(() => ({
    ...fullOverlay,
    opacity: bgOpacity.value,
  }));

  const longPress = Gesture.LongPress()
    .onBegin(() => {
      "worklet";
      scale.value = withTiming(0.95, { duration: 100 });
    })
    .onStart(() => {
      "worklet";
      bgOpacity.value = withTiming(0.3, { duration: 200 });
      runOnJS(showContextMenu)();
    })
    .onFinalize(() => {
      "worklet";
      scale.value = withTiming(1, { duration: 150 });
      bgOpacity.value = withTiming(0, { duration: 150 });
    });

  return (
    <View className="flex-1 items-center justify-center gap-6 bg-cream-50 px-6 dark:bg-night-800">
      <Text className="text-xs font-semibold uppercase tracking-widest text-cream-700 dark:text-night-200">LongPress Basic</Text>
      <Text className="text-sm text-cream-800 dark:text-night-200">菜单触发次数：{menuCount}</Text>

      <GestureDetector gesture={longPress}>
        <Animated.View style={animatedStyle} className="relative h-14 w-44 items-center justify-center overflow-hidden rounded-xs bg-primary-500 shadow-lg shadow-primary-500/25">
          <Text className="text-base font-semibold text-white">长按我</Text>
          <Animated.View style={overlayStyle} pointerEvents="none" />
        </Animated.View>
      </GestureDetector>

      <Text className="text-center text-sm text-cream-700 dark:text-night-300">按下立即缩小，长按识别成功后触发动作，松开时恢复 UI。</Text>
    </View>
  );
}
