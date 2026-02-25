import { useRef, useState } from "react";
import { Animated, Pressable, Text, View } from "react-native";

export default function SlideUpScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(false);

  const translateY = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  const toggle = () => {
    Animated.timing(fadeAnim, {
      toValue: visible ? 0 : 1,
      duration: 400,
      useNativeDriver: true,
    }).start(() => setVisible((v) => !v));
  };

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-[#151718]">
      <Animated.View
        className="mb-10 items-center rounded-xs bg-orange-400 px-10 py-8"
        style={{ opacity: fadeAnim, transform: [{ translateY }] }}
      >
        <Text className="text-2xl font-bold text-white">
          Slide up and fade in
        </Text>
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
