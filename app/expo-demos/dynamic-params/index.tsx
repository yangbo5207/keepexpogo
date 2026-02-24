import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const items = [
  { id: '101', title: 'Introduction to Expo Router', author: 'Alice', emoji: '📘' },
  { id: '202', title: 'Building Navigation Systems', author: 'Bob', emoji: '🧭' },
  { id: '303', title: 'Advanced File-Based Routing', author: 'Carol', emoji: '📂' },
  { id: '404', title: 'Dynamic Routes Deep Dive', author: 'Dave', emoji: '🔀' },
];

export default function DynamicParamsList() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-3 p-4 pb-8">
      <Text className="text-sm text-gray-500 dark:text-gray-400">
        Tap a post to navigate with dynamic [id] parameter
      </Text>
      {items.map((item) => (
        <Pressable
          key={item.id}
          onPress={() => router.push(`/expo-demos/dynamic-params/${item.id}` as any)}
          className="flex-row items-center gap-3 rounded-xl bg-gray-50 p-4 active:bg-gray-100 dark:bg-gray-800"
        >
          <View className="h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/30">
            <Text className="text-xl">{item.emoji}</Text>
          </View>
          <View className="flex-1">
            <Text className="text-sm font-semibold text-gray-800 dark:text-gray-100">{item.title}</Text>
            <Text className="text-xs text-gray-400 dark:text-gray-500">ID: {item.id} · {item.author}</Text>
          </View>
          <Text className="text-gray-400">→</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
