import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function CardModal() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center gap-4 bg-white p-6 dark:bg-[#151718]">
      <Text className="text-4xl">📋</Text>
      <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">Card Modal</Text>
      <Text className="text-center text-sm text-gray-500 dark:text-gray-400">
        presentation: 'modal'{'\n'}Shows as a card that slides up from the bottom
      </Text>
      <Pressable onPress={() => router.back()} className="mt-4 rounded-lg bg-indigo-500 px-6 py-3 active:bg-indigo-600">
        <Text className="font-semibold text-white">Dismiss</Text>
      </Pressable>
    </View>
  );
}
