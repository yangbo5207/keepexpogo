import { Stack } from 'expo-router';
import { DemoCloseButton } from '@/components/demo-close-button';

export default function NavLinkLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Link Component', headerLeft: () => <DemoCloseButton />, headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="about" options={{ title: 'About', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="blog" options={{ title: 'Blog', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="contact" options={{ title: 'Contact', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
    </Stack>
  );
}
