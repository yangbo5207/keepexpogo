import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function TabsHiddenHome() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-2 pt-4">
        <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">Home</Text>
        <Text className="text-sm text-gray-500 dark:text-gray-400">Active visible tab</Text>
      </View>

      <View className="gap-2 pt-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">Hidden routes (not in tab bar)</Text>
        <Text className="text-xs text-gray-500 dark:text-gray-400">
          These routes use href: null to hide from the tab bar, but remain navigable.
        </Text>
      </View>

      {[
        { key: 'notifications', label: 'Notifications', icon: '🔔', desc: 'href: null — hidden from tab bar' },
        { key: 'admin', label: 'Admin Panel', icon: '🛡️', desc: 'href: null — hidden from tab bar' },
      ].map((route) => (
        <Pressable
          key={route.key}
          onPress={() => router.push(`/expo-demos/tabs-hidden/${route.key}` as any)}
          className="flex-row items-center gap-3 rounded-xl bg-gray-50 p-4 active:bg-gray-100 dark:bg-gray-800 dark:active:bg-gray-750"
        >
          <View className="h-10 w-10 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900/30">
            <Text className="text-lg">{route.icon}</Text>
          </View>
          <View className="flex-1">
            <Text className="text-sm font-semibold text-gray-800 dark:text-gray-100">{route.label}</Text>
            <Text className="text-xs text-gray-400 dark:text-gray-500">{route.desc}</Text>
          </View>
          <Text className="text-gray-400">→</Text>
        </Pressable>
      ))}

      <View className="rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
        <Text className="mb-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300">File structure</Text>
        <Text className="font-mono text-xs leading-5 text-indigo-600 dark:text-indigo-400">
          {'app/(tabs)/\n├── _layout.tsx\n├── index.tsx        ← Home (visible)\n├── search.tsx       ← Search (visible)\n├── settings.tsx     ← Settings (visible)\n├── notifications.tsx ← href: null (hidden)\n└── admin.tsx        ← href: null (hidden)'}
        </Text>
      </View>
    </ScrollView>
  );
}
