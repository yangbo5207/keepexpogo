import { useRef } from "react";
import { Animated, Easing, Pressable, Text, View } from "react-native";

const COLORS = ["#f97316", "#22c55e", "#3b82f6"];
const SIZE = 60;

export default function SequenceScreen() {
  const positions = useRef(COLORS.map(() => new Animated.Value(0))).current;
  const scales = useRef(COLORS.map(() => new Animated.Value(1))).current;

  const play = () => {
    positions.forEach((p) => p.setValue(0));
    scales.forEach((s) => s.setValue(1));

    const moveAnims = positions.map((pos) =>
      Animated.timing(pos, {
        toValue: 1,
        duration: 400,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    );

    const scaleAnims = scales.map((scale) =>
      Animated.spring(scale, {
        toValue: 1.3,
        friction: 3,
        useNativeDriver: true,
      }),
    );

    const resetScaleAnims = scales.map((scale) =>
      Animated.timing(scale, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    );

    Animated.sequence([
      ...moveAnims.map((anim, i) => Animated.parallel([anim, scaleAnims[i]])),
      Animated.delay(200),
      Animated.parallel(resetScaleAnims),
    ]).start();
  };

  return (
    <View className="flex-1 bg-white dark:bg-[#151718]">
      <View className="flex-1 items-center justify-center gap-6">
        {COLORS.map((color, index) => {
          const translateX = positions[index].interpolate({
            inputRange: [0, 1],
            outputRange: [-100, 100],
          });

          return (
            <Animated.View
              key={color}
              style={{
                width: SIZE,
                height: SIZE,
                borderRadius: 2,
                backgroundColor: color,
                transform: [{ translateX }, { scale: scales[index] }],
              }}
            />
          );
        })}
      </View>

      <View className="gap-3 px-6 pb-8">
        <Pressable
          className="items-center rounded-xs bg-orange-500 py-3 active:bg-orange-600"
          onPress={play}
        >
          <Text className="text-base font-semibold text-white">
            Play Sequence
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
