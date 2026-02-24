import { Stack } from 'expo-router';
import { DemoCloseButton } from '@/components/demo-close-button';

export default function ModalPresentLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Modal Presentation', headerLeft: () => <DemoCloseButton />, headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="card-modal" options={{ presentation: 'modal', title: 'Card Modal', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="full-modal" options={{ presentation: 'fullScreenModal', title: 'Full Screen Modal', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="form-sheet" options={{ presentation: 'formSheet', title: 'Form Sheet', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
    </Stack>
  );
}
