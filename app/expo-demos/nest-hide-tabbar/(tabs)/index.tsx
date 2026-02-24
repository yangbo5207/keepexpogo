import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function HideTabbarHome() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-2 pt-4">
        <Text className="text-3xl">🏠</Text>
        <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">Home</Text>
      </View>
      <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">Navigate to screens without tab bar:</Text>
      <Pressable onPress={() => router.push('/expo-demos/nest-hide-tabbar/detail' as any)} className="flex-row items-center gap-3 rounded-xl bg-gray-50 p-4 active:bg-gray-100 dark:bg-gray-800">
        <Text className="text-lg">📄</Text>
        <View className="flex-1">
          <Text className="text-sm font-semibold text-gray-800 dark:text-gray-100">Detail Screen</Text>
          <Text className="text-xs text-gray-400">Outside (tabs) group — tab bar disappears</Text>
        </View>
        <Text className="text-gray-400">→</Text>
      </Pressable>
      <Pressable onPress={() => router.push('/expo-demos/nest-hide-tabbar/settings' as any)} className="flex-row items-center gap-3 rounded-xl bg-gray-50 p-4 active:bg-gray-100 dark:bg-gray-800">
        <Text className="text-lg">⚙️</Text>
        <View className="flex-1">
          <Text className="text-sm font-semibold text-gray-800 dark:text-gray-100">Settings Screen</Text>
          <Text className="text-xs text-gray-400">Outside (tabs) group — tab bar disappears</Text>
        </View>
        <Text className="text-gray-400">→</Text>
      </Pressable>
      <View className="rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
        <Text className="mb-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300">File structure</Text>
        <Text className="font-mono text-xs leading-5 text-indigo-600 dark:text-indigo-400">
          {'app/\n├── _layout.tsx       ← <Stack>\n├── (tabs)/\n│   ├── _layout.tsx   ← <Tabs>\n│   ├── index.tsx     ← Home (has tab bar)\n│   ├── search.tsx    ← Search (has tab bar)\n│   └── profile.tsx   ← Profile (has tab bar)\n├── detail.tsx        ← No tab bar\n└── settings.tsx      ← No tab bar'}
        </Text>
      </View>
    </ScrollView>
  );
}
