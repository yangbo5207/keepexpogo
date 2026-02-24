import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ComponentProps } from 'react';

const demos: {
  title: string;
  route: string;
  icon: ComponentProps<typeof MaterialIcons>['name'];
  desc: string;
}[] = [
  {
    title: 'Fade (Timing)',
    route: '/expo-demos/anim-basic/fade',
    icon: 'opacity',
    desc: 'Animated.timing fade in/out with opacity value display and toggle control.',
  },
  {
    title: 'Fade Toggle',
    route: '/expo-demos/anim-basic/fade-toggle',
    icon: 'lightbulb-outline',
    desc: 'Minimal fade in/out toggle using Animated.timing.',
  },
  {
    title: 'Scroll Fade',
    route: '/expo-demos/anim-basic/scroll-fade',
    icon: 'unfold-more',
    desc: 'Animated.ScrollView driven header fade & scale using Animated.event.',
  },
  {
    title: 'ValueXY Move',
    route: '/expo-demos/anim-basic/value-xy',
    icon: 'open-with',
    desc: 'Animated.ValueXY driven 2D position with spring and getTranslateTransform.',
  },
  {
    title: 'Decay Momentum',
    route: '/expo-demos/anim-basic/decay',
    icon: 'swipe',
    desc: 'Animated.decay inertial deceleration after drag release with PanResponder.',
  },
  {
    title: 'Spring Bounce',
    route: '/expo-demos/anim-basic/spring',
    icon: 'sports-basketball',
    desc: 'Animated.spring bounce effect with adjustable tension and friction sliders.',
  },
];

export default function AnimBasicIndex() {
  const router = useRouter();

  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-[#151718]"
      contentContainerClassName="p-4 gap-4"
    >
      <View className="items-center gap-2 pt-4 pb-2">
        <Text className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Basic Animations
        </Text>
        <Text className="text-center text-sm text-gray-500 dark:text-gray-400">
          Explore timing and spring drivers from the Animated API.
        </Text>
      </View>

      {demos.map((demo) => (
        <Pressable
          key={demo.route}
          className="rounded-xs bg-orange-50 p-4 active:bg-orange-100 dark:bg-orange-900/20 dark:active:bg-orange-900/30"
          onPress={() => router.push(demo.route as any)}
        >
          <View className="flex-row items-center gap-3">
            <View className="h-12 w-12 items-center justify-center rounded-xs bg-orange-100 dark:bg-orange-800/30">
              <MaterialIcons name={demo.icon} size={24} color="#f97316" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-semibold text-gray-800 dark:text-gray-100">
                {demo.title}
              </Text>
              <Text className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                {demo.desc}
              </Text>
            </View>
            <Text className="text-lg text-gray-400">›</Text>
          </View>
        </Pressable>
      ))}

      <View className="mt-2 rounded-xs bg-blue-50 p-3 dark:bg-blue-900/20">
        <Text className="text-xs text-blue-700 dark:text-blue-300">
          Animated.timing 按照时间曲线驱动，Animated.spring 基于弹簧物理模型驱动。
          两者都支持 useNativeDriver 实现 UI 线程动画。
        </Text>
      </View>
    </ScrollView>
  );
}
