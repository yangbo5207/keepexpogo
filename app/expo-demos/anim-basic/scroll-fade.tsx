import { useRef } from 'react';
import { Animated, Text, View } from 'react-native';

const HEADER_HEIGHT = 200;
const ITEMS = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

export default function ScrollFadeScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const headerScale = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  });

  return (
    <View className="flex-1 bg-white dark:bg-[#151718]">
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        scrollEventThrottle={16}
      >
        <Animated.View
          className="items-center justify-center bg-orange-400"
          style={{
            height: HEADER_HEIGHT,
            opacity: headerOpacity,
            transform: [{ scale: headerScale }],
          }}
        >
          <Text className="text-3xl font-bold text-white">Scroll Down</Text>
          <Text className="mt-2 text-sm text-orange-100">Header fades as you scroll</Text>
        </Animated.View>

        <View className="p-4 gap-3">
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
