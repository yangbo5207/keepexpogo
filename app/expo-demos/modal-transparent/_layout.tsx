import { Stack } from 'expo-router';
import { DemoCloseButton } from '@/components/demo-close-button';

export default function ModalTransparentLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Transparent Modal', headerLeft: () => <DemoCloseButton />, headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="alert" options={{ presentation: 'transparentModal', headerShown: false, animation: 'fade' }} />
      <Stack.Screen name="action-sheet" options={{ presentation: 'transparentModal', headerShown: false, animation: 'fade' }} />
      <Stack.Screen name="bottom-drawer" options={{ presentation: 'transparentModal', headerShown: false, animation: 'fade' }} />
    </Stack>
  );
}
