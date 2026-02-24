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
    title: 'Color Interpolation',
    route: '/expo-demos/anim-interpolate/color',
    icon: 'palette',
    desc: 'Drag a slider to interpolate Animated.Value into a smooth background color gradient.',
  },
  {
    title: 'Rotation',
    route: '/expo-demos/anim-interpolate/rotation',
    icon: 'rotate-right',
    desc: 'Infinite spinning loader and a manual angle control via interpolation.',
  },
];

export default function AnimInterpolateIndex() {
  const router = useRouter();

  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-[#151718]"
      contentContainerClassName="p-4 gap-4"
    >
      <View className="items-center gap-2 pt-4 pb-2">
        <Text className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Interpolation
        </Text>
        <Text className="text-center text-sm text-gray-500 dark:text-gray-400">
          Map Animated.Value to colors, angles, and custom ranges.
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
          interpolate() 将一个 Animated.Value 的变化范围映射到另一个范围，
          支持数字、颜色字符串、角度字符串等多种输出格式。
        </Text>
      </View>
    </ScrollView>
  );
}
