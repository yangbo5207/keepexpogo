import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function ScreenC() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-2 rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
        <Text className="text-3xl">📸</Text>
        <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">Screen C</Text>
        <Text className="text-xs text-gray-400">modal · Stack depth: 4</Text>
      </View>
      <Pressable onPress={() => router.back()} className="items-center rounded-xl bg-gray-200 py-3 active:bg-gray-300 dark:bg-gray-700">
        <Text className="font-semibold text-gray-700 dark:text-gray-200">router.back() → back to B</Text>
      </Pressable>
      <Pressable onPress={() => router.dismiss(2)} className="items-center rounded-xl bg-amber-100 py-3 active:bg-amber-200 dark:bg-amber-900/30">
        <Text className="font-semibold text-amber-700 dark:text-amber-300">router.dismiss(2) → back to A</Text>
      </Pressable>
      <Pressable onPress={() => router.dismissAll()} className="items-center rounded-xl bg-red-100 py-3 active:bg-red-200 dark:bg-red-900/30">
        <Text className="font-semibold text-red-600 dark:text-red-400">router.dismissAll() → back to Home</Text>
      </Pressable>
    </ScrollView>
  );
}
