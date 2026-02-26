import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ListRow, ListRowGroup } from '@/components/ui/list-row';

const overlays = [
  { key: 'alert', title: 'Confirm Delete', emoji: '⚠️', desc: 'Alert dialog overlay' },
  { key: 'action-sheet', title: 'Share Post', emoji: '📤', desc: 'Action sheet overlay' },
  { key: 'bottom-drawer', title: 'Quick Settings', emoji: '⚙️', desc: 'Bottom drawer overlay' },
];

export default function ModalTransparentIndex() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <Text className="text-sm text-cream-700 dark:text-night-200">
        Transparent modals show the previous screen behind a semi-transparent overlay. Tap the background to dismiss.
      </Text>
      <ListRowGroup>
        {overlays.map((o) => (
          <ListRow
            key={o.key}
            title={o.title}
            description="transparentModal"
            onPress={() => router.push(`/learn/04-expo-router/07-modals/modal-transparent/${o.key}` as any)}
            left={<Text className="text-2xl">{o.emoji}</Text>}
            right={<Text className="text-cream-600">→</Text>}
          />
        ))}
      </ListRowGroup>
      <View className="rounded-xl bg-secondary-50 p-4 dark:bg-secondary-900/20">
        <Text className="mb-1 text-xs font-semibold text-secondary-700 dark:text-secondary-300">Expo Router code</Text>
        <Text className="font-mono text-xs leading-5 text-secondary-600 dark:text-secondary-400">
          {"// app/_layout.tsx\n<Stack.Screen\n  name=\"confirm-delete\"\n  options={{\n    presentation: 'transparentModal',\n    animation: 'fade',\n    headerShown: false,\n  }}\n/>"}
        </Text>
      </View>
    </ScrollView>
  );
}
