import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function ScreenOptionsDetail() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-3 rounded-xl bg-gray-50 p-6 dark:bg-gray-800">
        <View className="h-20 w-20 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-900/30">
          <Text className="text-3xl">🎧</Text>
        </View>
        <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">Wireless Headphones</Text>
        <Text className="text-2xl font-bold text-teal-600 dark:text-teal-400">$99</Text>
        <Text className="text-center text-sm text-gray-500 dark:text-gray-400">
          This screen inherits screenOptions from the parent layout.{'\n'}
          Header style: colored (teal)
        </Text>
      </View>

      <Pressable
        onPress={() => router.push('/expo-demos/stack-options/modal' as any)}
        className="items-center rounded-lg bg-indigo-500 py-3 active:bg-indigo-600"
      >
        <Text className="font-semibold text-white">Open Modal (headerShown: false)</Text>
      </Pressable>

      <View className="rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
        <Text className="text-xs text-amber-700 dark:text-amber-300">
          单个页面可以通过 options 覆盖 screenOptions 的默认配置。例如 Modal 页面
          通常设置 headerShown: false 来隐藏导航栏。
        </Text>
      </View>
    </ScrollView>
  );
}
