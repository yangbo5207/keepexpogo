import { Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

import { Button } from "@/components/ui/button";

export default function SequenceDemoScreen() {
  const offset = useSharedValue(0);
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }, { scale: scale.value }],
  }));

  const run = () => {
    offset.value = withSequence(withTiming(0, { duration: 0 }), withTiming(140, { duration: 300 }), withTiming(0, { duration: 300 }));
    scale.value = withSequence(withTiming(1, { duration: 0 }), withTiming(1.12, { duration: 250 }), withTiming(1, { duration: 250 }));
  };

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800 p-16">
      <Animated.View className="h-24 w-24 items-center justify-center rounded-xs bg-primary-500" style={animatedStyle}>
        <Text className="text-sm font-semibold text-white/90">Seq</Text>
      </Animated.View>
      <Button className="mt-16 mx-auto" label="运行 withSequence" onPress={run} />
    </View>
  );
}
