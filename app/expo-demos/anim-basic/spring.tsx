import { useRef, useState } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';

function StepControl({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <View className="flex-row items-center justify-between">
      <Text className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}: {value}
      </Text>
      <View className="flex-row gap-2">
        <Pressable
          className="h-8 w-8 items-center justify-center rounded-xs bg-gray-200 active:bg-gray-300 dark:bg-gray-700 dark:active:bg-gray-600"
          onPress={() => onChange(Math.max(min, value - step))}
        >
          <Text className="text-base font-bold text-gray-600 dark:text-gray-300">−</Text>
        </Pressable>
        <Pressable
          className="h-8 w-8 items-center justify-center rounded-xs bg-gray-200 active:bg-gray-300 dark:bg-gray-700 dark:active:bg-gray-600"
          onPress={() => onChange(Math.min(max, value + step))}
        >
          <Text className="text-base font-bold text-gray-600 dark:text-gray-300">+</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function SpringScreen() {
  const scaleAnim = useRef(new Animated.Value(0.3)).current;
  const [tension, setTension] = useState(40);
  const [friction, setFriction] = useState(7);

  const bounce = () => {
    scaleAnim.setValue(0.3);
    Animated.spring(scaleAnim, {
      toValue: 1,
      tension,
      friction,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View className="flex-1 bg-white dark:bg-[#151718]">
      <View className="flex-1 items-center justify-center">
        <Animated.View
          className="h-32 w-32 items-center justify-center rounded-xs bg-orange-400"
          style={{ transform: [{ scale: scaleAnim }] }}
        >
          <Text className="text-3xl">🏀</Text>
        </Animated.View>
      </View>

      <View className="gap-4 px-6 pb-8">
        <StepControl
          label="Tension"
          value={tension}
          min={1}
          max={100}
          step={5}
          onChange={setTension}
        />

        <StepControl
          label="Friction"
          value={friction}
          min={1}
          max={30}
          step={1}
          onChange={setFriction}
        />

        <Pressable
          className="items-center rounded-xs bg-orange-500 py-3 active:bg-orange-600"
          onPress={bounce}
        >
          <Text className="text-base font-semibold text-white">Bounce!</Text>
        </Pressable>

        <View className="rounded-xs bg-blue-50 p-3 dark:bg-blue-900/20">
          <Text className="text-xs text-blue-700 dark:text-blue-300">
            Animated.spring 使用弹簧物理模型。tension 越大弹性越强（振幅越大），
            friction 越大阻尼越强（振荡越快停止）。不需要指定 duration。
          </Text>
        </View>
      </View>
    </View>
  );
}
