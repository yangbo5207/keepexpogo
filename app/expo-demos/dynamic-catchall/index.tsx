import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const docs = [
  { path: 'getting-started', title: 'Getting Started', emoji: '🚀' },
  { path: 'api/overview', title: 'API Overview', emoji: '📡' },
  { path: 'api/v2/endpoints', title: 'v2 Endpoints', emoji: '🔗' },
  { path: 'api/v2/auth', title: 'Authentication', emoji: '🔐' },
  { path: 'guides/deployment/docker', title: 'Docker Deploy', emoji: '🐳' },
  { path: 'guides/deployment/vercel', title: 'Vercel Deploy', emoji: '▲' },
];

const groups: Record<string, typeof docs> = {};
for (const doc of docs) {
  const key = doc.path.split('/')[0];
  if (!groups[key]) groups[key] = [];
  groups[key].push(doc);
}

export default function DynamicCatchallIndex() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <Text className="text-sm text-gray-500 dark:text-gray-400">
        Tap a doc page — the [...slug] catch-all route captures all path segments.
      </Text>
      {Object.entries(groups).map(([group, items]) => (
        <View key={group} className="gap-2">
          <Text className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">/{group}</Text>
          {items.map((doc) => (
            <Pressable
              key={doc.path}
              onPress={() => router.push(`/expo-demos/dynamic-catchall/docs/${doc.path}` as any)}
              className="flex-row items-center gap-3 rounded-xl bg-gray-50 p-3.5 active:bg-gray-100 dark:bg-gray-800"
            >
              <Text className="text-lg">{doc.emoji}</Text>
              <View className="flex-1">
                <Text className="text-sm font-semibold text-gray-800 dark:text-gray-100">{doc.title}</Text>
                <Text className="font-mono text-[10px] text-gray-400">/docs/{doc.path}</Text>
              </View>
              <Text className="text-gray-400">→</Text>
            </Pressable>
          ))}
        </View>
      ))}
      <View className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
        <Text className="mb-1 text-xs font-semibold text-gray-700 dark:text-gray-300">File structure</Text>
        <Text className="font-mono text-xs leading-5 text-gray-500 dark:text-gray-400">
          {'app/docs/\n└── [...slug].tsx\n\nMatches:\n/docs/getting-started\n/docs/api/overview\n/docs/api/v2/endpoints\n/docs/guides/deployment/docker\n... any depth!'}
        </Text>
      </View>
    </ScrollView>
  );
}
