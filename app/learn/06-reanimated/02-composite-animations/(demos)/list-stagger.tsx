import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from "react-native-reanimated";

const ITEMS = ["Payment Received", "New Follower", "System Update", "Weekly Report", "Promo Ready"];

type StaggerItemProps = {
  label: string;
  index: number;
  playId: number;
};

function StaggerItem({ label, index, playId }: StaggerItemProps) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(24);

  useEffect(() => {
    const delay = index * 100;

    opacity.value = 0;
    translateY.value = 24;

    opacity.value = withDelay(delay, withTiming(1, { duration: 500 }));
    translateY.value = withDelay(delay, withSpring(0, { damping: 16, stiffness: 160 }));
  }, [index, opacity, playId, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View className="flex-row items-center justify-between rounded-xs bg-cream-100 px-4 py-3 dark:bg-night-700" style={animatedStyle}>
      <View className="flex-1">
        <Text className="text-sm font-semibold text-cream-900 dark:text-cream-100">{label}</Text>
        <Text className="mt-1 text-xs text-cream-600 dark:text-cream-500">Delay {index * 100}ms</Text>
      </View>
      <View className="h-8 w-8 items-center justify-center rounded-xs bg-warning-100 dark:bg-warning-800/30">
        <Text className="text-xs font-bold text-warning-600 dark:text-warning-300">{index + 1}</Text>
      </View>
    </Animated.View>
  );
}

export default function ListStaggerScreen() {
  const [playId, setPlayId] = useState(0);

  const replay = () => {
    setPlayId((prev) => prev + 1);
  };

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <View className="flex-1 gap-3 p-4 pt-6">
        {ITEMS.map((item, index) => (
          <StaggerItem key={item} label={item} index={index} playId={playId} />
        ))}
      </View>

      <View className="gap-3 px-6 pb-8">
        <Button className="items-center rounded-xs bg-warning-500 py-3 active:bg-warning-600" label="Replay Stagger" variant="warning" onPress={replay} />
      </View>
    </View>
  );
}
