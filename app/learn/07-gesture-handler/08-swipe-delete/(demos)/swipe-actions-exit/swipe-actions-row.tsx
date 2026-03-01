import { Dimensions, Pressable, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { runOnJS, useAnimatedReaction, useAnimatedStyle, useSharedValue, withTiming, type SharedValue } from "react-native-reanimated";
import { ACTION_BUTTON_WIDTH, ACTION_WIDTH, BUTTONS, ROW_HEIGHT, THRESHOLD, type SwipeActionType, type SwipeDeleteItem } from "./constants";

const SCREEN_WIDTH = Dimensions.get("window").width;

type SwipeActionsRowProps = {
  item: SwipeDeleteItem;
  rowId: number;
  activeRowId: SharedValue<number>;
  onAction: (id: string, action: SwipeActionType) => void;
};

export function SwipeActionsRow({ item, rowId, activeRowId, onAction }: SwipeActionsRowProps) {
  const translateX = useSharedValue(0);
  const startX = useSharedValue(0);
  const itemHeight = useSharedValue(ROW_HEIGHT);
  const opacity = useSharedValue(1);
  const spacing = useSharedValue(10);
  const deleting = useSharedValue(false);

  useAnimatedReaction(
    () => activeRowId.value,
    (currentActiveId) => {
      if (currentActiveId !== rowId && translateX.value !== 0 && !deleting.value) {
        translateX.value = withTiming(0, { duration: 180 });
      }
    },
  );

  const pan = Gesture.Pan()
    .activeOffsetX([-10, 10])
    .failOffsetY([-5, 5])
    .onStart(() => {
      "worklet";
      if (deleting.value) {
        return;
      }
      startX.value = translateX.value;
      if (activeRowId.value !== rowId && activeRowId.value !== -1) {
        activeRowId.value = -1;
      }
    })
    .onUpdate((e) => {
      "worklet";
      if (deleting.value) {
        return;
      }
      const next = startX.value + e.translationX;
      translateX.value = Math.max(-ACTION_WIDTH, Math.min(0, next));
    })
    .onEnd(() => {
      "worklet";
      if (deleting.value) {
        return;
      }
      if (translateX.value < -THRESHOLD) {
        translateX.value = withTiming(-ACTION_WIDTH, { duration: 200 });
        activeRowId.value = rowId;
      } else {
        translateX.value = withTiming(0, { duration: 200 });
        if (activeRowId.value === rowId) {
          activeRowId.value = -1;
        }
      }
    });

  const handlePressAction = (action: SwipeActionType) => {
    if (action === "delete") {
      if (deleting.value) {
        return;
      }
      deleting.value = true;
      activeRowId.value = -1;
      translateX.value = withTiming(-SCREEN_WIDTH, { duration: 200 }, () => {
        itemHeight.value = withTiming(0, { duration: 200 });
        spacing.value = withTiming(0, { duration: 200 });
        opacity.value = withTiming(0, { duration: 200 }, () => {
          runOnJS(onAction)(item.id, "delete");
        });
      });
      return;
    }

    activeRowId.value = -1;
    translateX.value = withTiming(0, { duration: 180 });
    onAction(item.id, "pin");
  };

  const contentStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const rowStyle = useAnimatedStyle(() => ({
    height: itemHeight.value,
    opacity: opacity.value,
    marginBottom: spacing.value,
  }));

  return (
    <Animated.View style={rowStyle}>
      <View className="overflow-hidden rounded-xs border border-cream-200 dark:border-night-600">
        <View className="absolute bottom-0 right-0 top-0 flex-row">
          {BUTTONS.map((button) => (
            <Pressable
              key={button.action}
              className="h-full items-center justify-center"
              style={{ width: ACTION_BUTTON_WIDTH, backgroundColor: button.color }}
              onPress={() => handlePressAction(button.action)}
            >
              <Text className="text-sm font-semibold text-white">{button.label}</Text>
            </Pressable>
          ))}
        </View>

        <GestureDetector gesture={pan}>
          <Animated.View className="h-18 justify-center bg-cream-100 px-4 dark:bg-night-700" style={contentStyle}>
            <Text className="text-base font-semibold text-cream-900 dark:text-night-100">{item.title}</Text>
            <Text className="mt-1 text-sm text-cream-700 dark:text-night-300">{item.subtitle}</Text>
          </Animated.View>
        </GestureDetector>
      </View>
    </Animated.View>
  );
}
