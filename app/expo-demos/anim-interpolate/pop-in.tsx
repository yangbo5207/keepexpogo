import { useRef, useState } from "react";
import { Animated, Pressable, Text, View } from "react-native";

export default function PopInScreen() {
  const progress = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(false);

  const scale = progress.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1.2, 1],
  });

  const opacity = progress.interpolate({
    inputRange: [0, 0.3],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const toggle = () => {
    Animated.timing(progress, {
      toValue: visible ? 0 : 1,
      duration: 400,
      useNativeDriver: true,
    }).start(() => setVisible((v) => !v));
  };

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-[#151718]">
      <Animated.View
        className="mb-10 h-40 w-40 items-center justify-center rounded-xs bg-orange-400"
        style={{ opacity, transform: [{ scale }] }}
      >
        <Text className="text-3xl font-bold text-white">Pop!</Text>
      </Animated.View>

      <Pressable
        className="rounded-xs bg-orange-500 px-8 py-3 active:bg-orange-600"
        onPress={toggle}
      >
        <Text className="text-base font-semibold text-white">
          {visible ? "Hide" : "Show"}
        </Text>
      </Pressable>
    </View>
  );
}
