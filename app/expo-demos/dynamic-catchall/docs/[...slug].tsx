import { View, Text, ScrollView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';

const docsMap: Record<string, { title: string; emoji: string; content: string }> = {
  'getting-started': { title: 'Getting Started', emoji: '🚀', content: 'Quick start guide for the project.' },
  'api/overview': { title: 'API Overview', emoji: '📡', content: 'Introduction to the REST API.' },
  'api/v2/endpoints': { title: 'v2 Endpoints', emoji: '🔗', content: 'All available v2 API endpoints.' },
  'api/v2/auth': { title: 'Authentication', emoji: '🔐', content: 'OAuth2 and API key authentication.' },
  'guides/deployment/docker': { title: 'Docker Deploy', emoji: '🐳', content: 'Deploy with Docker containers.' },
  'guides/deployment/vercel': { title: 'Vercel Deploy', emoji: '▲', content: 'Deploy to Vercel in one click.' },
};

export default function CatchAllDoc() {
  const { slug } = useLocalSearchParams<{ slug: string[] }>();
  const slugArray = Array.isArray(slug) ? slug : slug ? [slug] : [];
  const path = slugArray.join('/');
  const doc = docsMap[path] || { title: 'Unknown', emoji: '❓', content: 'Page not found.' };

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <Stack.Screen options={{ title: doc.title }} />

      {/* Breadcrumb */}
      <View className="flex-row items-center gap-1 rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-800">
        <Text className="text-xs text-gray-400">docs</Text>
        {slugArray.map((seg, i) => (
          <View key={i} className="flex-row items-center gap-1">
            <Text className="text-xs text-gray-300">/</Text>
            <Text className={`text-xs ${i === slugArray.length - 1 ? 'font-semibold text-indigo-600 dark:text-indigo-400' : 'text-gray-400'}`}>{seg}</Text>
          </View>
        ))}
      </View>

      <View className="rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
        <Text className="mb-2 text-xs font-semibold text-indigo-700 dark:text-indigo-300">useLocalSearchParams()</Text>
        <View className="rounded-lg bg-white p-3 dark:bg-gray-800">
          <Text className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
            {'{ slug: '}{JSON.stringify(slugArray)}{' }'}
          </Text>
        </View>
      </View>

      <View className="items-center gap-3 pt-2">
        <Text className="text-4xl">{doc.emoji}</Text>
        <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">{doc.title}</Text>
        <Text className="text-center text-sm text-gray-500 dark:text-gray-400">{doc.content}</Text>
      </View>

      <View className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
        <Text className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Route mapping</Text>
        <View className="gap-1.5">
          <View className="flex-row justify-between">
            <Text className="text-xs text-gray-500 dark:text-gray-400">File</Text>
            <Text className="font-mono text-xs text-indigo-600 dark:text-indigo-400">app/docs/[...slug].tsx</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-xs text-gray-500 dark:text-gray-400">URL</Text>
            <Text className="font-mono text-xs text-indigo-600 dark:text-indigo-400">/docs/{path}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-xs text-gray-500 dark:text-gray-400">Segments</Text>
            <Text className="font-mono text-xs text-indigo-600 dark:text-indigo-400">{slugArray.length} parts</Text>
          </View>
        </View>
      </View>

      <View className="rounded-xl bg-teal-50 p-4 dark:bg-teal-900/20">
        <Text className="mb-1 text-xs font-semibold text-teal-700 dark:text-teal-300">Expo Router code</Text>
        <Text className="font-mono text-xs leading-5 text-teal-600 dark:text-teal-400">
          {'// app/docs/[...slug].tsx\nimport { useLocalSearchParams } from "expo-router"\n\nexport default function Docs() {\n  const { slug } = useLocalSearchParams()\n  // slug = '}{JSON.stringify(slugArray)}{'\n  // Build breadcrumb from slug array\n}'}
        </Text>
      </View>
    </ScrollView>
  );
}
