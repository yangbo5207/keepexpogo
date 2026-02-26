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
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="rounded-xl bg-primary-50 p-4 dark:bg-primary-900/20">
        <Text className="mb-2 text-xs font-semibold text-primary-700 dark:text-primary-300">
          useLocalSearchParams()
        </Text>
        <View className="rounded-lg bg-cream-50 p-3 dark:bg-night-700">
          <Text className="font-mono text-sm text-primary-600 dark:text-primary-400">
            {'{ id: "'}{id}{'" }'}
          </Text>
        </View>
      </View>

      <View className="items-center gap-3 pt-2">
        <Text className="text-4xl">{item.emoji}</Text>
        <Text className="text-sm text-cream-700 dark:text-night-200">by {item.author}</Text>
      </View>

      <View className="rounded-xl bg-cream-100 p-4 dark:bg-night-700">
        <Text className="mb-2 text-sm font-semibold text-cream-700 dark:text-night-200">Route mapping</Text>
        <View className="gap-1.5">
          <View className="flex-row justify-between">
            <Text className="text-xs text-cream-700 dark:text-night-200">File</Text>
            <Text className="font-mono text-xs text-primary-600 dark:text-primary-400">app/post/[id].tsx</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-xs text-cream-700 dark:text-night-200">URL</Text>
            <Text className="font-mono text-xs text-primary-600 dark:text-primary-400">/post/{id}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-xs text-cream-700 dark:text-night-200">Param</Text>
            <Text className="font-mono text-xs text-primary-600 dark:text-primary-400">id = "{id}"</Text>
          </View>
        </View>
      </View>

      <View className="rounded-xl bg-secondary-50 p-4 dark:bg-secondary-900/20">
        <Text className="mb-1 text-xs font-semibold text-secondary-700 dark:text-secondary-300">Expo Router code</Text>
        <Text className="font-mono text-xs leading-5 text-secondary-600 dark:text-secondary-400">
          {'// app/post/[id].tsx\nimport { useLocalSearchParams } from "expo-router"\n\nexport default function Post() {\n  const { id } = useLocalSearchParams()\n  // id = "'}{id}{'"\n}'}
        </Text>
      </View>
    </ScrollView>
  );
}
