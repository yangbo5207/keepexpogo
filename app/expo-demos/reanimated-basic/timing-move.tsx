import { Pressable, Text, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

export default function TimingMoveScreen() {
  const offset = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const defaultTiming = () => {
    offset.value = withTiming(offset.value === 0 ? 200 : 0);
  };

  const customTiming = () => {
    offset.value = withTiming(offset.value === 0 ? 200 : 0, {
      duration: 500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
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

      <View className="gap-3 px-6 pb-8">
        <Pressable
          className="items-center rounded-xs bg-orange-500 py-3 active:bg-orange-600"
          onPress={defaultTiming}
        >
          <Text className="text-base font-semibold text-white">
            Default (300ms)
          </Text>
        </Pressable>
        <Pressable
          className="items-center rounded-xs bg-orange-700 py-3 active:bg-orange-800"
          onPress={customTiming}
        >
          <Text className="text-base font-semibold text-white">
            Custom (500ms bezier)
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
