import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function NavReplaceHome() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="items-center gap-4 p-6 pb-8">
      <Text className="text-4xl">🏠</Text>
      <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">Home Screen</Text>
      <Text className="text-center text-sm text-gray-500 dark:text-gray-400">
        Use push to navigate deeper into the app.
      </Text>
      <Pressable onPress={() => router.push('/expo-demos/nav-replace/detail' as any)} className="w-full items-center rounded-xl bg-indigo-500 py-3 active:bg-indigo-600">
        <Text className="font-semibold text-white">router.push('/detail')</Text>
      </Pressable>
    </ScrollView>
  );
}
