import { View, Text, Pressable, ScrollView } from 'react-native';
import { useProtectedAuth } from '../_context';
import { DemoCloseButton } from '@/components/demo-close-button';

const presetUsers = {
  admin: { name: 'Admin', emoji: '👑', desc: 'Full access' },
  user: { name: 'Regular User', emoji: '👤', desc: 'Dashboard + Analytics' },
  guest: { name: 'Guest', emoji: '👻', desc: 'Dashboard only' },
};

export default function ProtectedLogin() {
  const { loginAs } = useProtectedAuth();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="flex-row items-center gap-2 rounded-lg bg-amber-50 px-3 py-2 dark:bg-amber-900/20">
        <Text className="text-xs">🔒</Text>
        <Text className="flex-1 font-mono text-xs text-amber-600 dark:text-amber-400">(auth) group — not logged in</Text>
        <DemoCloseButton />
      </View>
      <Text className="text-center text-sm text-gray-500 dark:text-gray-400">
        Choose a role to sign in. Each role has different access permissions.
      </Text>
      {Object.entries(presetUsers).map(([key, user]) => (
        <Pressable key={key} onPress={() => loginAs(key)} className="flex-row items-center gap-3 rounded-xl bg-gray-50 p-4 active:bg-gray-100 dark:bg-gray-800">
          <Text className="text-2xl">{user.emoji}</Text>
          <View className="flex-1">
            <Text className="text-sm font-semibold text-gray-800 dark:text-gray-100">Sign in as {user.name}</Text>
            <Text className="text-xs text-gray-400">Role: {key} — {user.desc}</Text>
          </View>
          <Text className="text-gray-400">→</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
