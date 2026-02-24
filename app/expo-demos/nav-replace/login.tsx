import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function NavReplaceLogin() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="items-center gap-4 p-6 pb-8">
      <Text className="text-4xl">🔑</Text>
      <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">Login Screen</Text>
      <Text className="text-center text-sm text-gray-500 dark:text-gray-400">
        After login, use replace to go to Home (user can't go back to Login).
      </Text>
      <Pressable onPress={() => router.replace('/expo-demos/nav-replace/home' as any)} className="w-full items-center rounded-xl bg-emerald-500 py-3 active:bg-emerald-600">
        <Text className="font-semibold text-white">router.replace('/home')</Text>
      </Pressable>
    </ScrollView>
  );
}
