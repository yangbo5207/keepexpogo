import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const STEP = Math.PI / 2;

export default function RotationSnap90Screen() {
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
    })
    .onEnd(() => {
      "worklet";
      const snapped = Math.round(rotation.value / STEP) * STEP;
      rotation.value = withTiming(snapped, { duration: 180 });
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
