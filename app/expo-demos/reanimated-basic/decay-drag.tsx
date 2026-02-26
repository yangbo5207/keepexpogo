import { Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { cancelAnimation, useAnimatedStyle, useSharedValue, withDecay } from "react-native-reanimated";

import { Button } from "@/components/ui/button";

const AREA_HEIGHT = 400;

export default function DecayDragScreen() {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offsetX.value }, { translateY: offsetY.value }],
  }));

  const pan = Gesture.Pan()
    .onChange((e) => {
      offsetX.value += e.changeX;
      offsetY.value += e.changeY;
    })
    .onEnd((e) => {
      // 拖拽结束 惯性滑行由 withDecay 驱动
      offsetX.value = withDecay({
        velocity: e.velocityX,
        deceleration: 0.998,
      });
      offsetY.value = withDecay({
        velocity: e.velocityY,
        deceleration: 0.998,
      });
    });

  const reset = () => {
    cancelAnimation(offsetX);
    cancelAnimation(offsetY);
    offsetX.value = 0;
    offsetY.value = 0;
  };

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800 p-6">
      <View className="overflow-hidden rounded-xs border border-cream-300 bg-cream-100 dark:border-night-500 dark:bg-night-700" style={{ height: AREA_HEIGHT }}>
        <GestureDetector gesture={pan}>
          <Animated.View className="h-20 w-20 items-center justify-center rounded-xs bg-primary-500" style={animatedStyle}>
            <Text className="text-lg font-bold text-white">Drag</Text>
          </Animated.View>
        </GestureDetector>
      </View>

      <View className="mt-6">
        <Button label="Reset" variant="secondary" onPress={reset} />
      </View>
    </View>
  );
}
