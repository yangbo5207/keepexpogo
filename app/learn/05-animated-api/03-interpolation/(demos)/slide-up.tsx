import { useRef, useState } from "react";
import { Animated, Text, View } from "react-native";
import { Button } from "@/components/ui/button";

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
    <View className="flex-1 items-center justify-center bg-cream-50 dark:bg-night-800">
      <Animated.View
        className="mb-10 items-center rounded-xs bg-warning-400 px-10 py-8"
        style={{ opacity: fadeAnim, transform: [{ translateY }] }}
      >
        <Text className="text-sm font-semibold text-white/90">
          Slide up and fade in
        </Text>
      </Animated.View>

      <Button className="px-8 py-3" label={visible ? "Hide" : "Show"} variant="warning" onPress={toggle} />
    </View>
  );
}
