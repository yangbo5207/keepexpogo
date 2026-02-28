import { Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withDecay } from "react-native-reanimated";

export default function PanDecayScreen() {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);

  const pan = Gesture.Pan()
    .onStart(() => {
      "worklet";
      startX.value = offsetX.value;
      startY.value = offsetY.value;
    })
    .onUpdate((e) => {
      "worklet";
      offsetX.value = startX.value + e.translationX;
      offsetY.value = startY.value + e.translationY;
    })
    .onEnd((e) => {
      "worklet";
      offsetX.value = withDecay({ velocity: e.velocityX });
      offsetY.value = withDecay({ velocity: e.velocityY });
    });

  const boxStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offsetX.value }, { translateY: offsetY.value }],
  }));

  return (
    <View className="flex-1 items-center justify-center bg-cream-50 px-6 dark:bg-night-800">
      <Text className="mb-8 text-xs font-semibold uppercase tracking-widest text-cream-700 dark:text-night-200">Pan Decay</Text>

      <GestureDetector gesture={pan}>
        <Animated.View className="h-24 w-24 items-center justify-center rounded-xs bg-primary-500 shadow-xl shadow-primary-500/25" style={boxStyle}>
          <Text className="text-sm font-semibold text-white">Fling</Text>
        </Animated.View>
      </GestureDetector>

      <Text className="mt-8 text-center text-sm text-cream-700 dark:text-night-300">拖动并甩出方块，松手后会按速度继续惯性滑动。</Text>
    </View>
  );
}
