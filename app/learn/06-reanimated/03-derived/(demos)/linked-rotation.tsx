import { Button } from "@/components/ui/button";
import { Text, View } from "react-native";
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue, withSpring } from "react-native-reanimated";

export default function LinkedRotationScreen() {
  const rotation = useSharedValue(0);

  const rotationB = useDerivedValue(() => {
    return rotation.value * -2;
  });

  const styleA = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const styleB = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationB.value}deg` }],
  }));

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <View className="flex-1 items-center justify-center gap-16">
        <Animated.View style={styleA} className="h-24 w-24 items-center justify-center rounded-xl bg-primary-500">
          <Text className="font-bold text-white">A (1x)</Text>
        </Animated.View>

        <Animated.View style={styleB} className="h-24 w-24 items-center justify-center rounded-xl bg-warning-500">
          <Text className="font-bold text-white">B (-2x)</Text>
        </Animated.View>
      </View>

      <View className="px-6 pb-8 h-100 flex-row justify-center">
        <Button
          label="旋转"
          variant="warning"
          onPress={() => {
            rotation.value = withSpring(Math.random() * 360);
          }}
        />
      </View>
    </View>
  );
}
