import { Button } from "@/components/ui/button";
import { View } from "react-native";
import { interpolate, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { FlipCardBack } from "./back";
import { FlipCardFront } from "./front";

export default function FlipCardScreen() {
  const rotate = useSharedValue(0);

  const frontStyle = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [0, 180]);
    const opacity = rotate.value < 0.5 ? 1 : 0;
    return {
      transform: [{ rotateY: `${rotateValue}deg` }],
      opacity,
      zIndex: opacity ? 1 : 0,
    };
  });

  const backStyle = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [180, 360]);
    const opacity = rotate.value >= 0.5 ? 1 : 0;
    return {
      transform: [{ rotateY: `${rotateValue}deg` }],
      opacity,
      zIndex: opacity ? 1 : 0,
    };
  });

  return (
    <View className="flex-1 items-center justify-center bg-cream-50 dark:bg-night-800">
      <View className="mb-10 h-72 w-52 items-center justify-center" style={{ transform: [{ perspective: 1000 }] }}>
        <FlipCardFront style={frontStyle} />
        <FlipCardBack style={backStyle} />
      </View>

      <Button
        className="mx-auto my-8"
        label="Flip Card"
        onPress={() => {
          rotate.value = withSpring(rotate.value === 0 ? 1 : 0);
        }}
      />
    </View>
  );
}
