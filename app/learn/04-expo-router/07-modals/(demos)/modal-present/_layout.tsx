import { Stack } from 'expo-router';
import { DemoBackButton } from '@/components/demo-back-button';
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function ModalPresentLayout() {
  const headerTheme = useDemoHeaderTheme();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Modal Presentation', headerLeft: () => <DemoBackButton />, ...headerTheme,}} />
      <Stack.Screen name="card-modal" options={{ presentation: 'modal', title: 'Card Modal', ...headerTheme,}} />
      <Stack.Screen name="full-modal" options={{ presentation: 'fullScreenModal', title: 'Full Screen Modal', ...headerTheme,}} />
      <Stack.Screen name="form-sheet" options={{ presentation: 'formSheet', title: 'Form Sheet', ...headerTheme,}} />
    </Stack>
  );
}