import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function ModalPresentIndex() {
  const router = useRouter();

  const modals = [
    { key: 'card-modal', label: 'Card Modal', desc: "presentation: 'modal'", emoji: '📋', color: 'bg-indigo-50 dark:bg-indigo-900/20' },
    { key: 'full-modal', label: 'Full Screen Modal', desc: "presentation: 'fullScreenModal'", emoji: '📱', color: 'bg-teal-50 dark:bg-teal-900/20' },
    { key: 'form-sheet', label: 'Form Sheet', desc: "presentation: 'formSheet'", emoji: '📝', color: 'bg-amber-50 dark:bg-amber-900/20' },
  ];

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <Text className="text-sm text-gray-500 dark:text-gray-400">
        Different modal presentation styles available in Stack navigator.
      </Text>
      {modals.map((m) => (
        <Pressable key={m.key} onPress={() => router.push(`/expo-demos/modal-present/${m.key}` as any)} className={`flex-row items-center gap-3 rounded-xl p-4 active:opacity-80 ${m.color}`}>
          <Text className="text-2xl">{m.emoji}</Text>
          <View className="flex-1">
            <Text className="text-sm font-semibold text-gray-800 dark:text-gray-100">{m.label}</Text>
            <Text className="font-mono text-xs text-gray-500 dark:text-gray-400">{m.desc}</Text>
          </View>
          <Text className="text-gray-400">→</Text>
        </Pressable>
      ))}
      <View className="rounded-xl bg-teal-50 p-4 dark:bg-teal-900/20">
        <Text className="mb-1 text-xs font-semibold text-teal-700 dark:text-teal-300">Expo Router code</Text>
        <Text className="font-mono text-xs leading-5 text-teal-600 dark:text-teal-400">
          {"// app/_layout.tsx\n<Stack.Screen\n  name=\"card-modal\"\n  options={{\n    presentation: 'modal',\n  }}\n/>\n<Stack.Screen\n  name=\"full-modal\"\n  options={{\n    presentation: 'fullScreenModal',\n  }}\n/>"}
        </Text>
      </View>
    </ScrollView>
  );
}
