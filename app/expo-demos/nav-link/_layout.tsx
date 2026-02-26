import { Stack } from 'expo-router';
import { DemoBackButton } from '@/components/demo-back-button';
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function NavLinkLayout() {
  const headerTheme = useDemoHeaderTheme();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Link Component', headerLeft: () => <DemoBackButton />, ...headerTheme,}} />
      <Stack.Screen name="about" options={{ title: 'About', ...headerTheme,}} />
      <Stack.Screen name="blog" options={{ title: 'Blog', ...headerTheme,}} />
      <Stack.Screen name="contact" options={{ title: 'Contact', ...headerTheme,}} />
    </Stack>
  );
}