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
    title: 'Sequence',
    route: '/expo-demos/anim-composite/sequence',
    icon: 'linear-scale',
    desc: 'Three boxes animate one after another: move, change color, and scale in sequence.',
  },
  {
    title: 'Parallel',
    route: '/expo-demos/anim-composite/parallel',
    icon: 'sync',
    desc: 'Opacity, scale and rotation animate simultaneously using Animated.parallel.',
  },
  {
    title: 'Stagger',
    route: '/expo-demos/anim-composite/stagger',
    icon: 'view-list',
    desc: 'Eight list items fade in and slide from the left with staggered delays.',
  },
  {
    title: 'Loop',
    route: '/expo-demos/anim-composite/loop',
    icon: 'loop',
    desc: 'Animated.loop for continuous spinning and pulsing effects.',
  },
  {
    title: 'Button Feedback',
    route: '/expo-demos/anim-composite/button-feedback',
    icon: 'touch-app',
    desc: 'Practical button press effects combining spring, sequence, loop and parallel.',
  },
];

export default function AnimCompositeIndex() {
  const router = useRouter();

  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-[#151718]"
      contentContainerClassName="p-4 gap-4"
    >
      <View className="items-center gap-2 pt-4 pb-2">
        <Text className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Composite Animations
        </Text>
        <Text className="text-center text-sm text-gray-500 dark:text-gray-400">
          Combine multiple animations with sequence and stagger.
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
          Animated.sequence 让动画按顺序执行，Animated.stagger 让多个动画按固定间隔依次启动，
          非常适合列表项的交错入场效果。
        </Text>
      </View>
    </ScrollView>
  );
}
