import { useRef } from "react";
import {
  Animated,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

import { Button } from "@/components/ui/button";

export default function ValueXYScreen() {
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const { width } = useWindowDimensions();

  const BOX_SIZE = 80;
  const AREA_HEIGHT = 300;
  const maxX = width - 48 - BOX_SIZE; // padding 24 each side
  const maxY = AREA_HEIGHT - BOX_SIZE;

  const moveToRandom = () => {
    Animated.spring(position, {
      toValue: {
        x: Math.random() * maxX,
        y: Math.random() * maxY,
      },
      useNativeDriver: true,
    }).start();
  };

  const reset = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: true,
    }).start();
  };

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <View
        className="mx-6 mt-6 rounded-xs bg-cream-100 dark:bg-night-700"
        style={{ height: AREA_HEIGHT }}
      >
        <Animated.View
          className="h-20 w-20 items-center justify-center rounded-xs bg-warning-400"
          style={{ transform: position.getTranslateTransform() }}
        >
          <Text className="text-sm font-semibold text-white/90">XY</Text>
        </Animated.View>
      </View>

      <View className="flex-row gap-3 px-6 mt-6">
        <Button className="flex-1" label="Random Move" onPress={moveToRandom} />
        <Button className="flex-1" label="Reset" variant="secondary" onPress={reset} />
      </View>
    </View>
  );
}
