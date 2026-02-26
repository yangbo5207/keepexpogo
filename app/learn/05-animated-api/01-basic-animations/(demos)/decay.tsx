import { useRef } from "react";
import {
  Animated,
  PanResponder,
  Text,
  View
} from "react-native";

import { Button } from "@/components/ui/button";

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
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <View
        className="mx-6 mt-6 overflow-hidden rounded-xs bg-cream-100 dark:bg-night-700"
        style={{ height: AREA_HEIGHT }}
      >
        <Animated.View
          className="h-20 w-20 items-center justify-center rounded-xs bg-warning-400"
          style={{ transform: position.getTranslateTransform() }}
          {...panResponder.panHandlers}
        >
          <Text className="text-sm font-semibold text-white/90">Drag</Text>
        </Animated.View>
      </View>

      <View className="px-6 mt-6">
        <Button label="Reset" variant="secondary" onPress={reset} />
      </View>
    </View>
  );
}
