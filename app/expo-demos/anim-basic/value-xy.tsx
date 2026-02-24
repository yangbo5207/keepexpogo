import { useRef } from "react";
import {
  Animated,
  Pressable,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

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
    <View className="flex-1 bg-white dark:bg-[#151718]">
      <View
        className="mx-6 mt-6 rounded-xs bg-gray-100 dark:bg-gray-800"
        style={{ height: AREA_HEIGHT }}
      >
        <Animated.View
          className="h-20 w-20 items-center justify-center rounded-xs bg-orange-400"
          style={{ transform: position.getTranslateTransform() }}
        >
          <Text className="text-2xl font-bold text-white">XY</Text>
        </Animated.View>
      </View>

      <View className="flex-row gap-3 px-6 mt-6">
        <Pressable
          className="flex-1 items-center rounded-xs bg-orange-500 py-3 active:bg-orange-600"
          onPress={moveToRandom}
        >
          <Text className="text-base font-semibold text-white">
            Random Move
          </Text>
        </Pressable>
        <Pressable
          className="flex-1 items-center rounded-xs bg-gray-500 py-3 active:bg-gray-600"
          onPress={reset}
        >
          <Text className="text-base font-semibold text-white">Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}
