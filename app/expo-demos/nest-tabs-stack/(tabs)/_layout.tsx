import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { DemoBackButton } from '@/components/demo-back-button';

export default function NestTabsLayout() {
  return (
    <Tabs screenOptions={{ headerRight: () => <DemoBackButton />, headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: () => <Text>🏠</Text> }} />
      <Tabs.Screen name="explore" options={{ title: 'Explore', tabBarIcon: () => <Text>🧭</Text> }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: () => <Text>👤</Text> }} />
    </Tabs>
  );
}
