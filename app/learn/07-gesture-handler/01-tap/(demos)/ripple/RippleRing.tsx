import { useEffect } from "react";
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const RIPPLE_SIZE = 260;
const RIPPLE_DURATION = 2000;

type RippleRingProps = {
  id: number;
  x: number;
  y: number;
  onDone: (id: number) => void;
};

export function RippleRing({ id, x, y, onDone }: RippleRingProps) {
  const rippleProgress = useSharedValue(0);
  const rippleOpacity = useSharedValue(0.26);

  useEffect(() => {
    rippleProgress.value = withTiming(
      1,
      {
        duration: RIPPLE_DURATION,
        easing: Easing.linear,
      },
      () => {
        runOnJS(onDone)(id);
      },
    );
    rippleOpacity.value = withTiming(0, {
      duration: RIPPLE_DURATION,
      easing: Easing.linear,
    });
  }, [id, onDone, rippleOpacity, rippleProgress]);

  const rippleStyle = useAnimatedStyle(() => ({
    position: "absolute",
    width: RIPPLE_SIZE * (0.1 + 1.5 * rippleProgress.value),
    height: RIPPLE_SIZE * (0.1 + 1.5 * rippleProgress.value),
    borderRadius: (RIPPLE_SIZE * (0.1 + 1.5 * rippleProgress.value)) / 2,
    borderWidth: 1.2,
    borderColor: "rgba(37,99,235,0.58)",
    left: x - (RIPPLE_SIZE * (0.1 + 1.5 * rippleProgress.value)) / 2,
    top: y - (RIPPLE_SIZE * (0.1 + 1.5 * rippleProgress.value)) / 2,
    opacity: rippleOpacity.value,
  }));

  return <Animated.View style={rippleStyle} pointerEvents="none" />;
}
