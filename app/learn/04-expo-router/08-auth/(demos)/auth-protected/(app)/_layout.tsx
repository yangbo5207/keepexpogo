import { Tabs, Redirect } from 'expo-router';
import { Text } from 'react-native';
import { useProtectedAuth } from '../_context';
import { DemoBackButton } from '@/components/demo-back-button';
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function ProtectedAppGroupLayout() {
  const headerTheme = useDemoHeaderTheme();
  const { session } = useProtectedAuth();
  if (!session) return <Redirect href="/learn/04-expo-router/08-auth/auth-protected/(auth)/login" />;

  return (
    <Tabs screenOptions={{ headerRight: () => <DemoBackButton />, ...headerTheme,}}>
      <Tabs.Screen name="index" options={{ title: 'Dashboard', tabBarIcon: () => <Text>📊</Text> }} />
      <Tabs.Screen name="analytics" options={{ title: 'Analytics', tabBarIcon: () => <Text>📈</Text> }} />
      <Tabs.Screen name="users" options={{ title: 'Users', tabBarIcon: () => <Text>👥</Text> }} />
    </Tabs>
  );
}