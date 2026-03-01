import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export default function PinchBasicScreen() {
  const scale = useSharedValue(1);
  const baseScale = useSharedValue(1);

  const pinch = Gesture.Pinch()
    .onStart(() => {
      "worklet";
      baseScale.value = scale.value;
    })
    .onUpdate((e) => {
      "worklet";
      scale.value = baseScale.value * e.scale;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View className="flex-1 items-center justify-center bg-cream-50 dark:bg-night-800">
      <GestureDetector gesture={pinch}>
        <Animated.View className="h-[200px] w-[200px] rounded-xs bg-primary-500" style={animatedStyle} />
      </GestureDetector>
    </View>
  );
}
