import { Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const BOX_SIZE = 288;

export default function PinchFocalZoomScreen() {
  const scale = useSharedValue(1);
  const baseScale = useSharedValue(1);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const baseTranslateX = useSharedValue(0);
  const baseTranslateY = useSharedValue(0);
  const focalStartX = useSharedValue(BOX_SIZE / 2);
  const focalStartY = useSharedValue(BOX_SIZE / 2);

  const pinch = Gesture.Pinch()
    .onStart((e) => {
      "worklet";
      baseScale.value = scale.value;
      baseTranslateX.value = translateX.value;
      baseTranslateY.value = translateY.value;
      // Lock focal anchor for this pinch session to avoid end-frame focal jump jitter.
      focalStartX.value = e.focalX;
      focalStartY.value = e.focalY;
    })
    .onUpdate((e) => {
      "worklet";
      const nextScale = baseScale.value * e.scale;
      const ratio = nextScale / baseScale.value;

      // Use locked focal anchor for this gesture to prevent release-time focal drift.
      const focalXFromCenter = focalStartX.value - BOX_SIZE / 2;
      const focalYFromCenter = focalStartY.value - BOX_SIZE / 2;

      scale.value = nextScale;
      translateX.value = baseTranslateX.value + focalXFromCenter * (1 - ratio);
      translateY.value = baseTranslateY.value + focalYFromCenter * (1 - ratio);
    })
    .onEnd(() => {
      "worklet";
      if (scale.value < 1) {
        scale.value = withTiming(1, { duration: 180, easing: Easing.out(Easing.cubic) });
        translateX.value = withTiming(0, { duration: 180, easing: Easing.out(Easing.cubic) });
        translateY.value = withTiming(0, { duration: 180, easing: Easing.out(Easing.cubic) });
      } else {
        // freeze final transform as next gesture baseline to avoid end-frame jitter
        baseScale.value = scale.value;
        baseTranslateX.value = translateX.value;
        baseTranslateY.value = translateY.value;
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }, { translateY: translateY.value }, { scale: scale.value }],
  }));

  return (
    <View className="flex-1 bg-cream-50 px-6 py-8 dark:bg-night-800">
      <Text className="text-xs font-semibold uppercase tracking-widest text-cream-700 dark:text-night-200">Pinch Focal Zoom</Text>
      <Text className="mt-2 text-base font-semibold text-cream-900 dark:text-night-100">以焦点为中心缩放</Text>
      <Text className="mt-1 text-sm text-cream-700 dark:text-night-300">使用 focalX / focalY 计算平移，让缩放围绕双指中点发生。</Text>

      <View className="mt-8 flex-1 items-center justify-center overflow-hidden rounded-xs border border-cream-200 bg-cream-100 dark:border-night-600 dark:bg-night-700">
        <GestureDetector gesture={pinch}>
          <Animated.View className="h-72 w-72 items-center justify-center rounded-xs border border-primary-300 bg-primary-100 dark:border-primary-700 dark:bg-primary-900/30" style={animatedStyle}>
            <Text className="text-base font-semibold text-primary-700 dark:text-primary-200">Focus Zoom</Text>
            <Text className="mt-1 text-xs text-primary-600 dark:text-primary-300">把手指放在任意角落捏合试试</Text>
          </Animated.View>
        </GestureDetector>
      </View>
    </View>
  );
}
