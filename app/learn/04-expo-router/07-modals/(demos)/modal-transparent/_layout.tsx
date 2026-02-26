import { Stack } from 'expo-router';
import { DemoBackButton } from '@/components/demo-back-button';
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function ModalTransparentLayout() {
  const headerTheme = useDemoHeaderTheme();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Transparent Modal', headerLeft: () => <DemoBackButton />, ...headerTheme,}} />
      <Stack.Screen name="alert" options={{ presentation: 'transparentModal', headerShown: false, animation: 'fade' }} />
      <Stack.Screen name="action-sheet" options={{ presentation: 'transparentModal', headerShown: false, animation: 'fade' }} />
      <Stack.Screen name="bottom-drawer" options={{ presentation: 'transparentModal', headerShown: false, animation: 'fade' }} />
    </Stack>
  );
}