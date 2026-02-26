import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ListRow, ListRowGroup } from '@/components/ui/list-row';

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
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <Text className="text-sm text-cream-700 dark:text-night-200">
        Tap a doc page — the [...slug] catch-all route captures all path segments.
      </Text>
      {Object.entries(groups).map(([group, items]) => (
        <View key={group} className="gap-2">
          <Text className="text-xs font-bold uppercase tracking-wider text-cream-600 dark:text-cream-700">/{group}</Text>
          <ListRowGroup>
            {items.map((doc) => (
              <ListRow
                key={doc.path}
                title={doc.title}
                description={`/docs/${doc.path}`}
                onPress={() => router.push(`/learn/04-expo-router/05-dynamic-routes/dynamic-catchall/docs/${doc.path}` as any)}
                left={<Text className="text-lg">{doc.emoji}</Text>}
                right={<Text className="text-cream-600">→</Text>}
              />
            ))}
          </ListRowGroup>
        </View>
      ))}
      <View className="rounded-xl bg-cream-100 p-4 dark:bg-night-700">
        <Text className="mb-1 text-xs font-semibold text-cream-700 dark:text-night-200">File structure</Text>
        <Text className="font-mono text-xs leading-5 text-cream-700 dark:text-night-200">
          {'app/docs/\n└── [...slug].tsx\n\nMatches:\n/docs/getting-started\n/docs/api/overview\n/docs/api/v2/endpoints\n/docs/guides/deployment/docker\n... any depth!'}
        </Text>
      </View>
    </ScrollView>
  );
}
