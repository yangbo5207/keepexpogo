import { Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

import { Button } from "@/components/ui/button";

export default function BasicAnimatedStyleSpringScreen() {
  const offset = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const toggle = () => {
    offset.value = withSpring(offset.value === 0 ? 200 : 0, {
      damping: 18,
      stiffness: 180,
      mass: 0.9,
    });
  };

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800 p-16">
      <Animated.View className="h-24 w-24 items-center justify-center rounded-xs bg-primary-500" style={animatedStyle}>
        <Text className="text-2xl font-bold text-white">Box</Text>
      </Animated.View>
      <Button className="mt-16 mx-auto" label="弹簧移动（withSpring）" onPress={toggle} />
    </View>
  );
}
