import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { DemoCloseButton } from '@/components/demo-close-button';

export default function CrossTabsLayout() {
  return (
    <Tabs screenOptions={{ headerRight: () => <DemoCloseButton />, headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: () => <Text>🏠</Text> }} />
      <Tabs.Screen name="messages" options={{ title: 'Messages', tabBarIcon: () => <Text>💬</Text> }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: () => <Text>👤</Text> }} />
    </Tabs>
  );
}
