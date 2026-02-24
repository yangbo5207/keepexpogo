import { Tabs, Redirect } from 'expo-router';
import { Text } from 'react-native';
import { useAuth } from '../_context';
import { DemoCloseButton } from '@/components/demo-close-button';

export default function AppGroupLayout() {
  const { user } = useAuth();
  if (!user) return <Redirect href="/expo-demos/auth-flow/(auth)/login" />;

  return (
    <Tabs screenOptions={{ headerRight: () => <DemoCloseButton />, headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: () => <Text>🏠</Text> }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: () => <Text>👤</Text> }} />
    </Tabs>
  );
}
