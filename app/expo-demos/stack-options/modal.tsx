import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function ScreenOptionsModal() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-black/50 p-6">
      <View className="w-full rounded-2xl bg-white p-6 dark:bg-gray-800">
        <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">
          Quick View Modal
        </Text>
        <Text className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          This screen overrides screenOptions with its own{'\n'}
          <Text className="font-mono text-indigo-600 dark:text-indigo-400">
            options={'{{ headerShown: false }}'}
          </Text>
        </Text>
        <Pressable
          onPress={() => router.back()}
          className="mt-4 items-center rounded-lg bg-gray-200 py-3 active:bg-gray-300 dark:bg-gray-700"
        >
          <Text className="font-semibold text-gray-800 dark:text-gray-100">Dismiss</Text>
        </Pressable>
      </View>
    </View>
  );
}
