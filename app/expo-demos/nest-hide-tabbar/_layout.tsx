import { Stack } from 'expo-router';
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function NestHideTabbarLayout() {
  const headerTheme = useDemoHeaderTheme();
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="detail" options={{ headerShown: true, title: 'Detail', ...headerTheme,}} />
      <Stack.Screen name="settings" options={{ headerShown: true, title: 'Settings', ...headerTheme,}} />
    </Stack>
  );
}