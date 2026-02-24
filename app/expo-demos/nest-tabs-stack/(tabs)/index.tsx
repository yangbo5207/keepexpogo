import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function NestHome() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">Home Feed</Text>
      {[1, 2, 3].map((i) => (
        <Pressable
          key={i}
          onPress={() => router.push('/expo-demos/nest-tabs-stack/detail' as any)}
          className="rounded-xl bg-gray-50 p-4 active:bg-gray-100 dark:bg-gray-800"
        >
          <Text className="text-sm font-semibold text-gray-800 dark:text-gray-100">Post #{i}</Text>
          <Text className="text-xs text-gray-400">Tap to view detail (pushes onto root Stack, hides tab bar)</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
