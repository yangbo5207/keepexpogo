import { Stack } from 'expo-router';
import { DemoBackButton } from '@/components/demo-back-button';
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function NavReplaceLayout() {
  const headerTheme = useDemoHeaderTheme();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Replace & Reset', headerLeft: () => <DemoBackButton />, ...headerTheme,}} />
      <Stack.Screen name="login" options={{ title: 'Login', ...headerTheme,}} />
      <Stack.Screen name="home" options={{ title: 'Home', ...headerTheme,}} />
      <Stack.Screen name="detail" options={{ title: 'Product Detail', ...headerTheme,}} />
    </Stack>
  );
}