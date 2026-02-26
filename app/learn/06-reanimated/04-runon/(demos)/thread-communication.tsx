import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Text, View } from "react-native";
import Animated, { runOnJS, runOnUI, useAnimatedReaction, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export default function ThreadCommunicationScreen() {
  const offset = useSharedValue(0);
  const [status, setStatus] = useState("Idle");

  const handleCrossLine = (side: string) => {
    setStatus(`Crossed to ${side}`);
    console.log("Triggered from UI thread");
  };

  useAnimatedReaction(
    () => offset.value,
    (currentValue, previousValue) => {
      if (currentValue > 0 && (previousValue ?? 0) <= 0) {
        runOnJS(handleCrossLine)("Right");
      } else if (currentValue < 0 && (previousValue ?? 0) >= 0) {
        runOnJS(handleCrossLine)("Left");
      }
    },
  );

  const moveRandomly = () => {
    "worklet";
    offset.value = withSpring((Math.random() - 0.5) * 300);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  return (
    <View className="flex-1 items-center justify-center gap-12 bg-cream-50 dark:bg-night-800">
      <View className="items-center gap-2">
        <Text className="text-sm font-medium text-cream-500 dark:text-night-300">JS Thread Status</Text>
        <Text className="text-2xl font-bold text-cream-900 dark:text-night-50">{status}</Text>
      </View>

      <View className="items-center justify-center">
        <View className="absolute h-40 w-0.5 bg-cream-300 dark:bg-night-600" />

        <Animated.View style={animatedStyle} className="h-20 w-20 rounded-2xl bg-primary-500 shadow-xl shadow-primary-500/30" />
      </View>

      <Button
        className="mx-auto my-8"
        label="Move Randomly (runOnUI)"
        onPress={() => {
          runOnUI(moveRandomly)();
        }}
      />
    </View>
  );
}
