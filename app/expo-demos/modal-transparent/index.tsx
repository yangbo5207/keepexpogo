import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const overlays = [
  { key: 'alert', title: 'Confirm Delete', emoji: '⚠️', desc: 'Alert dialog overlay' },
  { key: 'action-sheet', title: 'Share Post', emoji: '📤', desc: 'Action sheet overlay' },
  { key: 'bottom-drawer', title: 'Quick Settings', emoji: '⚙️', desc: 'Bottom drawer overlay' },
];

export default function ModalTransparentIndex() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <Text className="text-sm text-gray-500 dark:text-gray-400">
        Transparent modals show the previous screen behind a semi-transparent overlay. Tap the background to dismiss.
      </Text>
      {overlays.map((o) => (
        <Pressable key={o.key} onPress={() => router.push(`/expo-demos/modal-transparent/${o.key}` as any)} className="flex-row items-center gap-3 rounded-xl bg-gray-50 p-4 active:bg-gray-100 dark:bg-gray-800">
          <Text className="text-2xl">{o.emoji}</Text>
          <View className="flex-1">
            <Text className="text-sm font-semibold text-gray-800 dark:text-gray-100">{o.title}</Text>
            <Text className="text-xs text-gray-400">transparentModal</Text>
          </View>
          <Text className="text-gray-400">→</Text>
        </Pressable>
      ))}
      <View className="rounded-xl bg-teal-50 p-4 dark:bg-teal-900/20">
        <Text className="mb-1 text-xs font-semibold text-teal-700 dark:text-teal-300">Expo Router code</Text>
        <Text className="font-mono text-xs leading-5 text-teal-600 dark:text-teal-400">
          {"// app/_layout.tsx\n<Stack.Screen\n  name=\"confirm-delete\"\n  options={{\n    presentation: 'transparentModal',\n    animation: 'fade',\n    headerShown: false,\n  }}\n/>"}
        </Text>
      </View>
    </ScrollView>
  );
}
