import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function StackBasicSubDetail() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="flex-1 items-center justify-center p-6">
      <View className="items-center gap-4">
        <View className="h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 dark:bg-amber-900/30">
          <Text className="text-2xl">📑</Text>
        </View>
        <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">
          SubDetail Screen
        </Text>
        <Text className="text-center text-sm text-gray-500 dark:text-gray-400">
          Deepest screen in the stack.{'\n'}
          <Text className="font-mono text-indigo-600 dark:text-indigo-400">app/subdetail.tsx</Text>
        </Text>
        <Pressable
          className="mt-2 rounded-lg bg-gray-200 px-6 py-3 active:bg-gray-300 dark:bg-gray-700"
          onPress={() => router.back()}
        >
          <Text className="font-semibold text-gray-800 dark:text-gray-100">← Pop Back</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
