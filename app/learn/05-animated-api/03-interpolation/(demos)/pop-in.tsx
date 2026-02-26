import { useRef, useState } from "react";
import { Animated, Text, View } from "react-native";
import { Button } from "@/components/ui/button";

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
    <View className="flex-1 items-center justify-center bg-cream-50 dark:bg-night-800">
      <Animated.View
        className="mb-10 h-40 w-40 items-center justify-center rounded-xs bg-warning-400"
        style={{ opacity, transform: [{ scale }] }}
      >
        <Text className="text-base font-semibold text-white/90">Pop!</Text>
      </Animated.View>

      <Button className="px-8 py-3" label={visible ? "Hide" : "Show"} variant="warning" onPress={toggle} />
    </View>
  );
}
