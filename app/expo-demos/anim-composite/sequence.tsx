import { useRef, useCallback } from 'react';
import { Animated, Pressable, Text, View, Easing } from 'react-native';

const COLORS = ['#f97316', '#22c55e', '#3b82f6'];
const SIZE = 60;

export default function SequenceScreen() {
  const positions = useRef(COLORS.map(() => new Animated.Value(0))).current;
  const scales = useRef(COLORS.map(() => new Animated.Value(1))).current;

  const play = useCallback(() => {
    // Reset
    positions.forEach((p) => p.setValue(0));
    scales.forEach((s) => s.setValue(1));

    const moveAnims = positions.map((pos) =>
      Animated.timing(pos, {
        toValue: 1,
        duration: 400,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      })
    );

    const scaleAnims = scales.map((scale) =>
      Animated.spring(scale, {
        toValue: 1.3,
        friction: 3,
        useNativeDriver: true,
      })
    );

    const resetScaleAnims = scales.map((scale) =>
      Animated.timing(scale, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      })
    );

    Animated.sequence([
      // Move boxes one by one
      ...moveAnims.map((anim, i) =>
        Animated.parallel([anim, scaleAnims[i]])
      ),
      Animated.delay(200),
      // Reset all scales together
      Animated.parallel(resetScaleAnims),
    ]).start();
  }, [positions, scales]);

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
                transform: [
                  { translateX },
                  { scale: scales[index] },
                ],
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
          <Text className="text-base font-semibold text-white">Play Sequence</Text>
        </Pressable>

        <View className="rounded-xs bg-blue-50 p-3 dark:bg-blue-900/20">
          <Text className="text-xs text-blue-700 dark:text-blue-300">
            Animated.sequence 按数组顺序依次执行动画。每个步骤内部用 parallel
            同时执行移动和缩放，形成「一个接一个」的编排效果。
          </Text>
        </View>
      </View>
    </View>
  );
}
