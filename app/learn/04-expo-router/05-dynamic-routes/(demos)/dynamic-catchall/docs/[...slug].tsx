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
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <Stack.Screen options={{ title: doc.title }} />

      {/* Breadcrumb */}
      <View className="flex-row items-center gap-1 rounded-lg bg-cream-100 px-3 py-2 dark:bg-night-700">
        <Text className="text-xs text-cream-600">docs</Text>
        {slugArray.map((seg, i) => (
          <View key={i} className="flex-row items-center gap-1">
            <Text className="text-xs text-cream-500">/</Text>
            <Text className={`text-xs ${i === slugArray.length - 1 ? 'font-semibold text-primary-600 dark:text-primary-400' : 'text-cream-600'}`}>{seg}</Text>
          </View>
        ))}
      </View>

      <View className="rounded-xl bg-primary-50 p-4 dark:bg-primary-900/20">
        <Text className="mb-2 text-xs font-semibold text-primary-700 dark:text-primary-300">useLocalSearchParams()</Text>
        <View className="rounded-lg bg-cream-50 p-3 dark:bg-night-700">
          <Text className="font-mono text-xs text-primary-600 dark:text-primary-400">
            {'{ slug: '}{JSON.stringify(slugArray)}{' }'}
          </Text>
        </View>
      </View>

      <View className="items-center gap-3 pt-2">
        <Text className="text-4xl">{doc.emoji}</Text>
        <Text className="text-center text-sm text-cream-700 dark:text-night-200">{doc.content}</Text>
      </View>

      <View className="rounded-xl bg-cream-100 p-4 dark:bg-night-700">
        <Text className="mb-2 text-sm font-semibold text-cream-700 dark:text-night-200">Route mapping</Text>
        <View className="gap-1.5">
          <View className="flex-row justify-between">
            <Text className="text-xs text-cream-700 dark:text-night-200">File</Text>
            <Text className="font-mono text-xs text-primary-600 dark:text-primary-400">app/docs/[...slug].tsx</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-xs text-cream-700 dark:text-night-200">URL</Text>
            <Text className="font-mono text-xs text-primary-600 dark:text-primary-400">/docs/{path}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-xs text-cream-700 dark:text-night-200">Segments</Text>
            <Text className="font-mono text-xs text-primary-600 dark:text-primary-400">{slugArray.length} parts</Text>
          </View>
        </View>
      </View>

      <View className="rounded-xl bg-secondary-50 p-4 dark:bg-secondary-900/20">
        <Text className="mb-1 text-xs font-semibold text-secondary-700 dark:text-secondary-300">Expo Router code</Text>
        <Text className="font-mono text-xs leading-5 text-secondary-600 dark:text-secondary-400">
          {'// app/docs/[...slug].tsx\nimport { useLocalSearchParams } from "expo-router"\n\nexport default function Docs() {\n  const { slug } = useLocalSearchParams()\n  // slug = '}{JSON.stringify(slugArray)}{'\n  // Build breadcrumb from slug array\n}'}
        </Text>
      </View>
    </ScrollView>
  );
}
