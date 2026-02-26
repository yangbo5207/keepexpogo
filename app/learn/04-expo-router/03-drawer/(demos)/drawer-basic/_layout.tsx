import { Drawer } from 'expo-router/drawer';
import { DemoBackButton } from '@/components/demo-back-button';
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function DrawerBasicLayout() {
  const headerTheme = useDemoHeaderTheme();
  return (
    <Drawer
      screenOptions={{
        headerRight: () => <DemoBackButton />,
        ...headerTheme,
        drawerActiveTintColor: '#6366f1',
      }}
    >
      <Drawer.Screen name="index" options={{ title: 'Home', drawerLabel: 'Home', drawerIcon: () => null }} />
      <Drawer.Screen name="explore" options={{ title: 'Explore', drawerLabel: 'Explore' }} />
      <Drawer.Screen name="settings" options={{ title: 'Settings', drawerLabel: 'Settings' }} />
    </Drawer>
  );
}