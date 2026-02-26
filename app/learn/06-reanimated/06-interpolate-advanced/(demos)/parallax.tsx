import { Image, Text, View } from "react-native";
import Animated, { Extrapolation, interpolate, interpolateColor, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const IMG_HEIGHT = 280;
const BASE_SCALE = 1.35;

export default function ParallaxScrollScreen() {
  const scrollY = useSharedValue(0);
  const insets = useSafeAreaInsets();

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const imageStyle = useAnimatedStyle(() => {
    const scale = interpolate(scrollY.value, [-IMG_HEIGHT, 0], [2, BASE_SCALE], Extrapolation.CLAMP);
    const translateY = interpolate(scrollY.value, [-IMG_HEIGHT, 0, IMG_HEIGHT], [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.3], Extrapolation.CLAMP);

    return {
      transform: [{ scale }, { translateY }],
    };
  });

  const titleStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, IMG_HEIGHT - 120], [1, 0], Extrapolation.CLAMP);
    return { opacity };
  });

  const headerStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(scrollY.value, [0, IMG_HEIGHT - 80], ["rgba(251,246,238,0)", "rgba(251,246,238,0.98)"]);
    const borderColor = interpolateColor(scrollY.value, [0, IMG_HEIGHT - 80], ["rgba(0,0,0,0)", "rgba(210,197,174,0.6)"]);
    return { backgroundColor, borderBottomColor: borderColor };
  });

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <Animated.View style={[{ height: IMG_HEIGHT }, imageStyle]} className="absolute left-0 right-0 top-0 overflow-hidden">
        <Image source={{ uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop" }} className="h-full w-full" resizeMode="cover" />
        <View className="absolute inset-0 bg-black/20" />
      </Animated.View>

      <Animated.ScrollView onScroll={scrollHandler} scrollEventThrottle={16} contentContainerStyle={{ paddingTop: IMG_HEIGHT, paddingBottom: 40 }}>
        <View className="rounded-t-3xl bg-cream-50 px-5 pb-8 pt-6 dark:bg-night-800">
          <Animated.View style={titleStyle} className="mb-6">
            <Text className="text-3xl font-semibold text-cream-900 dark:text-night-50">Parallax Effect</Text>
            <Text className="mt-2 text-sm text-cream-700 dark:text-night-200">滚动偏移驱动背景视差与标题淡出</Text>
          </Animated.View>

          <Text className="text-sm leading-6 text-cream-700 dark:text-night-200">当你向下拉时，背景图会被放大；向上滚动时，背景位移速度慢于内容，产生层次感。 这是常见的内容详情页动效模式。</Text>

          <View className="mt-6 gap-4">
            {Array.from({ length: 18 }, (_, i) => (
              <View key={`item-${i}`} className="rounded-2xl border border-cream-200 bg-cream-100 px-4 py-4 dark:border-night-600 dark:bg-night-700">
                <Text className="text-sm font-semibold text-cream-900 dark:text-night-50">Item {i + 1}</Text>
                <Text className="mt-1 text-xs text-cream-600 dark:text-night-200">内容块示例，用于撑起滚动距离。</Text>
              </View>
            ))}
          </View>
        </View>
      </Animated.ScrollView>

      <Animated.View
        style={[
          headerStyle,
          {
            paddingTop: insets.top,
          },
        ]}
        className="absolute left-0 right-0 top-0 z-10 border-b"
      >
        <View className="h-14 items-center justify-center">
          <Text className="text-base font-semibold text-cream-900 dark:text-night-50">Details</Text>
        </View>
      </Animated.View>
    </View>
  );
}
