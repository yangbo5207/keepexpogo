import { useState } from "react";
import { Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { runOnJS, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

const MIN_ANGLE = -(Math.PI * 3) / 4; // -135deg
const MAX_ANGLE = (Math.PI * 3) / 4; // 135deg
const ANGLE_RANGE = MAX_ANGLE - MIN_ANGLE;
const KNOB_SIZE = 240;
const TICK_COUNT = 19;
const TICK_STEP_DEG = 270 / (TICK_COUNT - 1);

function clamp(value: number, min: number, max: number) {
  "worklet";
  return Math.max(min, Math.min(max, value));
}

export default function RotationKnobScreen() {
  const [value, setValue] = useState(50);

  const rotation = useSharedValue(0);
  const baseRotation = useSharedValue(0);

  const updateValue = (angle: number) => {
    const progress = (angle - MIN_ANGLE) / ANGLE_RANGE;
    setValue(Math.round(progress * 100));
  };

  const rotate = Gesture.Rotation()
    .onStart(() => {
      "worklet";
      baseRotation.value = rotation.value;
    })
    .onUpdate((e) => {
      "worklet";
      const next = clamp(baseRotation.value + e.rotation, MIN_ANGLE, MAX_ANGLE);
      rotation.value = next;
      runOnJS(updateValue)(next);
    });

  const knobStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}rad` }],
  }));

  return (
    <View className="flex-1 items-center justify-center bg-cream-50 px-6 dark:bg-night-800">
      <Text className="text-xs font-semibold uppercase tracking-widest text-cream-700 dark:text-night-200">Rotation Knob</Text>
      <Text className="mt-2 text-sm text-cream-700 dark:text-night-300">固定 270° 范围，角度映射为 0-100</Text>

      <GestureDetector gesture={rotate}>
        <View className="mt-8 items-center justify-center">
          <View className="items-center justify-center" style={{ width: KNOB_SIZE, height: KNOB_SIZE }}>
            {Array.from({ length: TICK_COUNT }).map((_, index) => {
              const angle = -135 + index * TICK_STEP_DEG;
              const isMajor = index % 3 === 0;
              return (
                <View
                  key={`tick-${index}`}
                  style={{
                    position: "absolute",
                    width: KNOB_SIZE,
                    height: KNOB_SIZE,
                    alignItems: "center",
                    zIndex: 20,
                    transform: [{ rotate: `${angle}deg` }],
                  }}
                >
                  <View
                    style={{
                      marginTop: 20,
                      width: isMajor ? 3 : 2,
                      height: isMajor ? 16 : 10,
                      borderRadius: 2,
                      backgroundColor: isMajor ? "rgba(88,74,53,0.8)" : "rgba(88,74,53,0.45)",
                    }}
                  />
                </View>
              );
            })}

            <Animated.View
              className="items-center justify-start rounded-full border-8 border-cream-300 bg-cream-100 pt-5 dark:border-night-500 dark:bg-night-700"
              style={[{ width: KNOB_SIZE - 32, height: KNOB_SIZE - 32, zIndex: 10 }, knobStyle]}
            >
              <View className="h-14 w-1.5 rounded-xs bg-primary-500" />
            </Animated.View>
          </View>

          <View className="pointer-events-none absolute items-center justify-center">
            <Text className="text-4xl font-semibold text-cream-900 dark:text-night-100">{value}</Text>
            <Text className="text-xs text-cream-700 dark:text-night-300">VALUE</Text>
          </View>
        </View>
      </GestureDetector>
    </View>
  );
}
