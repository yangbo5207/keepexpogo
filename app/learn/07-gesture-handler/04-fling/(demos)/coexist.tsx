import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Directions, Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

function ImageViewer({ onDismiss }: { onDismiss: () => void }) {
  const scale = useSharedValue(1);
  const baseScale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);

  const pinch = Gesture.Pinch()
    .onStart(() => {
      "worklet";
      baseScale.value = scale.value;
    })
    .onUpdate((e) => {
      "worklet";
      scale.value = baseScale.value * e.scale;
    })
    .onEnd(() => {
      "worklet";
      if (scale.value < 1) {
        scale.value = withSpring(1);
      }
    });

  const pan = Gesture.Pan()
    .onStart(() => {
      "worklet";
      startX.value = translateX.value;
      startY.value = translateY.value;
    })
    .onUpdate((e) => {
      "worklet";
      translateX.value = startX.value + e.translationX;
      translateY.value = startY.value + e.translationY;
    })
    .onEnd(() => {
      "worklet";
      if (scale.value <= 1) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    });

  const flingDown = Gesture.Fling()
    .direction(Directions.DOWN)
    .onStart(() => {
      "worklet";
      if (scale.value <= 1) {
        runOnJS(onDismiss)();
      }
    });

  const gesture = Gesture.Simultaneous(flingDown, pinch, pan);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }, { translateY: translateY.value }, { scale: scale.value }],
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View className="flex-1 items-center justify-center rounded-xs border border-cream-200 bg-cream-100 p-6 dark:border-night-600 dark:bg-night-700" style={animatedStyle}>
        <View className="h-72 w-72 items-center justify-center rounded-xs border border-cream-300 bg-cream-50 dark:border-night-500 dark:bg-night-800">
          <Text className="text-lg font-semibold text-cream-900 dark:text-night-100">Image Preview</Text>
          <Text className="mt-2 text-xs text-cream-700 dark:text-night-300">单指拖拽，双指缩放，向下快甩关闭</Text>
        </View>
      </Animated.View>
    </GestureDetector>
  );
}

export default function FlingCoexistScreen() {
  const [visible, setVisible] = useState(true);

  return (
    <View className="flex-1 bg-cream-50 px-6 py-8 dark:bg-night-800">
      <Text className="text-xs font-semibold uppercase tracking-widest text-cream-700 dark:text-night-200">Fling + Pinch Coexist</Text>
      <Text className="mt-2 text-base font-semibold text-cream-900 dark:text-night-100">手势共存：缩放与向下快甩关闭</Text>
      <Text className="mt-1 text-sm text-cream-700 dark:text-night-300">单指可拖拽、双指可缩放，同时保留单指向下甩动关闭能力。</Text>

      <View className="mt-6 flex-1 overflow-hidden rounded-xs border border-cream-200 bg-cream-100 dark:border-night-600 dark:bg-night-700">
      {visible ? (
        <ImageViewer onDismiss={() => setVisible(false)} />
      ) : (
        <View className="flex-1 items-center justify-center px-6">
          <Text className="text-xl font-semibold text-cream-900 dark:text-night-100">Viewer Closed</Text>
          <Text className="mt-2 text-sm text-cream-700 dark:text-night-300">在未缩放状态下向下快甩可关闭</Text>
          <Pressable className="mt-6 rounded-xs bg-primary-500 px-4 py-2" onPress={() => setVisible(true)}>
            <Text className="text-sm font-semibold text-white">重新打开</Text>
          </Pressable>
        </View>
      )}
      </View>
    </View>
  );
}
