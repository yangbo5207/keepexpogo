import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/button';
import { ListRow, ListRowGroup } from '@/components/ui/list-row';

const actions = [
  { label: 'Copy Link', emoji: '🔗' },
  { label: 'Share to Twitter', emoji: '🐦' },
  { label: 'Send via Message', emoji: '💬' },
  { label: 'Save to Bookmarks', emoji: '🔖' },
];

export default function TransparentActionSheet() {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.back()} className="flex-1 justify-end bg-black/50">
      <View className="mx-3 mb-3 gap-2">
        <View className="overflow-hidden rounded-2xl bg-cream-50 dark:bg-night-700">
          <View className="items-center border-b border-cream-200 px-4 py-3 dark:border-night-500">
            <Text className="text-xs text-cream-600">Share Post</Text>
          </View>
          <ListRowGroup className="border-0 bg-cream-50 dark:bg-night-700">
            {actions.map((action) => (
              <ListRow
                key={action.label}
                title={action.label}
                onPress={() => router.back()}
                className="px-4 py-3.5"
                radius={0}
                left={<Text className="text-base">{action.emoji}</Text>}
                titleClassName="text-sm font-medium"
              />
            ))}
          </ListRowGroup>
        </View>
        <Button label="Cancel" variant="outline" onPress={() => router.back()} />
      </View>
    </Pressable>
  );
}
