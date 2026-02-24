import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { DemoCloseButton } from '@/components/demo-close-button';

export default function TabsHiddenLayout() {
  return (
    <Tabs
      screenOptions={{
        headerRight: () => <DemoCloseButton />,
        headerStyle: { backgroundColor: '#6366f1' },
        headerTintColor: '#fff',
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: () => <Text>🏠</Text> }} />
      <Tabs.Screen name="search" options={{ title: 'Search', tabBarIcon: () => <Text>🔍</Text> }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings', tabBarIcon: () => <Text>⚙️</Text> }} />
      <Tabs.Screen name="notifications" options={{ href: null, title: 'Notifications', headerStyle: { backgroundColor: '#f59e0b' } }} />
      <Tabs.Screen name="admin" options={{ href: null, title: 'Admin Panel', headerStyle: { backgroundColor: '#f59e0b' } }} />
    </Tabs>
  );
}
