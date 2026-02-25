import { Pressable, Text, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export default function SpringMoveScreen() {
  const offset = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const toggle = () => {
    offset.value = withSpring(offset.value === 0 ? 200 : 0);
  };

  return (
    <View className="flex-1 bg-white dark:bg-[#151718]">
      <View className="flex-1 items-start justify-center px-6">
        <Animated.View
          className="h-24 w-24 items-center justify-center rounded-xs bg-orange-400"
          style={animatedStyle}
        >
          <Text className="text-2xl font-bold text-white">Go!</Text>
        </Animated.View>
      </View>

      <View className="px-6 pb-8">
        <Pressable
          className="items-center rounded-xs bg-orange-500 py-3 active:bg-orange-600"
          onPress={toggle}
        >
          <Text className="text-base font-semibold text-white">
            Spring Toggle
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
