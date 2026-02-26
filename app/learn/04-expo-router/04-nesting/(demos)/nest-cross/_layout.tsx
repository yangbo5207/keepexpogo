import { Stack } from 'expo-router';
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function NestCrossLayout() {
  const headerTheme = useDemoHeaderTheme();
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="new-post" options={{ presentation: 'modal', headerShown: true, title: 'New Post', ...headerTheme,}} />
      <Stack.Screen name="notifications" options={{ headerShown: true, title: 'Notifications', ...headerTheme,}} />
      <Stack.Screen name="create-story" options={{ presentation: 'transparentModal', headerShown: false }} />
    </Stack>
  );
}