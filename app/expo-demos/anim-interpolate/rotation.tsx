import { useRef, useEffect, useState } from 'react';
import { Animated, Easing, Pressable, Text, View } from 'react-native';

const ANGLES = [0, 45, 90, 180, 270, 360];

export default function RotationScreen() {
  // Auto-spinning loader
  const spinAnim = useRef(new Animated.Value(0)).current;
  const [spinning, setSpinning] = useState(true);
  const spinRef = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    if (spinning) {
      spinRef.current = Animated.loop(
        Animated.timing(spinAnim, {
          toValue: 1,
          duration: 1200,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      );
      spinRef.current.start();
    } else {
      spinRef.current?.stop();
    }

    return () => spinRef.current?.stop();
  }, [spinning, spinAnim]);

  const autoRotate = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // Manual angle control
  const manualAnim = useRef(new Animated.Value(0)).current;
  const [angle, setAngle] = useState(0);

  const manualRotate = manualAnim.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const animateToAngle = (value: number) => {
    setAngle(value);
    Animated.spring(manualAnim, {
      toValue: value,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View className="flex-1 bg-white dark:bg-[#151718]">
      <View className="flex-1 items-center justify-center gap-10">
        {/* Auto spinner */}
        <View className="items-center gap-3">
          <Text className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Auto Spin (loop + linear)
          </Text>
          <Animated.View
            className="h-20 w-20 items-center justify-center rounded-xs bg-orange-400"
            style={{ transform: [{ rotate: autoRotate }] }}
          >
            <Text className="text-2xl">⟳</Text>
          </Animated.View>
          <Pressable
            className="rounded-xs bg-gray-200 px-4 py-2 active:bg-gray-300 dark:bg-gray-700 dark:active:bg-gray-600"
            onPress={() => setSpinning(!spinning)}
          >
            <Text className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {spinning ? 'Stop' : 'Start'}
            </Text>
          </Pressable>
        </View>

        {/* Manual control */}
        <View className="items-center gap-3">
          <Text className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Manual Control ({angle}°)
          </Text>
          <Animated.View
            className="h-20 w-20 items-center justify-center rounded-xs bg-blue-400"
            style={{ transform: [{ rotate: manualRotate }] }}
          >
            <Text className="text-2xl">→</Text>
          </Animated.View>
        </View>
      </View>

      <View className="gap-3 px-6 pb-8">
        <Text className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Rotate to:
        </Text>
        <View className="flex-row flex-wrap gap-2">
          {ANGLES.map((deg) => (
            <Pressable
              key={deg}
              className={`items-center rounded-xs px-3 py-2 active:opacity-80 ${
                angle === deg
                  ? 'bg-blue-500'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
              onPress={() => animateToAngle(deg)}
            >
              <Text
                className={`text-sm font-semibold ${
                  angle === deg
                    ? 'text-white'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {deg}°
              </Text>
            </Pressable>
          ))}
        </View>

        <View className="rounded-xs bg-blue-50 p-3 dark:bg-blue-900/20">
          <Text className="text-xs text-blue-700 dark:text-blue-300">
            角度插值将数字映射到 '0deg'→'360deg' 字符串。Animated.loop + Easing.linear
            实现匀速无限旋转，避免每圈之间出现停顿感。
          </Text>
        </View>
      </View>
    </View>
  );
}
