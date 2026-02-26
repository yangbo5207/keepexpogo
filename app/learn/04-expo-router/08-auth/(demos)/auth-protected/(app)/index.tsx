import { View, Text, ScrollView } from 'react-native';
import { useProtectedAuth } from '../_context';
import { Button } from '@/components/ui/button';

export default function ProtectedDashboard() {
  const { session, logout } = useProtectedAuth();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="flex-row items-center gap-2 rounded-lg bg-success-50 px-3 py-2 dark:bg-success-900/20">
        <Text className="text-xs">✅</Text>
        <Text className="font-mono text-xs text-success-600 dark:text-success-400">(app) group — {session?.role} access</Text>
      </View>
      <View className="flex-row items-center gap-3 rounded-xl bg-cream-100 p-4 dark:bg-night-700">
        <Text className="text-2xl">{session?.emoji}</Text>
        <View className="flex-1">
          <Text className="text-sm font-semibold text-cream-900 dark:text-night-50">{session?.name}</Text>
          <View className="mt-0.5 flex-row items-center gap-1.5">
            <View className={`rounded px-1.5 py-0.5 ${session?.role === 'admin' ? 'bg-secondary-100 dark:bg-secondary-900/40' : session?.role === 'user' ? 'bg-secondary-100 dark:bg-secondary-900/40' : 'bg-cream-100 dark:bg-night-700'}`}>
              <Text className={`text-[10px] font-medium ${session?.role === 'admin' ? 'text-secondary-600 dark:text-secondary-400' : session?.role === 'user' ? 'text-secondary-600 dark:text-secondary-400' : 'text-cream-700'}`}>{session?.role}</Text>
            </View>
          </View>
        </View>
        <Button className="px-0 py-0" label="Sign Out" size="sm" variant="ghost" onPress={logout} />
      </View>
      <View className="rounded-xl bg-cream-100 p-4 dark:bg-night-700">
        <Text className="mb-3 text-base font-bold text-cream-900 dark:text-night-50">Dashboard</Text>
        {['Revenue: $12,345', 'Active users: 892', 'New signups: 47'].map((item, i) => (
          <View key={i} className="flex-row items-center justify-between border-b border-cream-200 py-2.5 last:border-0 dark:border-night-500">
            <Text className="text-sm text-cream-700 dark:text-night-200">{item.split(':')[0]}</Text>
            <Text className="font-semibold text-cream-900 dark:text-night-50">{item.split(':')[1]}</Text>
          </View>
        ))}
      </View>
      <View className="rounded-xl bg-cream-100 p-4 dark:bg-night-700">
        <Text className="mb-2 text-xs font-semibold text-cream-700 dark:text-night-200">Permission Matrix</Text>
        <View className="gap-1">
          <View className="flex-row">
            <Text className="w-24 text-[10px] font-semibold text-cream-700">Screen</Text>
            <Text className="flex-1 text-center text-[10px] font-semibold text-cream-700">Guest</Text>
            <Text className="flex-1 text-center text-[10px] font-semibold text-cream-700">User</Text>
            <Text className="flex-1 text-center text-[10px] font-semibold text-cream-700">Admin</Text>
          </View>
          {[
            { name: 'Dashboard', guest: true, user: true, admin: true },
            { name: 'Analytics', guest: false, user: true, admin: true },
            { name: 'Users', guest: false, user: false, admin: true },
          ].map((row) => (
            <View key={row.name} className="flex-row items-center rounded py-1">
              <Text className="w-24 text-xs text-cream-700 dark:text-cream-600">{row.name}</Text>
              <Text className="flex-1 text-center text-xs">{row.guest ? '✅' : '❌'}</Text>
              <Text className="flex-1 text-center text-xs">{row.user ? '✅' : '❌'}</Text>
              <Text className="flex-1 text-center text-xs">{row.admin ? '✅' : '❌'}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
