import React, { useCallback, useMemo } from "react";
import { Pressable, Text, View, type PressableProps } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useColorScheme } from "@/hooks/use-color-scheme";

export interface ListRowProps
  extends Omit<PressableProps, "children" | "style"> {
  title: string;
  description?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  showDivider?: boolean;
  variant?: "default" | "highlight" | "danger";
  active?: boolean;
  autoTintRight?: boolean;
  autoTintLeft?: boolean;
  radius?: number;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  asChild?: boolean;
}

export function ListRow({
  title,
  description,
  left,
  right,
  showDivider = false,
  variant = "default",
  active = false,
  autoTintRight = false,
  autoTintLeft = false,
  radius = 16,
  disabled = false,
  className,
  titleClassName,
  descriptionClassName,
  asChild = false,
  onPressIn,
  onPressOut,
  ...rest
}: ListRowProps) {
  const theme = useColorScheme() ?? "light";
  const pressed = useSharedValue(0);

  const effectiveVariant =
    active && variant === "default" ? "highlight" : variant;

  const colors = useMemo(() => {
    if (effectiveVariant === "danger") {
      if (theme === "dark") {
        return { base: "#25221c", pressed: "#6a2c23" };
      }
      return { base: "#fbf8f0", pressed: "#fbe8e4" };
    }
    if (effectiveVariant === "highlight") {
      if (theme === "dark") {
        return { base: "#25221c", pressed: "#463226" };
      }
      return { base: "#fbf8f0", pressed: "#eae0d9" };
    }
    if (theme === "dark") {
      return { base: "#25221c", pressed: "#302c25" };
    }
    return { base: "#fbf8f0", pressed: "#f5efdf" };
  }, [theme, effectiveVariant]);

  const handlePressIn = useCallback(
    (e: any) => {
      pressed.value = withTiming(1, { duration: 120 });
      onPressIn?.(e);
    },
    [onPressIn, pressed],
  );

  const handlePressOut = useCallback(
    (e: any) => {
      pressed.value = withTiming(0, { duration: 180 });
      onPressOut?.(e);
    },
    [onPressOut, pressed],
  );

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      pressed.value,
      [0, 1],
      [active ? colors.pressed : colors.base, colors.pressed],
    ),
  }));

  const rightTint = useMemo(() => {
    if (effectiveVariant === "danger") {
      return theme === "dark" ? "#e78574" : "#c04a37";
    }
    if (effectiveVariant === "highlight") {
      return theme === "dark" ? "#ba9b82" : "#6e4d38";
    }
    return theme === "dark" ? "#9e978a" : "#b3a57e";
  }, [theme, effectiveVariant]);

  const leftTint = rightTint;
  const leftEl =
    autoTintLeft && React.isValidElement(left)
      ? React.cloneElement(left, {
          color: leftTint,
        })
      : left;
  const rightEl =
    autoTintRight && React.isValidElement(right)
      ? React.cloneElement(right, {
          color: rightTint,
        })
      : right;

  const pressableProps = { ...rest } as PressableProps & { href?: string };
  if (asChild && "href" in pressableProps) {
    delete pressableProps.href;
  }

  return (
    <Animated.View
      style={[
        animatedStyle,
        radius > 0 ? { borderRadius: radius, overflow: "hidden" } : null,
      ]}
    >
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled}
        className={`flex-row items-center px-4 py-4 ${showDivider ? "border-b border-cream-300 dark:border-night-500" : ""} ${disabled ? "opacity-50" : ""} ${className ?? ""}`}
        {...pressableProps}
      >
        {leftEl ? <View className="mr-3">{leftEl}</View> : null}
        <View className="flex-1">
          <Text
            className={`text-base ${
              effectiveVariant === "danger"
                ? "text-danger-600 dark:text-danger-300"
                : effectiveVariant === "highlight"
                  ? "text-primary-700 dark:text-primary-300"
                  : "text-cream-900 dark:text-night-50"
            } ${titleClassName ?? ""}`}
          >
            {title}
          </Text>
          {description ? (
            <Text
              className={`mt-1 text-sm ${
                effectiveVariant === "danger"
                  ? "text-danger-500 dark:text-danger-300"
                : effectiveVariant === "highlight"
                    ? "text-primary-600 dark:text-primary-300"
                    : "text-cream-700 dark:text-night-200"
              } ${descriptionClassName ?? ""}`}
            >
              {description}
            </Text>
          ) : null}
        </View>
        {rightEl ? <View className="ml-3">{rightEl}</View> : null}
      </Pressable>
    </Animated.View>
  );
}

export function ListRowGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const items = React.Children.toArray(children).filter(Boolean);

  return (
    <View
      className={`overflow-hidden rounded-xl border border-cream-300 bg-cream-100 dark:border-night-500 dark:bg-night-700 ${className ?? ""}`}
    >
      {items.map((child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<ListRowProps>, {
              showDivider: index < items.length - 1,
              radius: 0,
            })
          : child,
      )}
    </View>
  );
}
