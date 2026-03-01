import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export default function RotationBasicScreen() {
  const rotation = useSharedValue(0);
  const baseRotation = useSharedValue(0);

  const rotate = Gesture.Rotation()
    .onStart(() => {
      "worklet";
      baseRotation.value = rotation.value;
    })
    .onUpdate((e) => {
      "worklet";
      rotation.value = baseRotation.value + e.rotation;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}rad` }],
  }));

  return (
    <View className="flex-1 items-center justify-center bg-cream-50 dark:bg-night-800">
      <GestureDetector gesture={rotate}>
        <Animated.View className="h-[200px] w-[200px] items-center justify-start rounded-xs bg-primary-500 pt-4" style={animatedStyle}>
          <View className="h-10 w-1 rounded-xs bg-white/80" />
        </Animated.View>
      </GestureDetector>
    </View>
  );
}
