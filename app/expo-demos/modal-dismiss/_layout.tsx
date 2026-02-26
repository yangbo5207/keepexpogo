import { Stack } from 'expo-router';
import { DemoBackButton } from '@/components/demo-back-button';
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function ModalDismissLayout() {
  const headerTheme = useDemoHeaderTheme();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Dismiss Patterns', headerLeft: () => <DemoBackButton />, ...headerTheme,}} />
      <Stack.Screen name="screen-a" options={{ presentation: 'modal', title: 'Screen A (modal)', ...headerTheme,}} />
      <Stack.Screen name="screen-b" options={{ presentation: 'modal', title: 'Screen B (modal)', ...headerTheme,}} />
      <Stack.Screen name="screen-c" options={{ presentation: 'modal', title: 'Screen C (modal)', ...headerTheme,}} />
    </Stack>
  );
}