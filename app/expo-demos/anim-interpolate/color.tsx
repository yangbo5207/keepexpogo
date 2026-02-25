import { useRef, useState } from "react";
import { Animated, Pressable, Text, View } from "react-native";

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
    <View className="flex-1 bg-white dark:bg-[#151718]">
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
          <Text className="text-4xl font-bold text-white">
            {currentVal.toFixed(2)}
          </Text>
        </Animated.View>

        <View className="mt-6 flex-row items-center gap-2">
          <View className="h-6 w-6 rounded-xs bg-orange-500" />
          <Text className="text-xs text-gray-500 dark:text-gray-400">0</Text>
          <View className="mx-2 h-6 w-6 rounded-xs bg-green-500" />
          <Text className="text-xs text-gray-500 dark:text-gray-400">0.5</Text>
          <View className="mx-2 h-6 w-6 rounded-xs bg-blue-500" />
          <Text className="text-xs text-gray-500 dark:text-gray-400">1</Text>
        </View>
      </View>

      <View className="gap-3 px-6 pb-8">
        <Text className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Animate to value:
        </Text>
        <View className="flex-row gap-2">
          {STEPS.map((val) => (
            <Pressable
              key={val}
              className={`flex-1 items-center rounded-xs py-2.5 active:opacity-80 ${
                currentVal === val
                  ? "bg-orange-500"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
              onPress={() => animateTo(val)}
            >
              <Text
                className={`text-sm font-semibold ${
                  currentVal === val
                    ? "text-white"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {val}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}
