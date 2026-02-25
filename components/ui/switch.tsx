import React, { useCallback, useEffect } from "react";
import { Pressable, type PressableProps } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type SwitchSize = "sm" | "md";

export interface SwitchProps
  extends Omit<PressableProps, "onPress" | "children"> {
  value: boolean;
  onValueChange?: (nextValue: boolean) => void;
  disabled?: boolean;
  size?: SwitchSize;
}

const SIZES: Record<
  SwitchSize,
  { trackW: number; trackH: number; knob: number; pad: number }
> = {
  sm: { trackW: 40, trackH: 24, knob: 18, pad: 3 },
  md: { trackW: 50, trackH: 30, knob: 22, pad: 4 },
};

const SPRING = { damping: 18, stiffness: 220, mass: 0.8 };

export function Switch({
  value,
  onValueChange,
  disabled = false,
  size = "md",
  style,
  ...rest
}: SwitchProps) {
  const { trackW, trackH, knob, pad } = SIZES[size];
  const translateX = useSharedValue(value ? trackW - knob - pad * 2 : 0);

  useEffect(() => {
    translateX.value = withSpring(
      value ? trackW - knob - pad * 2 : 0,
      SPRING,
    );
  }, [value, trackW, knob, pad, translateX]);

  const handlePress = useCallback(() => {
    if (disabled) return;
    onValueChange?.(!value);
  }, [disabled, onValueChange, value]);

  const knobStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const trackBase =
    "items-start justify-center rounded-full border transition-colors";
  const trackState = value
    ? "bg-primary-500 border-primary-500 dark:bg-primary-400 dark:border-primary-400"
    : "bg-cream-200 border-cream-300 dark:bg-night-700 dark:border-night-500";
  const trackDisabled = disabled ? "opacity-50" : "";

  const knobBase =
    "rounded-full bg-white shadow-sm dark:bg-night-900";

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      className={`${trackBase} ${trackState} ${trackDisabled}`}
      style={[{ width: trackW, height: trackH, padding: pad }, style]}
      {...rest}
    >
      <Animated.View style={knobStyle}>
        <Animated.View
          className={knobBase}
          style={{ width: knob, height: knob }}
        />
      </Animated.View>
    </Pressable>
  );
}
