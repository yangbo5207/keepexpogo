import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function CrossCreateStory() {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.back()} className="flex-1 justify-end bg-black/60 p-4 pb-8">
      <View className="rounded-2xl bg-white p-6 dark:bg-gray-800">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">Create Story</Text>
          <Pressable onPress={() => router.back()}>
            <Text className="text-lg text-gray-400">✕</Text>
          </Pressable>
        </View>
        <Text className="mt-2 text-sm text-gray-500 dark:text-gray-400">Transparent modal from Root Stack</Text>
        <View className="mt-4 h-32 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-700">
          <Text className="text-4xl">📸</Text>
        </View>
        <Pressable onPress={() => router.back()} className="mt-4 items-center rounded-lg bg-emerald-500 py-3 active:bg-emerald-600">
          <Text className="font-semibold text-white">Post Story</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}
