import { useRef } from "react";
import { Animated, Pressable, Text, View } from "react-native";

function AnimatedButton({ label, color }: { label: string; color: string }) {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.timing(scale, {
      toValue: 0.9,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View
        className="items-center rounded-xs px-8 py-4"
        style={{ backgroundColor: color, transform: [{ scale }] }}
      >
        <Text className="text-base font-semibold text-white">{label}</Text>
      </Animated.View>
    </Pressable>
  );
}

export default function ButtonFeedbackScreen() {
  return (
    <View className="flex-1 items-center justify-center gap-5 bg-white px-6 dark:bg-[#151718]">
      <AnimatedButton label="Press Me" color="#f97316" />
      <AnimatedButton label="Hold Down" color="#22c55e" />
      <AnimatedButton label="Try It" color="#3b82f6" />
    </View>
  );
}
