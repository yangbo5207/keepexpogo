import { Stack } from 'expo-router';
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function NestTabsStackLayout() {
  const headerTheme = useDemoHeaderTheme();
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="detail" options={{ headerShown: true, title: 'Post Detail', ...headerTheme,}} />
      <Stack.Screen name="modal" options={{ presentation: 'modal', headerShown: true, title: 'Modal', ...headerTheme,}} />
    </Stack>
  );
}