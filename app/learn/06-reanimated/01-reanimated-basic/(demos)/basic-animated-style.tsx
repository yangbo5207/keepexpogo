import { Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { Button } from "@/components/ui/button";

export default function BasicAnimatedStyleScreen() {
  const offset = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const toggle = () => {
    // 直接赋值会瞬间跳到目标位置（无过渡动画）
    offset.value = offset.value === 0 ? 200 : 0;
  };

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800 p-16">
      <Animated.View
        className="h-24 w-24 items-center justify-center rounded-xs bg-primary-500"
        style={animatedStyle}
      >
        <Text className="text-sm font-semibold text-white/90">Box</Text>
      </Animated.View>
      <Button
        className="mt-16 mx-auto"
        label="瞬间移动（无动画）"
        onPress={toggle}
      />
    </View>
  );
}
