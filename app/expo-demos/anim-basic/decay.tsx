import { useRef } from "react";
import {
  Animated,
  PanResponder,
  Pressable,
  Text,
  View
} from "react-native";

export default function DecayScreen() {
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const AREA_HEIGHT = 400;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        position.extractOffset();
      },
      onPanResponderMove: Animated.event(
        [null, { dx: position.x, dy: position.y }],
        { useNativeDriver: false },
      ),
      onPanResponderRelease: (_, { vx, vy }) => {
        Animated.decay(position, {
          velocity: { x: vx, y: vy },
          deceleration: 0.997,
          useNativeDriver: true,
        }).start();
      },
    }),
  ).current;

  const reset = () => {
    position.stopAnimation(() => {
      position.setOffset({ x: 0, y: 0 });
      position.setValue({ x: 0, y: 0 });
    });
  };

  return (
    <View className="flex-1 bg-white dark:bg-[#151718]">
      <View
        className="mx-6 mt-6 overflow-hidden rounded-xs bg-gray-100 dark:bg-gray-800"
        style={{ height: AREA_HEIGHT }}
      >
        <Animated.View
          className="h-20 w-20 items-center justify-center rounded-xs bg-orange-400"
          style={{ transform: position.getTranslateTransform() }}
          {...panResponder.panHandlers}
        >
          <Text className="text-lg font-bold text-white">Drag</Text>
        </Animated.View>
      </View>

      <View className="px-6 mt-6">
        <Pressable
          className="items-center rounded-xs bg-gray-500 py-3 active:bg-gray-600"
          onPress={reset}
        >
          <Text className="text-base font-semibold text-white">
            Reset
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
