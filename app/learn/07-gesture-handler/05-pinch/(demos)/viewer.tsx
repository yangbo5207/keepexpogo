import { Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export default function PinchViewerScreen() {
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
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
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

  const gesture = Gesture.Simultaneous(pinch, pan);

  const imageStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }, { translateY: translateY.value }, { scale: scale.value }],
  }));

  return (
    <View className="flex-1 bg-cream-50 px-6 py-8 dark:bg-night-800">
      <Text className="text-xs font-semibold uppercase tracking-widest text-cream-700 dark:text-night-200">Pinch Viewer</Text>
      <Text className="mt-2 text-base font-semibold text-cream-900 dark:text-night-100">图片查看器：缩放 + 平移</Text>
      <Text className="mt-1 text-sm text-cream-700 dark:text-night-300">双指捏合缩放，单指拖动平移。两个手势通过 Simultaneous 共存。</Text>

      <View className="mt-8 flex-1 items-center justify-center overflow-hidden rounded-xs border border-cream-200 bg-cream-100 dark:border-night-600 dark:bg-night-700">
        <GestureDetector gesture={gesture}>
          <Animated.View className="h-72 w-72 items-center justify-center rounded-xs border border-primary-300 bg-primary-100 dark:border-primary-700 dark:bg-primary-900/30" style={imageStyle}>
            <Text className="text-lg font-semibold text-primary-700 dark:text-primary-200">Photo</Text>
          </Animated.View>
        </GestureDetector>
      </View>
    </View>
  );
}
