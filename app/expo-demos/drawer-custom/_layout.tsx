import { Drawer } from 'expo-router/drawer';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { DemoBackButton } from '@/components/demo-back-button';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';

const menuItems = [
  { key: 'index', label: 'Dashboard', icon: '📊', section: 'main' },
  { key: 'projects', label: 'Projects', icon: '📁', section: 'main', badge: '5' },
  { key: 'team', label: 'Team', icon: '👥', section: 'main' },
  { key: 'settings', label: 'Settings', icon: '⚙️', section: 'other' },
];

function CustomDrawerContent({ state, navigation }: DrawerContentComponentProps) {
  const activeRoute = state.routes[state.index]?.name;

  return (
    <View className="flex-1 bg-white dark:bg-gray-900">
      <View className="bg-indigo-500 px-5 pb-5 pt-12 dark:bg-indigo-700">
        <View className="h-14 w-14 items-center justify-center rounded-full bg-white/20">
          <Text className="text-2xl font-bold text-white">YB</Text>
        </View>
        <Text className="mt-3 text-base font-bold text-white">Yang Bo</Text>
        <Text className="text-sm text-indigo-200">yangbo@example.com</Text>
        <View className="mt-2 flex-row gap-4">
          <Text className="text-xs text-indigo-200"><Text className="font-bold text-white">128</Text> projects</Text>
          <Text className="text-xs text-indigo-200"><Text className="font-bold text-white">12</Text> teams</Text>
        </View>
      </View>

      <ScrollView className="flex-1">
        <View className="py-2">
          <Text className="px-5 py-2 text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">Navigation</Text>
          {menuItems.filter(i => i.section === 'main').map((item) => {
            const isActive = activeRoute === item.key;
            return (
              <Pressable
                key={item.key}
                onPress={() => navigation.navigate(item.key)}
                className={`mx-3 flex-row items-center gap-3 rounded-lg px-3 py-2.5 ${isActive ? 'bg-indigo-50 dark:bg-indigo-900/30' : 'active:bg-gray-50 dark:active:bg-gray-800'}`}
              >
                <Text className="text-base">{item.icon}</Text>
                <Text className={`text-sm ${isActive ? 'font-semibold text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`}>{item.label}</Text>
                {item.badge && (
                  <View className="ml-auto rounded-full bg-indigo-100 px-2 py-0.5 dark:bg-indigo-900/30">
                    <Text className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">{item.badge}</Text>
                  </View>
                )}
              </Pressable>
            );
          })}
        </View>
        <View className="mx-5 my-1 border-t border-gray-100 dark:border-gray-800" />
        <View className="py-2">
          <Text className="px-5 py-2 text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">Other</Text>
          {menuItems.filter(i => i.section === 'other').map((item) => {
            const isActive = activeRoute === item.key;
            return (
              <Pressable key={item.key} onPress={() => navigation.navigate(item.key)} className={`mx-3 flex-row items-center gap-3 rounded-lg px-3 py-2.5 ${isActive ? 'bg-indigo-50 dark:bg-indigo-900/30' : 'active:bg-gray-50 dark:active:bg-gray-800'}`}>
                <Text className="text-base">{item.icon}</Text>
                <Text className={`text-sm ${isActive ? 'font-semibold text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`}>{item.label}</Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      <View className="border-t border-gray-100 p-4 dark:border-gray-800">
        <Pressable className="flex-row items-center gap-3 rounded-lg px-3 py-2.5 active:bg-red-50 dark:active:bg-red-900/20">
          <Text className="text-base">🚪</Text>
          <Text className="text-sm font-medium text-red-600 dark:text-red-400">Log Out</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function DrawerCustomLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerRight: () => <DemoBackButton />,
      }}
    >
      <Drawer.Screen name="index" options={{ title: 'Dashboard' }} />
      <Drawer.Screen name="projects" options={{ title: 'Projects' }} />
      <Drawer.Screen name="team" options={{ title: 'Team' }} />
      <Drawer.Screen name="settings" options={{ title: 'Settings' }} />
    </Drawer>
  );
}
