import { useCallback, useState, type ReactNode } from "react";
import { Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type AnimatedButtonProps = {
  onPress?: () => void;
  children: ReactNode;
};

function AnimatedButton({ onPress, children }: AnimatedButtonProps) {
  const pressed = useSharedValue(false);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(pressed.value ? 0.92 : 1, { duration: 100 }) }],
    opacity: withTiming(pressed.value ? 0.7 : 1, { duration: 100 }),
  }));

  const tap = Gesture.Tap()
    .onBegin(() => {
      "worklet";
      pressed.value = true;
    })
    .onEnd((_event, success) => {
      "worklet";
      if (success && onPress) {
        runOnJS(onPress)();
      }
    })
    .onFinalize(() => {
      "worklet";
      pressed.value = false;
    });

  return (
    <GestureDetector gesture={tap}>
      <Animated.View style={animatedStyle}>{children}</Animated.View>
    </GestureDetector>
  );
}

export default function TapPressFeedbackScreen() {
  const [count, setCount] = useState(0);

  const handlePress = useCallback(() => {
    setCount((current) => current + 1);
  }, []);

  return (
    <View className="flex-1 items-center justify-center gap-6 bg-cream-50 px-6 dark:bg-night-800">
      <Text className="text-xs font-semibold uppercase tracking-widest text-cream-700 dark:text-night-200">Tap Press Feedback</Text>
      <Text className="text-base font-medium text-cream-900 dark:text-night-100">点击成功次数：{count}</Text>

      <AnimatedButton onPress={handlePress}>
        <View className="h-12 min-w-48 items-center justify-center rounded-xs bg-primary-500 px-6 shadow-lg shadow-primary-500/25">
          <Text className="text-base font-semibold text-white">按下缩小，松开恢复</Text>
        </View>
      </AnimatedButton>

      <Text className="text-center text-sm text-cream-700 dark:text-night-200">按下按钮会立即反馈；仅当点击成功时才会增加计数。</Text>
    </View>
  );
}
