import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function StackBasicHome() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="flex-1 items-center justify-center p-6">
      <View className="items-center gap-4">
        <View className="h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-900/30">
          <Text className="text-2xl">🏠</Text>
        </View>
        <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">
          Home Screen
        </Text>
        <Text className="text-center text-sm text-gray-500 dark:text-gray-400">
          This is the root of the stack.{'\n'}
          <Text className="font-mono text-indigo-600 dark:text-indigo-400">app/index.tsx</Text>
        </Text>
        <Pressable
          className="mt-2 rounded-lg bg-indigo-500 px-6 py-3 active:bg-indigo-600"
          onPress={() => router.push('/expo-demos/stack-basic/detail')}
        >
          <Text className="font-semibold text-white">Push → Detail</Text>
        </Pressable>
      </View>

      {/* Info Note */}
      <View className="absolute bottom-4 left-4 right-4 rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
        <Text className="text-xs text-blue-700 dark:text-blue-300">
          Expo Router 文件路由写法：在 app/_layout.tsx 中导出 {'<Stack>'} 即可创建栈导航器。
          每个 app/ 下的 .tsx 文件自动注册为一个 Stack.Screen。
        </Text>
      </View>
    </ScrollView>
  );
}
