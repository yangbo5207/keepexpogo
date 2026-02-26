import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ListRow, ListRowGroup } from '@/components/ui/list-row';

export default function ModalPresentIndex() {
  const router = useRouter();

  const modals = [
    { key: 'card-modal', label: 'Card Modal', desc: "presentation: 'modal'", emoji: '📋', color: 'bg-primary-50 dark:bg-primary-900/20' },
    { key: 'full-modal', label: 'Full Screen Modal', desc: "presentation: 'fullScreenModal'", emoji: '📱', color: 'bg-secondary-50 dark:bg-secondary-900/20' },
    { key: 'form-sheet', label: 'Form Sheet', desc: "presentation: 'formSheet'", emoji: '📝', color: 'bg-warning-50 dark:bg-warning-900/20' },
  ];

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <Text className="text-sm text-cream-700 dark:text-night-200">
        Different modal presentation styles available in Stack navigator.
      </Text>
      <ListRowGroup>
        {modals.map((m) => (
          <ListRow
            key={m.key}
            title={m.label}
            description={m.desc}
            onPress={() => router.push(`/learn/04-expo-router/07-modals/modal-present/${m.key}` as any)}
            left={(
              <View className={`h-10 w-10 items-center justify-center rounded-xl ${m.color}`}>
                <Text className="text-lg">{m.emoji}</Text>
              </View>
            )}
            right={<Text className="text-cream-600">→</Text>}
          />
        ))}
      </ListRowGroup>
      <View className="rounded-xl bg-secondary-50 p-4 dark:bg-secondary-900/20">
        <Text className="mb-1 text-xs font-semibold text-secondary-700 dark:text-secondary-300">Expo Router code</Text>
        <Text className="font-mono text-xs leading-5 text-secondary-600 dark:text-secondary-400">
          {"// app/_layout.tsx\n<Stack.Screen\n  name=\"card-modal\"\n  options={{\n    presentation: 'modal',\n  }}\n/>\n<Stack.Screen\n  name=\"full-modal\"\n  options={{\n    presentation: 'fullScreenModal',\n  }}\n/>"}
        </Text>
      </View>
    </ScrollView>
  );
}
