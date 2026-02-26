import React, { useCallback, useMemo } from "react";
import { Pressable, Text, View, type PressableProps } from "react-native";
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { cn } from "@/libs/cn";

export type ChipVariant = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
export type ChipSize = "sm" | "md";

export interface ChipProps extends Omit<PressableProps, "children" | "style"> {
  label?: string;
  children?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
  variant?: ChipVariant;
  size?: ChipSize;
  selected?: boolean;
  disabled?: boolean;
  className?: string;
  textClassName?: string;
  asChild?: boolean;
}

const SIZE_STYLES: Record<ChipSize, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
};

const TEXT_STYLES: Record<ChipVariant, string> = {
  default: "text-cream-800 dark:text-night-100",
  primary: "text-primary-700 dark:text-primary-300",
  secondary: "text-secondary-700 dark:text-secondary-300",
  success: "text-success-700 dark:text-success-300",
  warning: "text-warning-700 dark:text-warning-300",
  danger: "text-danger-600 dark:text-danger-300",
};

export function Chip({
  label,
  children,
  left,
  right,
  variant = "default",
  size = "md",
  selected = false,
  disabled = false,
  className,
  textClassName,
  asChild = false,
  onPressIn,
  onPressOut,
  ...rest
}: ChipProps) {
  const theme = useColorScheme() ?? "light";
  const pressed = useSharedValue(0);

  const colors = useMemo(() => {
    const isDark = theme === "dark";
    switch (variant) {
      case "primary":
        return isDark
          ? { base: "#463226", pressed: "#593e2e", selected: "#593e2e" }
          : { base: "#eae0d9", pressed: "#d4c0af", selected: "#d4c0af" };
      case "secondary":
        return isDark
          ? { base: "#5e413b", pressed: "#735047", selected: "#735047" }
          : { base: "#f3eae6", pressed: "#e6d5ce", selected: "#e6d5ce" };
      case "success":
        return isDark
          ? { base: "#3d4d31", pressed: "#4a5f3a", selected: "#4a5f3a" }
          : { base: "#e8ede2", pressed: "#d0dbc6", selected: "#d0dbc6" };
      case "warning":
        return isDark
          ? { base: "#754c16", pressed: "#905f16", selected: "#905f16" }
          : { base: "#faeecf", pressed: "#f4da9c", selected: "#f4da9c" };
      case "danger":
        return isDark
          ? { base: "#803327", pressed: "#9d3c2c", selected: "#9d3c2c" }
          : { base: "#fbe8e4", pressed: "#f7cfca", selected: "#f7cfca" };
      default:
        return isDark
          ? { base: "#302c25", pressed: "#3d3830", selected: "#3d3830" }
          : { base: "#f5efdf", pressed: "#ede4ce", selected: "#ede4ce" };
    }
  }, [theme, variant]);

  const handlePressIn = useCallback(
    (e: any) => {
      pressed.value = withTiming(1, { duration: 120 });
      onPressIn?.(e);
    },
    [onPressIn, pressed],
  );

  const handlePressOut = useCallback(
    (e: any) => {
      pressed.value = withTiming(0, { duration: 160 });
      onPressOut?.(e);
    },
    [onPressOut, pressed],
  );

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      pressed.value,
      [0, 1],
      [selected ? colors.selected : colors.base, colors.pressed],
    ),
  }));

  const pressableProps = { ...rest } as PressableProps & { href?: string };
  if (asChild && "href" in pressableProps) {
    delete pressableProps.href;
  }

  const content = children ?? label;

  return (
    <Animated.View style={[animatedStyle, { borderRadius: 999, overflow: "hidden" }]}>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled}
        className={cn("flex-row items-center justify-center gap-2", SIZE_STYLES[size], disabled ? "opacity-50" : "", className)}
        {...pressableProps}
      >
        {left ? <View>{left}</View> : null}
        {content ? (
          <Text className={cn("font-medium", TEXT_STYLES[variant], textClassName)}>{content}</Text>
        ) : null}
        {right ? <View>{right}</View> : null}
      </Pressable>
    </Animated.View>
  );
}
