import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { DemoBackButton } from '@/components/demo-back-button';
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function TabsHiddenLayout() {
  const headerTheme = useDemoHeaderTheme();
  return (
    <Tabs
      screenOptions={{
        headerRight: () => <DemoBackButton />,
        ...headerTheme,
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: () => <Text>🏠</Text> }} />
      <Tabs.Screen name="search" options={{ title: 'Search', tabBarIcon: () => <Text>🔍</Text> }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings', tabBarIcon: () => <Text>⚙️</Text> }} />
      <Tabs.Screen name="notifications" options={{ href: null, title: 'Notifications', ...headerTheme,}} />
      <Tabs.Screen name="admin" options={{ href: null, title: 'Admin Panel', ...headerTheme,}} />
    </Tabs>
  );
}