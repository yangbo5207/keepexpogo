import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function NestProfile() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center gap-3 bg-white p-6 dark:bg-[#151718]">
      <Text className="text-3xl">👤</Text>
      <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">Profile</Text>
      <Pressable onPress={() => router.push('/expo-demos/nest-tabs-stack/modal' as any)} className="rounded-lg bg-indigo-500 px-5 py-2.5 active:bg-indigo-600">
        <Text className="font-semibold text-white">Open Modal</Text>
      </Pressable>
    </View>
  );
}
