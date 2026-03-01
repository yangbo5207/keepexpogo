import { memo, useCallback, useEffect, useRef } from "react";
import { LayoutChangeEvent, Pressable, Text, View, type ViewStyle } from "react-native";
import Animated, { Easing, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export type ScrollTabItem = {
  key: string;
  label: string;
};

type ScrollableTabsProps = {
  tabs: ScrollTabItem[];
  activeIndex: number;
  onChange: (index: number) => void;
  indicatorWidth?: number;
  indicatorClassName?: string;
  indicatorStyle?: Omit<ViewStyle, "width" | "transform">;
};

type TabItemProps = {
  index: number;
  label: string;
  active: boolean;
  onPress: (index: number) => void;
  onLayoutMeasure: (index: number, event: LayoutChangeEvent) => void;
};

const TabItem = memo(
  function TabItem({ index, label, active, onPress, onLayoutMeasure }: TabItemProps) {
    return (
      <Pressable onPress={() => onPress(index)} onLayout={(event) => onLayoutMeasure(index, event)} className="px-4 py-3">
        <Text className={active ? "text-sm font-semibold text-primary-700 dark:text-primary-200" : "text-sm font-medium text-cream-700 dark:text-night-300"}>{label}</Text>
      </Pressable>
    );
  },
  (prev, next) => {
    return prev.index === next.index && prev.label === next.label && prev.active === next.active && prev.onPress === next.onPress && prev.onLayoutMeasure === next.onLayoutMeasure;
  },
);

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export function ScrollableTabs({ tabs, activeIndex, onChange, indicatorWidth: fixedIndicatorWidth, indicatorClassName, indicatorStyle: customIndicatorStyle }: ScrollableTabsProps) {
  const scrollRef = useRef<Animated.ScrollView | null>(null);
  const itemLayoutsRef = useRef<Record<number, { x: number; width: number }>>({});
  const activeIndexRef = useRef(activeIndex);
  const animateToIndexRef = useRef<(index: number) => void>(() => {});
  const containerWidthRef = useRef(0);
  const contentWidthRef = useRef(0);
  const indicatorContentX = useSharedValue(0);
  const indicatorW = useSharedValue(0);
  const scrollX = useSharedValue(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const animateToIndex = (index: number) => {
    const layout = itemLayoutsRef.current[index];
    const containerWidth = containerWidthRef.current;
    if (!layout || containerWidth <= 0) {
      return;
    }

    const targetIndicatorWidth = fixedIndicatorWidth ?? layout.width;
    const centeredX = layout.x + (layout.width - targetIndicatorWidth) / 2;
    indicatorContentX.value = withTiming(centeredX, {
      duration: 280,
      easing: Easing.inOut(Easing.cubic),
    });
    indicatorW.value = withTiming(targetIndicatorWidth, {
      duration: 280,
      easing: Easing.inOut(Easing.cubic),
    });

    const centered = layout.x + layout.width / 2 - containerWidth / 2;
    const maxScroll = Math.max(0, contentWidthRef.current - containerWidth);
    const targetX = clamp(centered, 0, maxScroll);
    scrollRef.current?.scrollTo({ x: targetX, y: 0, animated: true });
  };
  animateToIndexRef.current = animateToIndex;

  useEffect(() => {
    animateToIndexRef.current(activeIndex);
  }, [activeIndex, fixedIndicatorWidth]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorContentX.value - scrollX.value }],
    width: indicatorW.value,
  }));

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const handleItemLayout = useCallback(
    (index: number, event: LayoutChangeEvent) => {
      const { x, width } = event.nativeEvent.layout;
      const current = itemLayoutsRef.current[index];
      if (current && current.x === x && current.width === width) {
        return;
      }

      itemLayoutsRef.current[index] = { x, width };
      if (index === activeIndexRef.current) {
        animateToIndexRef.current(index);
      }
    },
    [],
  );

  const handleTabPress = useCallback(
    (index: number) => {
      animateToIndexRef.current(index);
      onChange(index);
    },
    [onChange],
  );

  return (
    <View className="rounded-xs border border-cream-200 bg-cream-100 dark:border-night-600 dark:bg-night-700">
      <View
        className="relative overflow-hidden"
        onLayout={(e) => {
          const next = e.nativeEvent.layout.width;
          if (containerWidthRef.current === next) {
            return;
          }
          containerWidthRef.current = next;
          animateToIndexRef.current(activeIndexRef.current);
        }}
      >
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
          onContentSizeChange={(w) => {
            if (contentWidthRef.current === w) {
              return;
            }
            contentWidthRef.current = w;
            animateToIndexRef.current(activeIndexRef.current);
          }}
          contentContainerStyle={{ paddingHorizontal: 8 }}
        >
          {tabs.map((tab, index) => {
            return <TabItem key={tab.key} index={index} label={tab.label} active={index === activeIndex} onPress={handleTabPress} onLayoutMeasure={handleItemLayout} />;
          })}
        </Animated.ScrollView>

        <Animated.View className={indicatorClassName ?? "absolute bottom-0 h-0.5 rounded-xs bg-primary-500 dark:bg-primary-300"} style={[customIndicatorStyle, indicatorStyle]} pointerEvents="none" />
      </View>
    </View>
  );
}
