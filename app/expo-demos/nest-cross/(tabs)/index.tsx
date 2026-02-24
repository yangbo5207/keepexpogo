import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function CrossHome() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">Home</Text>
      <Text className="text-sm text-gray-500 dark:text-gray-400">
        Cross-navigator jumps: tap buttons below to navigate to screens in the Root Stack (outside tabs).
      </Text>
      <Pressable onPress={() => router.push('/expo-demos/nest-cross/new-post' as any)} className="flex-row items-center gap-3 rounded-xl bg-indigo-50 p-4 active:bg-indigo-100 dark:bg-indigo-900/20">
        <Text className="text-2xl">📝</Text>
        <View className="flex-1">
          <Text className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">New Post (Modal)</Text>
          <Text className="text-xs text-indigo-500 dark:text-indigo-400">presentation: 'modal'</Text>
        </View>
        <Text className="text-indigo-400">→</Text>
      </Pressable>
      <Pressable onPress={() => router.push('/expo-demos/nest-cross/notifications' as any)} className="flex-row items-center gap-3 rounded-xl bg-amber-50 p-4 active:bg-amber-100 dark:bg-amber-900/20">
        <Text className="text-2xl">🔔</Text>
        <View className="flex-1">
          <Text className="text-sm font-semibold text-amber-700 dark:text-amber-300">Notifications (Push)</Text>
          <Text className="text-xs text-amber-500 dark:text-amber-400">Full screen, no tab bar</Text>
        </View>
        <Text className="text-amber-400">→</Text>
      </Pressable>
      <Pressable onPress={() => router.push('/expo-demos/nest-cross/create-story' as any)} className="flex-row items-center gap-3 rounded-xl bg-emerald-50 p-4 active:bg-emerald-100 dark:bg-emerald-900/20">
        <Text className="text-2xl">📸</Text>
        <View className="flex-1">
          <Text className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Create Story (Transparent Modal)</Text>
          <Text className="text-xs text-emerald-500 dark:text-emerald-400">presentation: 'transparentModal'</Text>
        </View>
        <Text className="text-emerald-400">→</Text>
      </Pressable>
      <View className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
        <Text className="mb-1 text-xs font-semibold text-gray-700 dark:text-gray-300">File structure</Text>
        <Text className="font-mono text-xs leading-5 text-gray-500 dark:text-gray-400">
          {'app/\n├── _layout.tsx       ← Root Stack\n├── (tabs)/\n│   ├── _layout.tsx   ← Tabs\n│   ├── index.tsx     ← Home tab\n│   ├── messages.tsx\n│   └── profile.tsx\n├── new-post.tsx      ← Modal\n├── notifications.tsx ← Push screen\n└── create-story.tsx  ← Transparent modal'}
        </Text>
      </View>
    </ScrollView>
  );
}
