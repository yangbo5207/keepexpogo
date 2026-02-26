import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/button';

export default function StackBasicHome() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="flex-1 items-center justify-center p-6">
      <View className="items-center gap-4">
        <View className="h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 dark:bg-primary-900/30">
          <Text className="text-2xl">🏠</Text>
        </View>
        <Text className="text-center text-sm text-cream-700 dark:text-night-200">
          This is the root of the stack.{'\n'}
          <Text className="font-mono text-primary-600 dark:text-primary-400">app/index.tsx</Text>
        </Text>
        <Button label="Push → Detail" onPress={() => router.push('/learn/04-expo-router/01-stack/stack-basic/detail')} />
      </View>

      {/* Info Note */}
      <View className="absolute bottom-4 left-4 right-4 rounded-lg bg-secondary-50 p-3 dark:bg-secondary-900/20">
        <Text className="text-xs text-secondary-700 dark:text-secondary-300">
          Expo Router 文件路由写法：在 app/_layout.tsx 中导出 {'<Stack>'} 即可创建栈导航器。
          每个 app/ 下的 .tsx 文件自动注册为一个 Stack.Screen。
        </Text>
      </View>
    </ScrollView>
  );
}
