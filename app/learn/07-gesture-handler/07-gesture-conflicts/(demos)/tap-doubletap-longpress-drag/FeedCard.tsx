import { Heart } from "lucide-react-native";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { interpolateColor, runOnJS, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export type ConflictCard = {
  id: string;
  title: string;
  subtitle: string;
};

export function FeedCard({
  card,
  selected,
  liked,
  onSelect,
  onLike,
  onDragHint,
}: {
  card: ConflictCard;
  selected: boolean;
  liked: boolean;
  onSelect: (id: string) => void;
  onLike: (id: string) => void;
  onDragHint: (id: string) => void;
}) {
  const heartOpacity = useSharedValue(0);
  const heartScale = useSharedValue(0.6);
  const selectedProgress = useSharedValue(0);
  const pressedProgress = useSharedValue(0);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);
  const dragProgress = useSharedValue(0);

  useEffect(() => {
    selectedProgress.value = withTiming(selected ? 1 : 0, { duration: 180 });
  }, [selected, selectedProgress]);

  const playLike = () => {
    "worklet";
    heartOpacity.value = withSequence(withTiming(1, { duration: 80 }), withTiming(0, { duration: 280 }));
    heartScale.value = withSequence(withTiming(1.15, { duration: 120 }), withTiming(1, { duration: 80 }), withTiming(0.6, { duration: 160 }));
  };

  const heartStyle = useAnimatedStyle(() => ({
    opacity: heartOpacity.value,
    transform: [{ scale: heartScale.value }],
  }));

  const cardStyle = useAnimatedStyle(() => ({
    borderColor: interpolateColor(selectedProgress.value, [0, 1], ["#ede4ce", "#876045"]),
    backgroundColor: interpolateColor(selectedProgress.value, [0, 1], ["#fbf8f0", "#eae0d9"]),
    transform: [{ translateX: translateX.value }, { translateY: translateY.value }, { scale: 1 - 0.02 * pressedProgress.value + 0.03 * dragProgress.value }],
    shadowOpacity: 0.14 * dragProgress.value,
    shadowRadius: 10 * dragProgress.value,
    zIndex: dragProgress.value > 0 ? 20 : 0,
  }));

  const singleTap = Gesture.Tap()
    .numberOfTaps(1)
    .maxDuration(220)
    .onBegin(() => {
      "worklet";
      pressedProgress.value = withTiming(1, { duration: 80 });
    })
    .onStart(() => {
      "worklet";
      runOnJS(onSelect)(card.id);
    })
    .onFinalize(() => {
      "worklet";
      pressedProgress.value = withTiming(0, { duration: 120 });
    });

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .maxDelay(180)
    .onBegin(() => {
      "worklet";
      pressedProgress.value = withTiming(1, { duration: 80 });
    })
    .onStart(() => {
      "worklet";
      playLike();
      runOnJS(onLike)(card.id);
    })
    .onFinalize(() => {
      "worklet";
      pressedProgress.value = withTiming(0, { duration: 120 });
    });

  const longPress = Gesture.LongPress()
    .minDuration(260)
    .onStart(() => {
      "worklet";
      dragProgress.value = withTiming(1, { duration: 100 });
      runOnJS(onDragHint)(card.id);
    });

  const pan = Gesture.Pan()
    .activateAfterLongPress(260)
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
    .onFinalize(() => {
      "worklet";
      translateY.value = withTiming(0, { duration: 180 });
      translateX.value = withTiming(0, { duration: 180 });
      dragProgress.value = withTiming(0, { duration: 130 });
    });

  singleTap.requireExternalGestureToFail(doubleTap);
  singleTap.requireExternalGestureToFail(longPress);
  doubleTap.requireExternalGestureToFail(longPress);

  const tapGroup = Gesture.Exclusive(doubleTap, singleTap);
  const dragGroup = Gesture.Simultaneous(longPress, pan);
  const gesture = Gesture.Simultaneous(tapGroup, dragGroup);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View className="relative rounded-xs border p-4 dark:border-night-600 dark:bg-night-700" style={cardStyle}>
        <View className="absolute right-3 top-3">
          <Heart size={18} color={liked ? "#d9644f" : "#958362"} fill={liked ? "#d9644f" : "transparent"} />
        </View>

        <Text className="text-base font-semibold text-cream-900 dark:text-night-100">{card.title}</Text>
        <Text className="mt-1 text-sm text-cream-700 dark:text-night-300">{card.subtitle}</Text>

        <Animated.View pointerEvents="none" className="absolute inset-0 items-center justify-center" style={heartStyle}>
          <Heart size={62} color="#d9644f" fill="#d9644f" />
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
}
