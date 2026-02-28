import { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { Extrapolation, interpolate, interpolateColor, runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const SWIPE_DISTANCE = 120;
const SWIPE_VELOCITY = 800;

type CardItem = {
  id: string;
  title: string;
  subtitle: string;
};

const CARDS: CardItem[] = [
  { id: "1", title: "Mountain Trail", subtitle: "Weekend outdoor adventure" },
  { id: "2", title: "Coffee Workshop", subtitle: "Learn hand-brew techniques" },
  { id: "3", title: "City Night Walk", subtitle: "Discover hidden corners" },
  { id: "4", title: "Book Swap", subtitle: "Exchange and discuss favorites" },
];

export default function PanSwipeCardScreen() {
  const [index, setIndex] = useState(0);
  const [lastAction, setLastAction] = useState("暂无操作");

  const translateX = useSharedValue(0);
  const startX = useSharedValue(0);
  const enterScale = useSharedValue(0.92);
  const enterOpacity = useSharedValue(0);

  const currentCard = CARDS[index % CARDS.length];

  useEffect(() => {
    enterScale.value = 0.92;
    enterOpacity.value = 0;
    enterScale.value = withTiming(1, { duration: 220 });
    enterOpacity.value = withTiming(1, { duration: 220 });
  }, [enterOpacity, enterScale, index]);

  const finalizeSwipe = (direction: "left" | "right") => {
    setLastAction(direction === "right" ? "喜欢（右滑）" : "跳过（左滑）");
    setIndex((current) => current + 1);
    translateX.value = 0;
    startX.value = 0;
  };

  const pan = Gesture.Pan()
    .onBegin(() => {
      "worklet";
      startX.value = translateX.value;
    })
    .onUpdate((e) => {
      "worklet";
      translateX.value = startX.value + e.translationX;
    })
    .onEnd((e) => {
      "worklet";
      const shouldSwipeRight = translateX.value > SWIPE_DISTANCE || e.velocityX > SWIPE_VELOCITY;
      const shouldSwipeLeft = translateX.value < -SWIPE_DISTANCE || e.velocityX < -SWIPE_VELOCITY;

      if (shouldSwipeRight) {
        translateX.value = withTiming(SCREEN_WIDTH * 1.2, { duration: 220 }, (finished) => {
          if (finished) {
            runOnJS(finalizeSwipe)("right");
          }
        });
        return;
      }

      if (shouldSwipeLeft) {
        translateX.value = withTiming(-SCREEN_WIDTH * 1.2, { duration: 220 }, (finished) => {
          if (finished) {
            runOnJS(finalizeSwipe)("left");
          }
        });
        return;
      }

      translateX.value = withSpring(0, { damping: 14, stiffness: 160 });
    });

  const cardStyle = useAnimatedStyle(() => {
    const rotate = interpolate(translateX.value, [-SCREEN_WIDTH, 0, SCREEN_WIDTH], [-12, 0, 12]);
    return {
      transform: [{ translateX: translateX.value }, { rotate: `${rotate}deg` }, { scale: enterScale.value }],
      opacity: enterOpacity.value,
      borderColor: interpolateColor(translateX.value, [-SWIPE_DISTANCE, 0, SWIPE_DISTANCE], ["#d9644f", "#ede4ce", "#729158"]),
    };
  });

  const likeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, SWIPE_DISTANCE], [0, 1], Extrapolation.CLAMP),
    transform: [{ scale: interpolate(translateX.value, [0, SWIPE_DISTANCE], [0.95, 1], Extrapolation.CLAMP) }],
  }));

  const skipStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [-SWIPE_DISTANCE, 0], [1, 0], Extrapolation.CLAMP),
    transform: [{ scale: interpolate(translateX.value, [-SWIPE_DISTANCE, 0], [1, 0.95], Extrapolation.CLAMP) }],
  }));

  return (
    <View className="flex-1 bg-cream-50 px-6 py-8 dark:bg-night-800">
      <Text className="text-xs font-semibold uppercase tracking-widest text-cream-700 dark:text-night-200">Pan Swipe Card</Text>
      <Text className="mt-2 text-base font-semibold text-cream-900 dark:text-night-100">左右滑动卡片</Text>
      <Text className="mt-1 text-sm text-cream-700 dark:text-night-300">右滑喜欢，左滑跳过；距离或速度不够会回弹。</Text>

      <View className="mt-8 flex-1 items-center">
        <View className="h-80 w-full max-w-sm items-center justify-center">
          <GestureDetector gesture={pan}>
            <Animated.View className="h-72 w-full rounded-xs border border-cream-200 bg-cream-100 p-6 dark:border-night-600 dark:bg-night-700" style={cardStyle}>
              <Animated.View className="absolute left-1/2 top-4 -translate-x-1/2 rounded-xs border border-success-600 bg-success-50 px-3 py-1.5" style={likeStyle}>
                <Text className="text-base font-bold tracking-wide text-success-700">LIKE</Text>
              </Animated.View>

              <Animated.View className="absolute left-1/2 top-4 -translate-x-1/2 rounded-xs border border-danger-600 bg-danger-50 px-3 py-1.5" style={skipStyle}>
                <Text className="text-base font-bold tracking-wide text-danger-700">SKIP</Text>
              </Animated.View>

              <View className="flex-1 items-center justify-center">
                <Text className="text-2xl font-semibold text-cream-900 dark:text-night-100">{currentCard.title}</Text>
                <Text className="mt-3 text-sm text-cream-700 dark:text-night-300">{currentCard.subtitle}</Text>
              </View>
            </Animated.View>
          </GestureDetector>
        </View>
      </View>

      <View className="rounded-xs bg-cream-100 px-4 py-3 dark:bg-night-700">
        <Text className="text-xs font-semibold uppercase tracking-wide text-cream-600 dark:text-night-300">Last Action</Text>
        <Text className="mt-1 text-sm text-cream-900 dark:text-night-100">{lastAction}</Text>
      </View>
    </View>
  );
}
