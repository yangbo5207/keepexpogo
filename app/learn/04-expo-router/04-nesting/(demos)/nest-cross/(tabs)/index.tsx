import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ListRow, ListRowGroup } from '@/components/ui/list-row';

export default function CrossHome() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <Text className="text-sm text-cream-700 dark:text-night-200">
        Cross-navigator jumps: tap buttons below to navigate to screens in the Root Stack (outside tabs).
      </Text>
      <ListRowGroup>
        <ListRow
          title="New Post (Modal)"
          description="presentation: 'modal'"
          onPress={() => router.push('/learn/04-expo-router/04-nesting/nest-cross/new-post' as any)}
          left={<Text className="text-2xl">📝</Text>}
          right={<Text className="text-cream-600">→</Text>}
        />
        <ListRow
          title="Notifications (Push)"
          description="Full screen, no tab bar"
          onPress={() => router.push('/learn/04-expo-router/04-nesting/nest-cross/notifications' as any)}
          left={<Text className="text-2xl">🔔</Text>}
          right={<Text className="text-cream-600">→</Text>}
        />
        <ListRow
          title="Create Story (Transparent Modal)"
          description="presentation: 'transparentModal'"
          onPress={() => router.push('/learn/04-expo-router/04-nesting/nest-cross/create-story' as any)}
          left={<Text className="text-2xl">📸</Text>}
          right={<Text className="text-cream-600">→</Text>}
        />
      </ListRowGroup>
      <View className="rounded-xs bg-cream-100 p-4 dark:bg-night-700">
        <Text className="mb-1 text-xs font-semibold text-cream-700 dark:text-night-200">File structure</Text>
        <Text className="font-mono text-xs leading-5 text-cream-700 dark:text-night-200">
          {'app/\n├── _layout.tsx       ← Root Stack\n├── (tabs)/\n│   ├── _layout.tsx   ← Tabs\n│   ├── index.tsx     ← Home tab\n│   ├── messages.tsx\n│   └── profile.tsx\n├── new-post.tsx      ← Modal\n├── notifications.tsx ← Push screen\n└── create-story.tsx  ← Transparent modal'}
        </Text>
      </View>
    </ScrollView>
  );
}
