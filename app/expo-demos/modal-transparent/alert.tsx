import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function TransparentAlert() {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.back()} className="flex-1 items-center justify-center bg-black/50">
      <Pressable onPress={() => {}} className="mx-8 w-72 rounded-2xl bg-white p-6 dark:bg-gray-800">
        <View className="items-center gap-3">
          <Text className="text-3xl">⚠️</Text>
          <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">Confirm Delete</Text>
          <Text className="text-center text-sm text-gray-500 dark:text-gray-400">Are you sure you want to delete this item? This action cannot be undone.</Text>
        </View>
        <View className="mt-5 gap-2">
          <Pressable onPress={() => router.back()} className="items-center rounded-xl bg-red-500 py-3 active:bg-red-600">
            <Text className="font-semibold text-white">Delete</Text>
          </Pressable>
          <Pressable onPress={() => router.back()} className="items-center rounded-xl bg-gray-100 py-3 active:bg-gray-200 dark:bg-gray-700">
            <Text className="font-semibold text-gray-700 dark:text-gray-300">Cancel</Text>
          </Pressable>
        </View>
      </Pressable>
    </Pressable>
  );
}
