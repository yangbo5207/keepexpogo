import { Stack } from 'expo-router';
import { DemoCloseButton } from '@/components/demo-close-button';

export default function NavVsPushLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Navigate vs Push',
          headerLeft: () => <DemoCloseButton />,
          headerStyle: { backgroundColor: '#6366f1' },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="home" options={{ title: 'Home', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="profile" options={{ title: 'Profile', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="settings" options={{ title: 'Settings', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
    </Stack>
  );
}
