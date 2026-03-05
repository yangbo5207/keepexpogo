import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/button';

export default function ScreenOptionsDetail() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-3 rounded-xs bg-cream-100 p-6 dark:bg-night-700">
        <View className="h-20 w-20 items-center justify-center rounded-xs bg-primary-100 dark:bg-primary-900/30">
          <Text className="text-3xl">🎧</Text>
        </View>
        <Text className="text-center text-sm text-cream-700 dark:text-night-200">
          This screen inherits screenOptions from the parent layout.{'\n'}
          Header style: colored (teal)
        </Text>
      </View>

      <Button label="Open Modal (headerShown: false)" onPress={() => router.push('/learn/04-expo-router/01-stack/stack-options/modal' as any)} />

      <View className="rounded-xs bg-warning-50 p-3 dark:bg-warning-900/20">
        <Text className="text-xs text-warning-700 dark:text-warning-300">
          单个页面可以通过 options 覆盖 screenOptions 的默认配置。例如 Modal 页面
          通常设置 headerShown: false 来隐藏导航栏。
        </Text>
      </View>
    </ScrollView>
  );
}
