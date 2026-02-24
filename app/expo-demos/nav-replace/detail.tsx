import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function NavReplaceDetail() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="items-center gap-4 p-6 pb-8">
      <Text className="text-4xl">📦</Text>
      <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">Product Detail</Text>
      <Pressable onPress={() => router.back()} className="w-full items-center rounded-xl bg-gray-200 py-3 active:bg-gray-300 dark:bg-gray-700">
        <Text className="font-semibold text-gray-700 dark:text-gray-200">router.back()</Text>
      </Pressable>
    </ScrollView>
  );
}
