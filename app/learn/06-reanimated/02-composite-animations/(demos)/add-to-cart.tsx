import { useColorScheme } from "@/hooks/use-color-scheme";
import { ShoppingCart } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withSpring, withTiming } from "react-native-reanimated";

export default function AddToCartScreen() {
  const scale = useSharedValue(1);
  const theme = useColorScheme() ?? "light";
  const iconColor = theme === "dark" ? "#14120f" : "#ffffff";
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = () => {
    scale.value = withSequence(withTiming(0.96, { duration: 120 }), withSpring(1.06, { damping: 12, stiffness: 220 }), withTiming(1, { duration: 180 }));
  };

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <View className="flex-1 items-center justify-center">
        <AnimatedPressable className="rounded-full bg-warning-500 px-10 py-4 active:bg-warning-600 dark:bg-warning-400" onPress={handlePress} style={animatedStyle}>
          <View className="flex-row items-center gap-2">
            <ShoppingCart size={18} color={iconColor} />
            <Text className="text-base font-semibold text-white dark:text-night-900">Add to Cart</Text>
          </View>
        </AnimatedPressable>
      </View>

      <View className="px-6 pb-6">
        <Text className="text-center text-sm text-cream-700 dark:text-cream-300">点击按钮：缩小反馈 → 弹起放大 → 回到原状</Text>
      </View>
    </View>
  );
}
