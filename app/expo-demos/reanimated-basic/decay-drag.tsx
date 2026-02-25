import { Pressable, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDecay,
  cancelAnimation,
} from "react-native-reanimated";

const AREA_HEIGHT = 400;

export default function DecayDragScreen() {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: offsetX.value },
      { translateY: offsetY.value },
    ],
  }));

  const pan = Gesture.Pan()
    .onChange((e) => {
      offsetX.value += e.changeX;
      offsetY.value += e.changeY;
    })
    .onEnd((e) => {
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
    <View className="flex-1 bg-white dark:bg-[#151718]">
      <View
        className="mx-6 mt-6 overflow-hidden rounded-xs bg-gray-100 dark:bg-gray-800"
        style={{ height: AREA_HEIGHT }}
      >
        <GestureDetector gesture={pan}>
          <Animated.View
            className="h-20 w-20 items-center justify-center rounded-xs bg-orange-400"
            style={animatedStyle}
          >
            <Text className="text-lg font-bold text-white">Drag</Text>
          </Animated.View>
        </GestureDetector>
      </View>

      <View className="px-6 mt-6">
        <Pressable
          className="items-center rounded-xs bg-gray-500 py-3 active:bg-gray-600"
          onPress={reset}
        >
          <Text className="text-base font-semibold text-white">Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}
