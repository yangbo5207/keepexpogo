import { Drawer } from 'expo-router/drawer';
import { View, Text, ScrollView } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { DemoBackButton } from '@/components/demo-back-button';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";
import { ListRow } from '@/components/ui/list-row';

const menuItems = [
  { key: 'index', label: 'Dashboard', icon: '📊', section: 'main' },
  { key: 'projects', label: 'Projects', icon: '📁', section: 'main', badge: '5' },
  { key: 'team', label: 'Team', icon: '👥', section: 'main' },
  { key: 'settings', label: 'Settings', icon: '⚙️', section: 'other' },
];

function CustomDrawerContent({ state, navigation }: DrawerContentComponentProps) {
  const activeRoute = state.routes[state.index]?.name;

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-900">
      <View className="bg-primary-500 px-5 pb-5 pt-12 dark:bg-primary-700">
        <View className="h-14 w-14 items-center justify-center rounded-full bg-cream-100/20">
          <Text className="text-2xl font-bold text-white">YB</Text>
        </View>
        <Text className="mt-3 text-base font-bold text-white">Yang Bo</Text>
        <Text className="text-sm text-primary-200">yangbo@example.com</Text>
        <View className="mt-2 flex-row gap-4">
          <Text className="text-xs text-primary-200"><Text className="font-bold text-white">128</Text> projects</Text>
          <Text className="text-xs text-primary-200"><Text className="font-bold text-white">12</Text> teams</Text>
        </View>
      </View>

      <ScrollView className="flex-1">
        <View className="py-2">
          <Text className="px-5 py-2 text-[10px] font-bold uppercase tracking-wider text-cream-600 dark:text-cream-700">Navigation</Text>
          {menuItems.filter(i => i.section === 'main').map((item) => {
            const isActive = activeRoute === item.key;
            return (
              <ListRow
                key={item.key}
                title={item.label}
                active={isActive}
                onPress={() => navigation.navigate(item.key)}
                className="mx-3 px-3 py-2.5"
                radius={12}
                left={<Text className="text-base">{item.icon}</Text>}
                right={item.badge ? (
                  <View className="rounded-full bg-primary-100 px-2 py-0.5 dark:bg-primary-900/30">
                    <Text className="text-[10px] font-bold text-primary-600 dark:text-primary-400">{item.badge}</Text>
                  </View>
                ) : null}
                titleClassName={isActive ? "font-semibold text-primary-600 dark:text-primary-400" : "text-cream-700 dark:text-night-200"}
              />
            );
          })}
        </View>
        <View className="mx-5 my-1 border-t border-cream-200 dark:border-night-600" />
        <View className="py-2">
          <Text className="px-5 py-2 text-[10px] font-bold uppercase tracking-wider text-cream-600 dark:text-cream-700">Other</Text>
          {menuItems.filter(i => i.section === 'other').map((item) => {
            const isActive = activeRoute === item.key;
            return (
              <ListRow
                key={item.key}
                title={item.label}
                active={isActive}
                onPress={() => navigation.navigate(item.key)}
                className="mx-3 px-3 py-2.5"
                radius={12}
                left={<Text className="text-base">{item.icon}</Text>}
                titleClassName={isActive ? "font-semibold text-primary-600 dark:text-primary-400" : "text-cream-700 dark:text-night-200"}
              />
            );
          })}
        </View>
      </ScrollView>

      <View className="border-t border-cream-200 p-4 dark:border-night-600">
        <ListRow
          title="Log Out"
          variant="danger"
          className="px-3 py-2.5"
          radius={12}
          left={<Text className="text-base">🚪</Text>}
          titleClassName="text-sm font-medium text-danger-600 dark:text-danger-400"
        />
      </View>
    </View>
  );
}

export default function DrawerCustomLayout() {
  const headerTheme = useDemoHeaderTheme();
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
