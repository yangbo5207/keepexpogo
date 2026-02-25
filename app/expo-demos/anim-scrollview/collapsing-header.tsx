import { useRef } from "react";
import { Animated, Text, View } from "react-native";

const ITEMS = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

export default function CollapsingHeaderScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [200, 60],
    extrapolate: "clamp",
  });

  const titleOpacity = scrollY.interpolate({
    inputRange: [0, 100, 150],
    outputRange: [1, 0.3, 0],
    extrapolate: "clamp",
  });

  return (
    <View className="flex-1 bg-white dark:bg-[#151718]">
      <Animated.View
        className="absolute top-0 left-0 right-0 z-10 items-center justify-end pb-4"
        style={{ height: headerHeight }}
      >
        <Animated.View
          className="absolute top-0 left-0 right-0 bottom-0 bg-orange-400"
          style={{ opacity: headerOpacity }}
        />
        <Animated.Text
          className="text-2xl font-bold text-white"
          style={{ opacity: titleOpacity }}
        >
          Scroll Down
        </Animated.Text>
        <Animated.Text
          className="absolute bottom-2 text-sm font-semibold text-white"
          style={{ opacity: headerOpacity }}
        >
          Collapsed
        </Animated.Text>
      </Animated.View>

      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: 200 }}
      >
        <View className="gap-3 p-4">
          {ITEMS.map((item) => (
            <View
              key={item}
              className="rounded-xs bg-orange-50 p-4 dark:bg-orange-900/20"
            >
              <Text className="text-base text-gray-800 dark:text-gray-100">
                {item}
              </Text>
            </View>
          ))}
        </View>
      </Animated.ScrollView>
    </View>
  );
}
