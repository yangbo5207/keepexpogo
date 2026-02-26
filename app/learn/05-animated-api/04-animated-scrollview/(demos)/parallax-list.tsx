import { useRef } from "react";
import { Animated, Dimensions, Text, View } from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const ITEM_HEIGHT = 120;
const ITEMS = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

export default function ParallaxListScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <Animated.ScrollView
      className="flex-1 bg-cream-50 dark:bg-night-800"
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true },
      )}
      scrollEventThrottle={16}
    >
      {ITEMS.map((item, index) => {
        const inputRange = [
          (index - 1) * ITEM_HEIGHT,
          index * ITEM_HEIGHT,
          (index + 1) * ITEM_HEIGHT,
        ];

        const scale = scrollY.interpolate({
          inputRange,
          outputRange: [0.9, 1, 0.9],
          extrapolate: "clamp",
        });

        const opacity = scrollY.interpolate({
          inputRange,
          outputRange: [0.6, 1, 0.6],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={item}
            className="mx-4 justify-center rounded-xs border border-warning-200 bg-warning-50 px-5 dark:border-warning-800/40 dark:bg-warning-900/20"
            style={{
              height: ITEM_HEIGHT,
              marginTop: index === 0 ? 16 : 12,
              transform: [{ scale }],
              opacity,
            }}
          >
            <Text className="text-lg font-semibold text-cream-900 dark:text-night-50">
              {item}
            </Text>
          </Animated.View>
        );
      })}
      <View style={{ height: 16 }} />
    </Animated.ScrollView>
  );
}
