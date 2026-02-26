import { useRef, useState } from "react";
import { Animated, Text, View } from "react-native";
import { Chip } from "@/components/ui/chip";

const STEPS = [0, 0.25, 0.5, 0.75, 1];

export default function ColorScreen() {
  const colorAnim = useRef(new Animated.Value(0)).current;
  const [currentVal, setCurrentVal] = useState(0);

  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["rgb(249,115,22)", "rgb(34,197,94)", "rgb(59,130,246)"],
  });

  const animateTo = (value: number) => {
    setCurrentVal(value);
    Animated.timing(colorAnim, {
      toValue: value,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <View className="flex-1 items-center justify-center p-6">
        <Animated.View
          style={{
            backgroundColor,
            width: 200,
            height: 200,
            borderRadius: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text className="text-base font-semibold text-white/90">
            {currentVal.toFixed(2)}
          </Text>
        </Animated.View>

        <View className="mt-6 flex-row items-center gap-2">
          <View className="h-6 w-6 rounded-xs bg-warning-500" />
          <Text className="text-xs text-cream-700 dark:text-night-200">0</Text>
          <View className="mx-2 h-6 w-6 rounded-xs bg-success-500" />
          <Text className="text-xs text-cream-700 dark:text-night-200">0.5</Text>
          <View className="mx-2 h-6 w-6 rounded-xs bg-secondary-500" />
          <Text className="text-xs text-cream-700 dark:text-night-200">1</Text>
        </View>
      </View>

      <View className="gap-3 px-6 pb-8">
        <Text className="text-sm font-medium text-cream-700 dark:text-night-200">
          Animate to value:
        </Text>
        <View className="flex-row gap-2">
          {STEPS.map((val) => (
            <Chip
              key={val}
              label={`${val}`}
              size="sm"
              variant="warning"
              selected={currentVal === val}
              className="flex-1"
              onPress={() => animateTo(val)}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
