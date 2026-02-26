import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ListRow, ListRowGroup } from '@/components/ui/list-row';

export default function NestHome() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <ListRowGroup>
        {[1, 2, 3].map((i) => (
          <ListRow
            key={i}
            title={`Post #${i}`}
            description="Tap to view detail (pushes onto root Stack, hides tab bar)"
            onPress={() => router.push('/learn/04-expo-router/04-nesting/nest-tabs-stack/detail' as any)}
            right={<Text className="text-cream-600">→</Text>}
          />
        ))}
      </ListRowGroup>
    </ScrollView>
  );
}
