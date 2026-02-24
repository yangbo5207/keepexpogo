import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function ModalDismissIndex() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-2 rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
        <Text className="text-3xl">🏠</Text>
        <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">Home</Text>
        <Text className="text-xs text-gray-400">Stack depth: 1</Text>
      </View>

      <Pressable onPress={() => router.push('/expo-demos/modal-dismiss/screen-a' as any)} className="items-center rounded-xl bg-indigo-500 py-3 active:bg-indigo-600">
        <Text className="font-semibold text-white">Open Modal A</Text>
      </Pressable>

      <View className="rounded-xl bg-teal-50 p-4 dark:bg-teal-900/20">
        <Text className="mb-1 text-xs font-semibold text-teal-700 dark:text-teal-300">Expo Router code</Text>
        <Text className="font-mono text-xs leading-5 text-teal-600 dark:text-teal-400">
          {'import { router } from "expo-router"\n\n// Go back one screen\nrouter.back()\n\n// Dismiss current modal\nrouter.dismiss()\n\n// Dismiss top N screens\nrouter.dismiss(2)\n\n// Dismiss all to root\nrouter.dismissAll()'}
        </Text>
      </View>
    </ScrollView>
  );
}
