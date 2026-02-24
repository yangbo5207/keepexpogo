import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function ScreenA() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-2 rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
        <Text className="text-3xl">📋</Text>
        <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">Screen A</Text>
        <Text className="text-xs text-gray-400">modal · Stack depth: 2</Text>
      </View>
      <Pressable onPress={() => router.push('/expo-demos/modal-dismiss/screen-b' as any)} className="items-center rounded-xl bg-indigo-500 py-3 active:bg-indigo-600">
        <Text className="font-semibold text-white">Open Modal B</Text>
      </Pressable>
      <Pressable onPress={() => router.back()} className="items-center rounded-xl bg-gray-200 py-3 active:bg-gray-300 dark:bg-gray-700">
        <Text className="font-semibold text-gray-700 dark:text-gray-200">router.back()</Text>
      </Pressable>
      <Pressable onPress={() => router.dismiss()} className="items-center rounded-xl bg-gray-200 py-3 active:bg-gray-300 dark:bg-gray-700">
        <Text className="font-semibold text-gray-700 dark:text-gray-200">router.dismiss()</Text>
      </Pressable>
    </ScrollView>
  );
}
