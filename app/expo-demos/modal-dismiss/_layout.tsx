import { Stack } from 'expo-router';
import { DemoBackButton } from '@/components/demo-back-button';

export default function ModalDismissLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Dismiss Patterns', headerLeft: () => <DemoBackButton />, headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="screen-a" options={{ presentation: 'modal', title: 'Screen A (modal)', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="screen-b" options={{ presentation: 'modal', title: 'Screen B (modal)', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="screen-c" options={{ presentation: 'modal', title: 'Screen C (modal)', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
    </Stack>
  );
}
