import { Pressable, Text, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export default function SpringConfigScreen() {
  const offset = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const target = () => (offset.value === 0 ? 200 : 0);

  const defaultSpring = () => {
    offset.value = withSpring(target());
  };

  const bouncySpring = () => {
    offset.value = withSpring(target(), {
      damping: 4,
      stiffness: 100,
      mass: 1,
    });
  };

  const stiffSpring = () => {
    offset.value = withSpring(target(), {
      damping: 20,
      stiffness: 300,
      mass: 0.5,
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
          onPress={defaultSpring}
        >
          <Text className="text-base font-semibold text-white">Default</Text>
        </Pressable>
        <Pressable
          className="items-center rounded-xs bg-orange-600 py-3 active:bg-orange-700"
          onPress={bouncySpring}
        >
          <Text className="text-base font-semibold text-white">
            Bouncy (damping: 4)
          </Text>
        </Pressable>
        <Pressable
          className="items-center rounded-xs bg-orange-700 py-3 active:bg-orange-800"
          onPress={stiffSpring}
        >
          <Text className="text-base font-semibold text-white">
            Stiff (stiffness: 300)
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
