import { Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

const AREA_SIZE = 280;
const BOX_SIZE = 72;
const MAX_OFFSET = (AREA_SIZE - BOX_SIZE) / 2;

export default function PanBoundedDragScreen() {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);

  const pan = Gesture.Pan()
    .onBegin(() => {
      "worklet";
      startX.value = offsetX.value;
      startY.value = offsetY.value;
    })
    .onUpdate((e) => {
      "worklet";
      const nextX = startX.value + e.translationX;
      const nextY = startY.value + e.translationY;

      offsetX.value = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, nextX));
      offsetY.value = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, nextY));
    });

  const boxStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offsetX.value }, { translateY: offsetY.value }],
  }));

  return (
    <View className="flex-1 items-center justify-center bg-cream-50 px-6 dark:bg-night-800">
      <Text className="mb-6 text-xs font-semibold uppercase tracking-widest text-cream-700 dark:text-night-200">Pan Bounded Drag</Text>

      <View className="items-center">
        <View
          className="items-center justify-center overflow-hidden rounded-xs border border-cream-300 bg-cream-100 dark:border-night-500 dark:bg-night-700"
          style={{ width: AREA_SIZE, height: AREA_SIZE }}
        >
          <GestureDetector gesture={pan}>
            <Animated.View className="h-[72px] w-[72px] items-center justify-center rounded-xs bg-primary-500" style={boxStyle}>
              <Text className="text-xs font-semibold text-white">Drag</Text>
            </Animated.View>
          </GestureDetector>
        </View>
      </View>

      <Text className="mt-6 text-center text-sm text-cream-700 dark:text-night-300">方块被限制在矩形区域内，无法拖出边界。</Text>
    </View>
  );
}
