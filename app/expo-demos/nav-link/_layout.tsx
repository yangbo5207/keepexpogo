import { Stack } from 'expo-router';
import { DemoBackButton } from '@/components/demo-back-button';

export default function NavLinkLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Link Component', headerLeft: () => <DemoBackButton />, headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="about" options={{ title: 'About', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="blog" options={{ title: 'Blog', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="contact" options={{ title: 'Contact', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
    </Stack>
  );
}
