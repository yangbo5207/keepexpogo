import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ListRow, ListRowGroup } from '@/components/ui/list-row';

const items = [
  { id: '101', title: 'Introduction to Expo Router', author: 'Alice', emoji: '📘' },
  { id: '202', title: 'Building Navigation Systems', author: 'Bob', emoji: '🧭' },
  { id: '303', title: 'Advanced File-Based Routing', author: 'Carol', emoji: '📂' },
  { id: '404', title: 'Dynamic Routes Deep Dive', author: 'Dave', emoji: '🔀' },
];

export default function DynamicParamsList() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-3 p-4 pb-8">
      <Text className="text-sm text-cream-700 dark:text-night-200">
        Tap a post to navigate with dynamic [id] parameter
      </Text>
      <ListRowGroup>
        {items.map((item) => (
          <ListRow
            key={item.id}
            title={item.title}
            description={`ID: ${item.id} · ${item.author}`}
            onPress={() => router.push(`/learn/04-expo-router/05-dynamic-routes/dynamic-params/${item.id}` as any)}
            left={(
              <View className="h-11 w-11 items-center justify-center rounded-xs bg-primary-100 dark:bg-primary-900/30">
                <Text className="text-xl">{item.emoji}</Text>
              </View>
            )}
            right={<Text className="text-cream-600">→</Text>}
          />
        ))}
      </ListRowGroup>
    </ScrollView>
  );
}
