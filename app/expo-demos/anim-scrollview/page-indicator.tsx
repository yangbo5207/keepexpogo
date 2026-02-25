import { useRef } from "react";
import { Animated, Dimensions, Text, View } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const PAGES = ["Page 1", "Page 2", "Page 3"];
const DOT_SIZE = 8;
const DOT_SPACING = 16;

export default function PageIndicatorScreen() {
  const scrollX = useRef(new Animated.Value(0)).current;

  const indicatorTranslateX = scrollX.interpolate({
    inputRange: PAGES.map((_, i) => i * SCREEN_WIDTH),
    outputRange: PAGES.map((_, i) => i * (DOT_SIZE + DOT_SPACING)),
  });

  return (
    <View className="flex-1 bg-white dark:bg-[#151718]">
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true },
        )}
        scrollEventThrottle={16}
      >
        {PAGES.map((page, index) => (
          <View
            key={page}
            className="items-center justify-center"
            style={{ width: SCREEN_WIDTH }}
          >
            <View className="h-48 w-48 items-center justify-center rounded-xs bg-orange-400">
              <Text className="text-4xl font-bold text-white">{index + 1}</Text>
            </View>
            <Text className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100">
              {page}
            </Text>
          </View>
        ))}
      </Animated.ScrollView>

      <View className="items-center pb-10">
        <View className="flex-row items-center">
          {PAGES.map((_, i) => (
            <View
              key={i}
              className="rounded-full bg-gray-300 dark:bg-gray-600"
              style={{
                width: DOT_SIZE,
                height: DOT_SIZE,
                marginHorizontal: DOT_SPACING / 2,
              }}
            />
          ))}
          <Animated.View
            className="absolute rounded-full bg-orange-500"
            style={{
              width: DOT_SIZE,
              height: DOT_SIZE,
              left: DOT_SPACING / 2,
              transform: [{ translateX: indicatorTranslateX }],
            }}
          />
        </View>
      </View>
    </View>
  );
}
