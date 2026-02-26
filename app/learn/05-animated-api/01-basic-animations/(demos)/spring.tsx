import { useRef, useState } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import { Button } from '@/components/ui/button';

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
      <Text className="text-sm font-medium text-cream-700 dark:text-night-200">
        {label}: {value}
      </Text>
      <View className="flex-row gap-2">
        <Pressable
          className="h-8 w-8 items-center justify-center rounded-xs bg-cream-200 active:bg-cream-300 dark:bg-night-600 dark:active:bg-night-500"
          onPress={() => onChange(Math.max(min, value - step))}
        >
          <Text className="text-base font-bold text-cream-700 dark:text-night-200">−</Text>
        </Pressable>
        <Pressable
          className="h-8 w-8 items-center justify-center rounded-xs bg-cream-200 active:bg-cream-300 dark:bg-night-600 dark:active:bg-night-500"
          onPress={() => onChange(Math.min(max, value + step))}
        >
          <Text className="text-base font-bold text-cream-700 dark:text-night-200">+</Text>
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
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <View className="flex-1 items-center justify-center">
        <Animated.View
          className="h-32 w-32 items-center justify-center rounded-xs bg-warning-400"
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

        <Button label="Bounce!" onPress={bounce} />

        <View className="rounded-xs bg-secondary-50 p-3 dark:bg-secondary-900/20">
          <Text className="text-xs text-secondary-700 dark:text-secondary-300">
            Animated.spring 使用弹簧物理模型。tension 越大弹性越强（振幅越大），
            friction 越大阻尼越强（振荡越快停止）。不需要指定 duration。
          </Text>
        </View>
      </View>
    </View>
  );
}
