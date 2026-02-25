import { useRef } from "react";
import { Animated, Pressable, Text, View } from "react-native";

export default function ParallelScreen() {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.3)).current;
  const rotate = useRef(new Animated.Value(0)).current;

  const play = () => {
    opacity.setValue(0);
    scale.setValue(0.3);
    rotate.setValue(0);

    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
      Animated.timing(rotate, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const rotateInterpolate = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View className="h-100 bg-white dark:bg-[#151718]">
      <View className="flex-1 items-center justify-center">
        <Animated.View
          className="h-32 w-32 items-center justify-center rounded-xs bg-orange-400"
          style={{
            opacity,
            transform: [{ scale }, { rotate: rotateInterpolate }],
          }}
        >
          <Text className="text-3xl font-bold text-white">Hi!</Text>
        </Animated.View>
      </View>

      <View className="gap-3 px-6 pb-8">
        <Pressable
          className="items-center rounded-xs bg-orange-500 py-3 active:bg-orange-600"
          onPress={play}
        >
          <Text className="text-base font-semibold text-white">
            Play Parallel
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
