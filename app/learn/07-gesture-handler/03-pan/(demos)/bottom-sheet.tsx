import { Dimensions, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const SHEET_HEIGHT = Math.min(560, SCREEN_HEIGHT * 0.82);

const SNAP_OPEN = 0;
const SNAP_HALF = SHEET_HEIGHT * 0.45;
const SNAP_CLOSED = SHEET_HEIGHT * 0.82;

const SNAP_POINTS = [SNAP_OPEN, SNAP_HALF, SNAP_CLOSED] as const;

function nearestSnapPoint(value: number) {
  "worklet";
  let nearest = SNAP_POINTS[0];
  let minDistance = Math.abs(value - nearest);

  for (let i = 1; i < SNAP_POINTS.length; i += 1) {
    const point = SNAP_POINTS[i];
    const distance = Math.abs(value - point);
    if (distance < minDistance) {
      minDistance = distance;
      nearest = point;
    }
  }

  return nearest;
}

export default function PanBottomSheetScreen() {
  const translateY = useSharedValue(SNAP_HALF);
  const startY = useSharedValue(SNAP_HALF);

  const setSnapLabel = (value: number) => {
    // no-op placeholder for future status UI
    void value;
  };

  const pan = Gesture.Pan()
    .onBegin(() => {
      "worklet";
      startY.value = translateY.value;
    })
    .onUpdate((e) => {
      "worklet";
      const next = startY.value + e.translationY;
      const clamped = Math.max(SNAP_OPEN, Math.min(SNAP_CLOSED, next));
      translateY.value = clamped;
    })
    .onEnd((e) => {
      "worklet";
      let target = nearestSnapPoint(translateY.value);

      // velocity bias: fling up/down prefers next snap in that direction
      if (e.velocityY < -900) {
        target = translateY.value <= SNAP_HALF ? SNAP_OPEN : SNAP_HALF;
      } else if (e.velocityY > 900) {
        target = translateY.value >= SNAP_HALF ? SNAP_CLOSED : SNAP_HALF;
      }

      translateY.value = withTiming(target, {
        duration: 220,
        easing: Easing.out(Easing.cubic),
      });
      runOnJS(setSnapLabel)(target);
    });

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <View className="flex-1 px-6 pt-8">
        <Text className="text-xs font-semibold uppercase tracking-widest text-cream-700 dark:text-night-200">Pan Bottom Sheet</Text>
        <Text className="mt-2 text-base font-semibold text-cream-900 dark:text-night-100">底部弹出面板（Snap Points）</Text>
        <Text className="mt-1 text-sm text-cream-700 dark:text-night-300">向上拖动展开，向下拖动收起。会吸附到展开 / 半展开 / 收起三个位置。</Text>
      </View>

      <GestureDetector gesture={pan}>
        <Animated.View
          className="absolute bottom-0 left-0 right-0 rounded-t-2xl border border-cream-200 bg-cream-100 px-6 pb-8 pt-4 dark:border-night-600 dark:bg-night-700"
          style={[{ height: SHEET_HEIGHT }, sheetStyle]}
        >
          <View className="mb-4 items-center">
            <View className="h-1.5 w-14 rounded-xs bg-cream-400 dark:bg-night-400" />
          </View>

          <Text className="text-sm font-semibold text-cream-900 dark:text-night-100">Bottom Sheet Content</Text>
          <Text className="mt-2 text-sm text-cream-700 dark:text-night-300">这是一个常见的移动端交互容器，可用于筛选、详情、操作面板等内容承载。</Text>

          <View className="mt-4 gap-3">
            <View className="rounded-xs bg-cream-50 px-4 py-3 dark:bg-night-800">
              <Text className="text-sm text-cream-800 dark:text-night-200">Snap 1: Fully Open</Text>
            </View>
            <View className="rounded-xs bg-cream-50 px-4 py-3 dark:bg-night-800">
              <Text className="text-sm text-cream-800 dark:text-night-200">Snap 2: Half Open</Text>
            </View>
            <View className="rounded-xs bg-cream-50 px-4 py-3 dark:bg-night-800">
              <Text className="text-sm text-cream-800 dark:text-night-200">Snap 3: Closed</Text>
            </View>
          </View>
        </Animated.View>
      </GestureDetector>
    </View>
  );
}
