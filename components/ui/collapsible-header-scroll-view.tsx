import { cn } from "@/libs/cn";
import React, { useCallback } from "react";
import { Text, View, type ViewStyle } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface CollapsibleHeaderScrollViewProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  contentContainerClassName?: string;
  contentContainerStyle?: ViewStyle;
  contentTopInset?: number;
  headerBackgroundClassName?: string;
}

const HEADER_BAR_HEIGHT = 44;
const TITLE_BLOCK_HEIGHT = 64;
const COLLAPSE_RANGE = 120;

export function CollapsibleHeaderScrollView({
  title,
  subtitle,
  children,
  containerClassName,
  className,
  contentContainerClassName,
  contentContainerStyle,
  contentTopInset = 0,
  headerBackgroundClassName,
}: CollapsibleHeaderScrollViewProps) {
  const scrollY = useSharedValue(0);
  const insets = useSafeAreaInsets();
  const headerHeight = insets.top + HEADER_BAR_HEIGHT;
  const contentPaddingTop =
    insets.top + HEADER_BAR_HEIGHT + TITLE_BLOCK_HEIGHT + contentTopInset;
  const titleWidth = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const titleStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollY.value,
      [0, COLLAPSE_RANGE],
      [1, 0.82],
      Extrapolate.CLAMP,
    );
    const translateY = interpolate(
      scrollY.value,
      [0, COLLAPSE_RANGE],
      [TITLE_BLOCK_HEIGHT, 0],
      Extrapolate.CLAMP,
    );
    const translateX = -(titleWidth.value * (1 - scale)) / 2;
    return {
      transform: [{ translateX }, { translateY }, { scale }],
    };
  });

  const eyebrowStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, COLLAPSE_RANGE * 0.6],
      [1, 0],
      Extrapolate.CLAMP,
    );
    return { opacity };
  });

  const headerBackgroundStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [40, COLLAPSE_RANGE],
      [0, 1],
      Extrapolate.CLAMP,
    );
    return { opacity };
  });

  return (
    <View className={`flex-1 ${containerClassName ?? ""}`}>
      <Animated.View
        style={[{ height: headerHeight }, headerBackgroundStyle]}
        className={`absolute left-0 right-0 top-0 z-10 justify-center border-b border-cream-300 px-5 dark:border-night-500 ${headerBackgroundClassName ?? ""}`}
      >
        <View style={{ height: insets.top }} />
      </Animated.View>

      <Animated.View
        pointerEvents="none"
        style={[
          {
            position: "absolute",
            left: 0,
            right: 0,
            top: insets.top,
            height: HEADER_BAR_HEIGHT,
            paddingHorizontal: 20,
            justifyContent: "flex-end",
            paddingBottom: 6,
            zIndex: 11,
          },
          titleStyle,
        ]}
        onLayout={useCallback((e: any) => {
          titleWidth.value = e.nativeEvent.layout.width;
        }, [titleWidth])}
      >
        <Animated.Text
          style={eyebrowStyle}
          className="text-xs font-semibold uppercase tracking-[3px] text-cream-600 dark:text-night-200"
        >
          {subtitle ?? "Learn"}
        </Animated.Text>
        <Text className="mt-3 text-3xl font-semibold text-cream-900 dark:text-night-50">
          {title}
        </Text>
      </Animated.View>

      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={[
          { paddingTop: contentPaddingTop },
          contentContainerStyle,
        ]}
      >
        <View className={cn(className, contentContainerClassName)}>
          {children}
        </View>
      </Animated.ScrollView>
    </View>
  );
}
