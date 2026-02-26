import { Stack, Redirect } from 'expo-router';
import { useAuth } from '../_context';
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function AuthGroupLayout() {
  const headerTheme = useDemoHeaderTheme();
  const { user } = useAuth();
  if (user) return <Redirect href="/expo-demos/auth-flow/(app)" />;

  return (
    <Stack>
      <Stack.Screen name="login" options={{ title: 'Login', ...headerTheme,}} />
      <Stack.Screen name="register" options={{ title: 'Register', ...headerTheme,}} />
    </Stack>
  );
}