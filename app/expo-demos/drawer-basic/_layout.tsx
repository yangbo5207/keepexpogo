import { Drawer } from 'expo-router/drawer';
import { DemoCloseButton } from '@/components/demo-close-button';

export default function DrawerBasicLayout() {
  return (
    <Drawer
      screenOptions={{
        headerRight: () => <DemoCloseButton />,
        headerStyle: { backgroundColor: '#6366f1' },
        headerTintColor: '#fff',
        drawerActiveTintColor: '#6366f1',
      }}
    >
      <Drawer.Screen name="index" options={{ title: 'Home', drawerLabel: 'Home', drawerIcon: () => null }} />
      <Drawer.Screen name="explore" options={{ title: 'Explore', drawerLabel: 'Explore' }} />
      <Drawer.Screen name="settings" options={{ title: 'Settings', drawerLabel: 'Settings' }} />
    </Drawer>
  );
}
