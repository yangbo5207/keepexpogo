import { LoaderCircle } from "lucide-react-native";
import React, { useCallback, useEffect, useRef } from "react";
import { Pressable, Text, type PressableProps } from "react-native";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { cn } from "@/libs/cn";

/* ─── variant → style mapping (奶白轻奢 theme) ─── */

const VARIANTS = {
  primary: {
    container: "bg-primary-500 dark:bg-primary-400",
    pressed: "bg-primary-600 dark:bg-primary-500",
    text: "text-white dark:text-night-900",
    spinner: "#fff",
    spinnerDark: "#14120f",
  },
  secondary: {
    container: "bg-secondary-100 dark:bg-secondary-800",
    pressed: "bg-secondary-200 dark:bg-secondary-700",
    text: "text-secondary-700 dark:text-secondary-200",
    spinner: "#735047",
    spinnerDark: "#e6d5ce",
  },
  outline: {
    container: "border border-cream-400 bg-transparent dark:border-night-400",
    pressed:
      "border border-cream-500 bg-cream-100 dark:border-night-300 dark:bg-night-700",
    text: "text-cream-800 dark:text-night-100",
    spinner: "#74644a",
    spinnerDark: "#c9c3b7",
  },
  ghost: {
    container: "bg-transparent",
    pressed: "bg-cream-200 dark:bg-night-600",
    text: "text-primary-600 dark:text-primary-300",
    spinner: "#6e4d38",
    spinnerDark: "#ba9b82",
  },
  danger: {
    container: "bg-danger-600 dark:bg-danger-500",
    pressed: "bg-danger-700 dark:bg-danger-600",
    text: "text-white dark:text-white",
    spinner: "#fff",
    spinnerDark: "#fff",
  },
  success: {
    container: "bg-success-600 dark:bg-success-500",
    pressed: "bg-success-700 dark:bg-success-600",
    text: "text-white dark:text-white",
    spinner: "#fff",
    spinnerDark: "#fff",
  },
  warning: {
    container: "bg-warning-500 dark:bg-warning-400",
    pressed: "bg-warning-600 dark:bg-warning-500",
    text: "text-white dark:text-night-900",
    spinner: "#fff",
    spinnerDark: "#14120f",
  },
} as const;

const SIZES = {
  sm: { container: "px-3 py-1 rounded-xs", text: "text-sm", spinner: 12 },
  md: { container: "px-5 py-2 rounded-xs", text: "text-base", spinner: 14 },
  lg: { container: "px-7 py-3 rounded-xs", text: "text-lg", spinner: 16 },
} as const;

/* ─── animation config ─── */

const PRESS_TIMING = { duration: 200, easing: Easing.out(Easing.quad) };
const RELEASE_SPRING = { damping: 28, stiffness: 300 };

const PULSE_IN = { duration: 600, easing: Easing.inOut(Easing.ease) };
const PULSE_OUT = { duration: 600, easing: Easing.inOut(Easing.ease) };

const EXPAND = { duration: 200, easing: Easing.out(Easing.quad) };
const COLLAPSE = { duration: 150, easing: Easing.in(Easing.quad) };
const SPIN = { duration: 800, easing: Easing.linear };

const TEXT_RESIZE = { duration: 200, easing: Easing.out(Easing.quad) };

/* ─── component ─── */

export type ButtonVariant = keyof typeof VARIANTS;
export type ButtonSize = keyof typeof SIZES;

export interface ButtonProps extends Omit<PressableProps, "children"> {
  label?: string;
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** When true the button stretches to fill its container width */
  block?: boolean;
  disabled?: boolean;
  /** Shows a spinner and disables interaction */
  loading?: boolean;
  className?: string;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

/** gap between spinner and label */
const SPINNER_GAP = 8;

export function Button({
  label,
  children,
  variant = "primary",
  size = "md",
  block = false,
  disabled = false,
  loading = false,
  className,
  onPressIn,
  onPressOut,
  style,
  ...rest
}: ButtonProps) {
  const pressed = useSharedValue(0);
  const pulse = useSharedValue(1);
  const spinnerSlot = useSharedValue(loading ? 1 : 0);
  const spin = useSharedValue(0);
  const textSlotWidth = useSharedValue(0);
  const textSlotHeight = useSharedValue(0);
  const isFirstLayout = useRef(true);

  const isDisabled = disabled || loading;
  const s = SIZES[size];

  useEffect(() => {
    if (loading) {
      spinnerSlot.value = withTiming(1, EXPAND);
      pulse.value = withRepeat(
        withSequence(withTiming(0.7, PULSE_IN), withTiming(1, PULSE_OUT)),
        -1,
        false,
      );
      spin.value = 0;
      spin.value = withRepeat(withTiming(360, SPIN), -1, false);
    } else {
      spinnerSlot.value = withTiming(0, COLLAPSE);
      pulse.value = withTiming(1, { duration: 200 });
    }
  }, [loading, pulse, spinnerSlot, spin]);

  const handlePressIn = useCallback(
    (e: any) => {
      pressed.value = withTiming(1, PRESS_TIMING);
      onPressIn?.(e);
    },
    [onPressIn, pressed],
  );

  const handlePressOut = useCallback(
    (e: any) => {
      pressed.value = withSpring(0, RELEASE_SPRING);
      onPressOut?.(e);
    },
    [onPressOut, pressed],
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: interpolate(pressed.value, [0, 1], [1, 0.985]) }],
    opacity: loading ? pulse.value : 1,
  }));

  const spinnerStyle = useAnimatedStyle(() => ({
    width: interpolate(spinnerSlot.value, [0, 1], [0, s.spinner]),
    marginRight: interpolate(spinnerSlot.value, [0, 1], [0, SPINNER_GAP]),
    opacity: spinnerSlot.value,
    overflow: "visible" as const,
    transform: [{ rotate: `${spin.value}deg` }],
  }));

  const textSlotStyle = useAnimatedStyle(() => ({
    width: textSlotWidth.value,
    height: textSlotHeight.value,
    overflow: "visible" as const,
  }));

  const handleTextLayout = useCallback(
    (e: any) => {
      const { width: w, height: h } = e.nativeEvent.layout;
      if (isFirstLayout.current) {
        textSlotWidth.value = w;
        textSlotHeight.value = h;
        isFirstLayout.current = false;
      } else {
        textSlotWidth.value = withTiming(w, TEXT_RESIZE);
        textSlotHeight.value = h;
      }
    },
    [textSlotWidth, textSlotHeight],
  );

  const v = VARIANTS[variant];
  const useTextSlot = !children && label != null;
  const measureTextEl = useTextSlot ? (
    <Text
      className={`font-semibold ${s.text} ${v.text}`}
      onLayout={handleTextLayout}
      ellipsizeMode="tail"
      style={{ position: "absolute", opacity: 0 }}
    >
      {label}
    </Text>
  ) : null;
  const visibleTextEl = useTextSlot ? (
    <Text
      className={`font-semibold ${s.text} ${v.text}`}
      ellipsizeMode="tail"
      style={{ flexShrink: 0 }}
    >
      {label}
    </Text>
  ) : null;

  return (
    <AnimatedPressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={isDisabled}
      className={cn(
        "flex-row items-center justify-center",
        block ? "" : "self-start",
        s.container,
        v.container,
        disabled ? "opacity-40" : "",
        className,
      )}
      style={[animatedStyle, style]}
      {...rest}
    >
      {({ pressed: isPressed }) => (
        <>
          {isPressed && (
            <Animated.View
              className={`absolute inset-0 rounded-xs ${v.pressed}`}
            />
          )}
          <Animated.View
            style={spinnerStyle}
            className="items-center justify-center"
          >
            <LoaderCircle
              size={s.spinner}
              stroke={v.spinner}
              strokeWidth={2.5}
            />
          </Animated.View>
          {useTextSlot ? (
            <Animated.View style={textSlotStyle}>{visibleTextEl}</Animated.View>
          ) : (
            children
          )}
          {measureTextEl}
        </>
      )}
    </AnimatedPressable>
  );
}
