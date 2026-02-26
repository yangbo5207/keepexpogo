import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from "react-native-reanimated";

export default function ShakeDemoScreen() {
  const offset = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const shake = () => {
    offset.value = withSequence(
      withTiming(-10, { duration: 50 }),
      withRepeat(withSequence(withTiming(10, { duration: 100 }), withTiming(-10, { duration: 100 })), 2, true),
      withTiming(0, { duration: 50 }),
    );
  };

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800 p-16">
      <Card className="mb-8">
        <Card.Header>
          <Card.Eyebrow>Reanimated Basic</Card.Eyebrow>
        </Card.Header>
        <Card.Title>错误提示摇晃</Card.Title>
        <Card.Description>使用 withSequence + withRepeat 组合左右抖动。</Card.Description>
      </Card>

      <Animated.View style={animatedStyle} className="rounded-xs border border-cream-300 bg-cream-100 px-4 py-3 dark:border-night-500 dark:bg-night-700">
        <Text className="text-sm text-cream-800 dark:text-night-100">输入错误示例</Text>
      </Animated.View>

      <Button className="mt-16 mx-auto" label="触发 Shake" onPress={shake} />
    </View>
  );
}
