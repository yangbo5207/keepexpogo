import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { DemoBackButton } from '@/components/demo-back-button';
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function NestTabsLayout() {
  const headerTheme = useDemoHeaderTheme();
  return (
    <Tabs screenOptions={{ headerRight: () => <DemoBackButton />, ...headerTheme,}}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: () => <Text>🏠</Text> }} />
      <Tabs.Screen name="explore" options={{ title: 'Explore', tabBarIcon: () => <Text>🧭</Text> }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: () => <Text>👤</Text> }} />
    </Tabs>
  );
}