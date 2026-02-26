import { Stack } from 'expo-router';
import { DemoBackButton } from '@/components/demo-back-button';
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function NavVsPushLayout() {
  const headerTheme = useDemoHeaderTheme();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Navigate vs Push',
          headerLeft: () => <DemoBackButton />,
          ...headerTheme,
        }}
      />
      <Stack.Screen name="home" options={{ title: 'Home', ...headerTheme,}} />
      <Stack.Screen name="profile" options={{ title: 'Profile', ...headerTheme,}} />
      <Stack.Screen name="settings" options={{ title: 'Settings', ...headerTheme,}} />
    </Stack>
  );
}