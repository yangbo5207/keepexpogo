import { useRef } from "react";
import { Animated, Text, View } from "react-native";
import { Button } from "@/components/ui/button";

const ITEMS = Array.from({ length: 8 }, (_, i) => `List Item ${i + 1}`);

export default function StaggerScreen() {
  const anims = useRef(ITEMS.map(() => new Animated.Value(0))).current;

  const play = () => {
    anims.forEach((a) => a.setValue(0));

    Animated.stagger(
      80,
      anims.map((anim) =>
        Animated.timing(anim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
      ),
    ).start();
  };

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <View className="flex-1 gap-2 p-4 pt-6">
        {ITEMS.map((item, index) => {
          const opacity = anims[index];
          const translateX = anims[index].interpolate({
            inputRange: [0, 1],
            outputRange: [-60, 0],
          });

          return (
            <Animated.View
              key={item}
              className="flex-row items-center gap-3 rounded-xs bg-cream-100 p-3 dark:bg-night-700"
              style={{ opacity, transform: [{ translateX }] }}
            >
              <View className="h-8 w-8 items-center justify-center rounded-xs bg-warning-100 dark:bg-warning-800/30">
                <Text className="text-sm font-bold text-warning-600 dark:text-warning-400">
                  {index + 1}
                </Text>
              </View>
              <Text className="text-sm font-medium text-cream-800 dark:text-cream-400">
                {item}
              </Text>
            </Animated.View>
          );
        })}
      </View>

      <View className="gap-3 px-6 pb-8">
        <Button className="items-center rounded-xs bg-warning-500 py-3 active:bg-warning-600" label="Replay Stagger" variant="warning" onPress={play} />
      </View>
    </View>
  );
}
