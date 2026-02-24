import { Stack, Redirect } from 'expo-router';
import { useProtectedAuth } from '../_context';

export default function ProtectedAuthGroupLayout() {
  const { session } = useProtectedAuth();
  if (session) return <Redirect href="/expo-demos/auth-protected/(app)" />;

  return (
    <Stack>
      <Stack.Screen name="login" options={{ title: 'Sign In', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
    </Stack>
  );
}
