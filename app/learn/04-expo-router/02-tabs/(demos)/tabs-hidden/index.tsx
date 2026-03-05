import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ListRow, ListRowGroup } from '@/components/ui/list-row';

export default function TabsHiddenHome() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-2 pt-4">
        <Text className="text-sm text-cream-700 dark:text-night-200">Active visible tab</Text>
      </View>

      <View className="gap-2 pt-2">
        <Text className="text-sm font-semibold text-cream-700 dark:text-night-200">Hidden routes (not in tab bar)</Text>
        <Text className="text-xs text-cream-700 dark:text-night-200">
          These routes use href: null to hide from the tab bar, but remain navigable.
        </Text>
      </View>

      <ListRowGroup>
        {[
          { key: 'notifications', label: 'Notifications', icon: '🔔', desc: 'href: null — hidden from tab bar' },
          { key: 'admin', label: 'Admin Panel', icon: '🛡️', desc: 'href: null — hidden from tab bar' },
        ].map((route) => (
          <ListRow
            key={route.key}
            title={route.label}
            description={route.desc}
            onPress={() => router.push(`/learn/04-expo-router/02-tabs/tabs-hidden/${route.key}` as any)}
            left={(
              <View className="h-10 w-10 items-center justify-center rounded-xs bg-warning-100 dark:bg-warning-900/30">
                <Text className="text-lg">{route.icon}</Text>
              </View>
            )}
            right={<Text className="text-cream-600">→</Text>}
          />
        ))}
      </ListRowGroup>

      <View className="rounded-xs bg-primary-50 p-4 dark:bg-primary-900/20">
        <Text className="mb-1 text-xs font-semibold text-primary-700 dark:text-primary-300">File structure</Text>
        <Text className="font-mono text-xs leading-5 text-primary-600 dark:text-primary-400">
          {'app/(tabs)/\n├── _layout.tsx\n├── index.tsx        ← Home (visible)\n├── search.tsx       ← Search (visible)\n├── settings.tsx     ← Settings (visible)\n├── notifications.tsx ← href: null (hidden)\n└── admin.tsx        ← href: null (hidden)'}
        </Text>
      </View>
    </ScrollView>
  );
}
