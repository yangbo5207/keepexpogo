import { useEffect, useState } from "react";
import { Text, View, useColorScheme } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { interpolateColor, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const MENU_ITEMS = ["复制", "转发", "收藏", "删除"] as const;
const ITEM_HEIGHT = 44;
const MENU_HEIGHT = MENU_ITEMS.length * ITEM_HEIGHT;
const MENU_GAP = 4;

type MessageBubbleProps = {
  message: string;
  onSelectAction: (action: string) => void;
};

function MenuItemRow({ item, active, showDivider }: { item: string; active: boolean; showDivider: boolean }) {
  const activeProgress = useSharedValue(0);

  useEffect(() => {
    activeProgress.value = withTiming(active ? 1 : 0, { duration: 120 });
  }, [active, activeProgress]);

  const rowStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(activeProgress.value, [0, 1], ["rgba(0,0,0,0)", "rgba(135,96,69,0.14)"]),
  }));

  return (
    <Animated.View className={`h-11 justify-center px-5 ${showDivider ? "border-b border-cream-200 dark:border-night-600" : ""}`} style={rowStyle}>
      <Text className={`text-[15px] font-semibold ${item === "删除" ? "text-danger-500" : "text-cream-900 dark:text-night-100"}`}>{item}</Text>
    </Animated.View>
  );
}

export function MessageBubble({ message, onSelectAction }: MessageBubbleProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const [menuVisible, setMenuVisible] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const menuOpacity = useSharedValue(0);
  const menuScale = useSharedValue(0.8);
  const highlightIndex = useSharedValue(-1);
  const isMenuOpen = useSharedValue(false);
  const pressProgress = useSharedValue(0);

  const showMenu = () => {
    setMenuVisible(true);
  };

  const hideMenu = () => {
    setMenuVisible(false);
    setHighlightedIndex(-1);
  };

  const syncHighlightIndex = (index: number) => {
    setHighlightedIndex(index);
  };

  const finishHideMenu = () => {
    setMenuVisible(false);
    setHighlightedIndex(-1);
  };

  const handleSelect = (index: number) => {
    const action = MENU_ITEMS[index];
    if (!action) return;
    onSelectAction(action);
  };

  const menuStyle = useAnimatedStyle(() => ({
    opacity: menuOpacity.value,
    transform: [{ scale: menuScale.value }],
  }));

  const bubblePressOverlayStyle = useAnimatedStyle(() => ({
    opacity: withTiming(pressProgress.value, { duration: 120 }),
  }));

  const bubbleBorderStyle = useAnimatedStyle(() => ({
    borderColor: interpolateColor(pressProgress.value, [0, 1], isDark ? ["#302c25", "#6e4d38"] : ["#ede4ce", "#a07a5c"]),
  }));

  const bubbleTextStyle = useAnimatedStyle(() => ({
    color: interpolateColor(pressProgress.value, [0, 1], isDark ? ["#c9c3b7", "#eae0d9"] : ["#584a35", "#6e4d38"]),
  }));

  const longPress = Gesture.LongPress()
    .minDuration(400)
    .maxDistance(9999)
    .shouldCancelWhenOutside(false)
    .onBegin(() => {
      "worklet";
      pressProgress.value = withTiming(1, { duration: 120 });
    })
    .onStart(() => {
      "worklet";
      if (isMenuOpen.value) return;
      isMenuOpen.value = true;
      menuOpacity.value = withTiming(1, { duration: 150 });
      menuScale.value = withTiming(1, { duration: 150 });
      runOnJS(showMenu)();
    })
    .onTouchesMove((e) => {
      "worklet";
      const touch = e.allTouches[0];
      if (!touch) return;

      // touch.y is relative to wrapper (menu area + gap + bubble area).
      // Menu occupies y in [0, MENU_HEIGHT], gap is [MENU_HEIGHT, MENU_HEIGHT + MENU_GAP].
      const localY = touch.y;
      const idx = Math.floor(localY / ITEM_HEIGHT);
      const next = idx >= 0 && idx < MENU_ITEMS.length ? idx : -1;

      highlightIndex.value = next;
      runOnJS(syncHighlightIndex)(next);
    })
    .onEnd(() => {
      "worklet";
      const idx = highlightIndex.value;
      if (idx >= 0 && idx < MENU_ITEMS.length) {
        runOnJS(handleSelect)(idx);
      }

      menuOpacity.value = withTiming(0, { duration: 100 }, () => {
        runOnJS(finishHideMenu)();
      });
      menuScale.value = withTiming(0.8, { duration: 100 });
      highlightIndex.value = -1;
      isMenuOpen.value = false;
      pressProgress.value = withTiming(0, { duration: 120 });
      runOnJS(syncHighlightIndex)(-1);
    })
    .onFinalize((_event, success) => {
      "worklet";
      if (!success) {
        menuOpacity.value = withTiming(0, { duration: 100 }, () => {
          runOnJS(hideMenu)();
        });
        menuScale.value = withTiming(0.8, { duration: 100 });
        highlightIndex.value = -1;
        isMenuOpen.value = false;
        pressProgress.value = withTiming(0, { duration: 120 });
        runOnJS(syncHighlightIndex)(-1);
      }
    });

  return (
    <GestureDetector gesture={longPress}>
      <View
        className={menuVisible ? "z-50" : undefined}
        style={{
          paddingTop: MENU_HEIGHT + MENU_GAP,
        }}
      >
        <Animated.View className="w-52 overflow-hidden rounded-xs border bg-cream-100 px-3 py-3 dark:bg-night-700" style={bubbleBorderStyle}>
          <Animated.View pointerEvents="none" className="absolute bottom-0 left-0 right-0 top-0 bg-primary-300/35 dark:bg-primary-400/25" style={bubblePressOverlayStyle} />
          <Animated.Text className="text-sm" style={bubbleTextStyle}>
            {message}
          </Animated.Text>
        </Animated.View>

        {menuVisible ? (
          <Animated.View
            className="absolute left-10 z-50 w-32 overflow-hidden rounded-xs border border-cream-200 bg-cream-50 shadow-lg shadow-black/10 dark:border-night-600 dark:bg-night-700"
            style={[
              {
                top: 0,
                elevation: 8,
              },
              menuStyle,
            ]}
          >
            {MENU_ITEMS.map((item, i) => (
              <MenuItemRow key={item} item={item} active={highlightedIndex === i} showDivider={i < MENU_ITEMS.length - 1} />
            ))}
          </Animated.View>
        ) : null}
      </View>
    </GestureDetector>
  );
}
