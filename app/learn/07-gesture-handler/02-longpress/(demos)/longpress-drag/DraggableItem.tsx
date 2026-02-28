import { Text } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

type DraggableItemProps = {
  onDragStart?: () => void;
  onDragEnd?: () => void;
};

export function DraggableItem({ onDragStart, onDragEnd }: DraggableItemProps) {
  const isHeld = useSharedValue(false);
  const translateY = useSharedValue(0);
  const startY = useSharedValue(0);
  const zIndex = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(isHeld.value ? 1.03 : 1, { duration: 150 }) }, { translateY: translateY.value }],
    zIndex: zIndex.value,
    shadowOpacity: withTiming(isHeld.value ? 0.15 : 0, { duration: 150 }),
    shadowRadius: withTiming(isHeld.value ? 10 : 0, { duration: 150 }),
  }));

  const longPress = Gesture.LongPress()
    .minDuration(300)
    .maxDistance(20)
    .onStart(() => {
      "worklet";
      isHeld.value = true;
      zIndex.value = 100;
      if (onDragStart) {
        runOnJS(onDragStart)();
      }
    });

  const pan = Gesture.Pan()
    .activateAfterLongPress(300)
    .onStart(() => {
      "worklet";
      startY.value = translateY.value;
    })
    .onUpdate((e) => {
      "worklet";
      translateY.value = startY.value + e.translationY;
    })
    .onEnd(() => {
      "worklet";
      translateY.value = withSpring(0);
    })
    .onFinalize(() => {
      "worklet";
      isHeld.value = false;
      zIndex.value = 0;
      if (onDragEnd) {
        runOnJS(onDragEnd)();
      }
    });

  const gesture = Gesture.Simultaneous(longPress, pan);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={animatedStyle}
        className="rounded-xs border border-cream-200 bg-white px-4 py-4 shadow-sm shadow-black/10 dark:border-night-600 dark:bg-night-700"
      >
        <Text className="text-sm font-semibold text-cream-900 dark:text-night-100">LongPress Drag Item</Text>
        <Text className="mt-1 text-xs text-cream-700 dark:text-night-300">长按 300ms 后上下拖动，松手自动回弹</Text>
      </Animated.View>
    </GestureDetector>
  );
}
