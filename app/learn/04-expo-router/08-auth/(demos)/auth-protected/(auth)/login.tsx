import { View, Text, ScrollView } from 'react-native';
import { useProtectedAuth } from '../_context';
import { DemoBackButton } from '@/components/demo-back-button';
import { ListRow, ListRowGroup } from '@/components/ui/list-row';

const presetUsers = {
  admin: { name: 'Admin', emoji: '👑', desc: 'Full access' },
  user: { name: 'Regular User', emoji: '👤', desc: 'Dashboard + Analytics' },
  guest: { name: 'Guest', emoji: '👻', desc: 'Dashboard only' },
};

export default function ProtectedLogin() {
  const { loginAs } = useProtectedAuth();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="flex-row items-center gap-2 rounded-lg bg-warning-50 px-3 py-2 dark:bg-warning-900/20">
        <Text className="text-xs">🔒</Text>
        <Text className="flex-1 font-mono text-xs text-warning-600 dark:text-warning-400">(auth) group — not logged in</Text>
        <DemoBackButton />
      </View>
      <Text className="text-center text-sm text-cream-700 dark:text-night-200">
        Choose a role to sign in. Each role has different access permissions.
      </Text>
      <ListRowGroup>
        {Object.entries(presetUsers).map(([key, user]) => (
          <ListRow
            key={key}
            title={`Sign in as ${user.name}`}
            description={`Role: ${key} — ${user.desc}`}
            onPress={() => loginAs(key)}
            left={<Text className="text-2xl">{user.emoji}</Text>}
            right={<Text className="text-cream-600">→</Text>}
          />
        ))}
      </ListRowGroup>
    </ScrollView>
  );
}
