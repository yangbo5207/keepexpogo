import { Stack } from 'expo-router';
import { DemoCloseButton } from '@/components/demo-close-button';

export default function NavReplaceLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Replace & Reset', headerLeft: () => <DemoCloseButton />, headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="login" options={{ title: 'Login', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="home" options={{ title: 'Home', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="detail" options={{ title: 'Product Detail', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
    </Stack>
  );
}
