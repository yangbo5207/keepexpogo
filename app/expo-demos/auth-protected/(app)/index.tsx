import { View, Text, Pressable, ScrollView } from 'react-native';
import { useProtectedAuth } from '../_context';

export default function ProtectedDashboard() {
  const { session, logout } = useProtectedAuth();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="flex-row items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 dark:bg-emerald-900/20">
        <Text className="text-xs">✅</Text>
        <Text className="font-mono text-xs text-emerald-600 dark:text-emerald-400">(app) group — {session?.role} access</Text>
      </View>
      <View className="flex-row items-center gap-3 rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
        <Text className="text-2xl">{session?.emoji}</Text>
        <View className="flex-1">
          <Text className="text-sm font-semibold text-gray-800 dark:text-gray-100">{session?.name}</Text>
          <View className="mt-0.5 flex-row items-center gap-1.5">
            <View className={`rounded px-1.5 py-0.5 ${session?.role === 'admin' ? 'bg-purple-100 dark:bg-purple-900/40' : session?.role === 'user' ? 'bg-blue-100 dark:bg-blue-900/40' : 'bg-gray-100 dark:bg-gray-800'}`}>
              <Text className={`text-[10px] font-medium ${session?.role === 'admin' ? 'text-purple-600 dark:text-purple-400' : session?.role === 'user' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500'}`}>{session?.role}</Text>
            </View>
          </View>
        </View>
        <Pressable onPress={logout}><Text className="text-xs text-red-400">Sign Out</Text></Pressable>
      </View>
      <View className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
        <Text className="mb-3 text-base font-bold text-gray-800 dark:text-gray-100">Dashboard</Text>
        {['Revenue: $12,345', 'Active users: 892', 'New signups: 47'].map((item, i) => (
          <View key={i} className="flex-row items-center justify-between border-b border-gray-100 py-2.5 last:border-0 dark:border-gray-700">
            <Text className="text-sm text-gray-600 dark:text-gray-300">{item.split(':')[0]}</Text>
            <Text className="font-semibold text-gray-800 dark:text-gray-100">{item.split(':')[1]}</Text>
          </View>
        ))}
      </View>
      <View className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
        <Text className="mb-2 text-xs font-semibold text-gray-700 dark:text-gray-300">Permission Matrix</Text>
        <View className="gap-1">
          <View className="flex-row">
            <Text className="w-24 text-[10px] font-semibold text-gray-500">Screen</Text>
            <Text className="flex-1 text-center text-[10px] font-semibold text-gray-500">Guest</Text>
            <Text className="flex-1 text-center text-[10px] font-semibold text-gray-500">User</Text>
            <Text className="flex-1 text-center text-[10px] font-semibold text-gray-500">Admin</Text>
          </View>
          {[
            { name: 'Dashboard', guest: true, user: true, admin: true },
            { name: 'Analytics', guest: false, user: true, admin: true },
            { name: 'Users', guest: false, user: false, admin: true },
          ].map((row) => (
            <View key={row.name} className="flex-row items-center rounded py-1">
              <Text className="w-24 text-xs text-gray-600 dark:text-gray-400">{row.name}</Text>
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
