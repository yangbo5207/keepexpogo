import { Stack } from 'expo-router';
import { DemoBackButton } from '@/components/demo-back-button';

export default function NavVsPushLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Navigate vs Push',
          headerLeft: () => <DemoBackButton />,
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
