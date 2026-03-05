import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ListRow, ListRowGroup } from '@/components/ui/list-row';

export default function HideTabbarHome() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-2 pt-4">
        <Text className="text-3xl">🏠</Text>
      </View>
      <Text className="text-sm font-semibold text-cream-700 dark:text-night-200">Navigate to screens without tab bar:</Text>
      <ListRowGroup>
        <ListRow
          title="Detail Screen"
          description="Outside (tabs) group — tab bar disappears"
          onPress={() => router.push('/learn/04-expo-router/04-nesting/nest-hide-tabbar/detail' as any)}
          left={<Text className="text-lg">📄</Text>}
          right={<Text className="text-cream-600">→</Text>}
        />
        <ListRow
          title="Settings Screen"
          description="Outside (tabs) group — tab bar disappears"
          onPress={() => router.push('/learn/04-expo-router/04-nesting/nest-hide-tabbar/settings' as any)}
          left={<Text className="text-lg">⚙️</Text>}
          right={<Text className="text-cream-600">→</Text>}
        />
      </ListRowGroup>
      <View className="rounded-xs bg-primary-50 p-4 dark:bg-primary-900/20">
        <Text className="mb-1 text-xs font-semibold text-primary-700 dark:text-primary-300">File structure</Text>
        <Text className="font-mono text-xs leading-5 text-primary-600 dark:text-primary-400">
          {'app/\n├── _layout.tsx       ← <Stack>\n├── (tabs)/\n│   ├── _layout.tsx   ← <Tabs>\n│   ├── index.tsx     ← Home (has tab bar)\n│   ├── search.tsx    ← Search (has tab bar)\n│   └── profile.tsx   ← Profile (has tab bar)\n├── detail.tsx        ← No tab bar\n└── settings.tsx      ← No tab bar'}
        </Text>
      </View>
    </ScrollView>
  );
}
