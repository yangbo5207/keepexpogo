import { View, Text, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const items: Record<string, { title: string; author: string; emoji: string }> = {
  '101': { title: 'Introduction to Expo Router', author: 'Alice', emoji: '📘' },
  '202': { title: 'Building Navigation Systems', author: 'Bob', emoji: '🧭' },
  '303': { title: 'Advanced File-Based Routing', author: 'Carol', emoji: '📂' },
  '404': { title: 'Dynamic Routes Deep Dive', author: 'Dave', emoji: '🔀' },
};

export default function DynamicParamsDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = items[id] || { title: 'Unknown', author: 'Unknown', emoji: '❓' };

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
        <Text className="mb-2 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
          useLocalSearchParams()
        </Text>
        <View className="rounded-lg bg-white p-3 dark:bg-gray-800">
          <Text className="font-mono text-sm text-indigo-600 dark:text-indigo-400">
            {'{ id: "'}{id}{'" }'}
          </Text>
        </View>
      </View>

      <View className="items-center gap-3 pt-2">
        <Text className="text-4xl">{item.emoji}</Text>
        <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">{item.title}</Text>
        <Text className="text-sm text-gray-500 dark:text-gray-400">by {item.author}</Text>
      </View>

      <View className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
        <Text className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Route mapping</Text>
        <View className="gap-1.5">
          <View className="flex-row justify-between">
            <Text className="text-xs text-gray-500 dark:text-gray-400">File</Text>
            <Text className="font-mono text-xs text-indigo-600 dark:text-indigo-400">app/post/[id].tsx</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-xs text-gray-500 dark:text-gray-400">URL</Text>
            <Text className="font-mono text-xs text-indigo-600 dark:text-indigo-400">/post/{id}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-xs text-gray-500 dark:text-gray-400">Param</Text>
            <Text className="font-mono text-xs text-indigo-600 dark:text-indigo-400">id = "{id}"</Text>
          </View>
        </View>
      </View>

      <View className="rounded-xl bg-teal-50 p-4 dark:bg-teal-900/20">
        <Text className="mb-1 text-xs font-semibold text-teal-700 dark:text-teal-300">Expo Router code</Text>
        <Text className="font-mono text-xs leading-5 text-teal-600 dark:text-teal-400">
          {'// app/post/[id].tsx\nimport { useLocalSearchParams } from "expo-router"\n\nexport default function Post() {\n  const { id } = useLocalSearchParams()\n  // id = "'}{id}{'"\n}'}
        </Text>
      </View>
    </ScrollView>
  );
}
