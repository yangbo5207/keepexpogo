import { useCallback, useRef, useState } from "react";
import { Text } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { runOnJS } from "react-native-reanimated";
import { RippleRing } from "./RippleRing";

type Ripple = {
  id: number;
  x: number;
  y: number;
};

export default function TapRippleScreen() {
  const nextIdRef = useRef(1);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const addRipple = (x: number, y: number) => {
    const id = nextIdRef.current++;
    setRipples((current) => [...current, { id, x, y }]);
  };

  const handleRippleDone = useCallback((id: number) => {
    setRipples((current) => current.filter((ripple) => ripple.id !== id));
  }, []);

  const tap = Gesture.Tap().onBegin((e) => {
    "worklet";
    runOnJS(addRipple)(e.x, e.y);
  });

  return (
    <GestureDetector gesture={tap}>
      <Animated.View className="flex-1 items-center justify-center overflow-hidden bg-cream-50">
        <Text className="text-xs font-semibold uppercase tracking-widest text-cream-700">Tap Ripple</Text>
        <Text className="mt-2 text-base font-semibold text-cream-900">点击屏幕任意位置</Text>
        <Text className="mt-1 text-sm text-cream-700">圆环会从触点柔和扩散</Text>
        {ripples.map((ripple) => (
          <RippleRing key={ripple.id} id={ripple.id} x={ripple.x} y={ripple.y} onDone={handleRippleDone} />
        ))}
      </Animated.View>
    </GestureDetector>
  );
}
