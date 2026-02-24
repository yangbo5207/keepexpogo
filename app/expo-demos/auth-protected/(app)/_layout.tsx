import { Tabs, Redirect } from 'expo-router';
import { Text } from 'react-native';
import { useProtectedAuth } from '../_context';
import { DemoBackButton } from '@/components/demo-back-button';

export default function ProtectedAppGroupLayout() {
  const { session } = useProtectedAuth();
  if (!session) return <Redirect href="/expo-demos/auth-protected/(auth)/login" />;

  return (
    <Tabs screenOptions={{ headerRight: () => <DemoBackButton />, headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }}>
      <Tabs.Screen name="index" options={{ title: 'Dashboard', tabBarIcon: () => <Text>📊</Text> }} />
      <Tabs.Screen name="analytics" options={{ title: 'Analytics', tabBarIcon: () => <Text>📈</Text> }} />
      <Tabs.Screen name="users" options={{ title: 'Users', tabBarIcon: () => <Text>👥</Text> }} />
    </Tabs>
  );
}
