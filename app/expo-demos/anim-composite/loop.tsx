import { useEffect, useRef } from "react";
import { Animated, Easing, View } from "react-native";

export default function LoopScreen() {
  const spin = useRef(new Animated.Value(0)).current;
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const spinLoop = Animated.loop(
      Animated.timing(spin, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    const pulseLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1.3,
          duration: 800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 1,
          duration: 800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );

    spinLoop.start();
    pulseLoop.start();

    return () => {
      spinLoop.stop();
      pulseLoop.stop();
    };
  }, [spin, pulse]);

  const rotate = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-[#151718]">
      <Animated.View
        className="h-32 w-32 items-center justify-center rounded-xs bg-orange-400"
        style={{ transform: [{ rotate }, { scale: pulse }] }}
      >
        <Animated.View className="h-12 w-12 rounded-full bg-white/40" />
      </Animated.View>
    </View>
  );
}
