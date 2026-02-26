import { Stack, Redirect } from 'expo-router';
import { useProtectedAuth } from '../_context';
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function ProtectedAuthGroupLayout() {
  const headerTheme = useDemoHeaderTheme();
  const { session } = useProtectedAuth();
  if (session) return <Redirect href="/learn/04-expo-router/08-auth/auth-protected/(app)" />;

  return (
    <Stack>
      <Stack.Screen name="login" options={{ title: 'Sign In', ...headerTheme,}} />
    </Stack>
  );
}