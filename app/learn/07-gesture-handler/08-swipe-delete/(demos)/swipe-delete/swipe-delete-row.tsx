import { Pressable, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedReaction, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import type { SharedValue } from "react-native-reanimated";
import { DELETE_WIDTH, THRESHOLD, type SwipeDeleteItem } from "./constants";

type SwipeDeleteRowProps = {
  item: SwipeDeleteItem;
  rowId: number;
  activeRowId: SharedValue<number>;
  onDelete: (id: string) => void;
};

export function SwipeDeleteRow({ item, rowId, activeRowId, onDelete }: SwipeDeleteRowProps) {
  const translateX = useSharedValue(0);
  const startX = useSharedValue(0);

  useAnimatedReaction(
    () => activeRowId.value,
    (currentActiveId) => {
      if (currentActiveId !== rowId && translateX.value !== 0) {
        translateX.value = withTiming(0, { duration: 180 });
      }
    },
  );

  const pan = Gesture.Pan()
    .activeOffsetX([-10, 10])
    .failOffsetY([-5, 5])
    .onStart(() => {
      "worklet";
      startX.value = translateX.value;
      if (activeRowId.value !== rowId && activeRowId.value !== -1) {
        activeRowId.value = -1;
      }
    })
    .onUpdate((e) => {
      "worklet";
      const next = startX.value + e.translationX;
      translateX.value = Math.max(-DELETE_WIDTH, Math.min(0, next));
    })
    .onEnd(() => {
      "worklet";
      if (translateX.value < -THRESHOLD) {
        translateX.value = withTiming(-DELETE_WIDTH, { duration: 200 });
        activeRowId.value = rowId;
      } else {
        translateX.value = withTiming(0, { duration: 200 });
        if (activeRowId.value === rowId) {
          activeRowId.value = -1;
        }
      }
    });

  const contentStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View className="overflow-hidden rounded-xs border border-cream-200 dark:border-night-600">
      <View className="absolute bottom-0 right-0 top-0 w-20 items-center justify-center bg-danger-500">
        <Pressable className="h-full w-full items-center justify-center" onPress={() => onDelete(item.id)}>
          <Text className="text-sm font-semibold text-white">删除</Text>
        </Pressable>
      </View>

      <GestureDetector gesture={pan}>
        <Animated.View className="min-h-18 bg-cream-100 px-4 py-3 dark:bg-night-700" style={contentStyle}>
          <Text className="text-base font-semibold text-cream-900 dark:text-night-100">{item.title}</Text>
          <Text className="mt-1 text-sm text-cream-700 dark:text-night-300">{item.subtitle}</Text>
        </Animated.View>
      </GestureDetector>
    </View>
  );
}
