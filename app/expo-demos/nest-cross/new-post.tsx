import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function CrossNewPost() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center gap-4 bg-white p-6 dark:bg-[#151718]">
      <Text className="text-4xl">📝</Text>
      <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">New Post</Text>
      <Text className="text-center text-sm text-gray-500 dark:text-gray-400">Modal presented from Root Stack (above tabs)</Text>
      <Pressable onPress={() => router.back()} className="rounded-lg bg-gray-200 px-6 py-3 active:bg-gray-300 dark:bg-gray-700">
        <Text className="font-semibold text-gray-800 dark:text-gray-100">Dismiss</Text>
      </Pressable>
    </View>
  );
}
