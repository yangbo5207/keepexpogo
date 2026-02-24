import { Stack, Redirect } from 'expo-router';
import { useAuth } from '../_context';

export default function AuthGroupLayout() {
  const { user } = useAuth();
  if (user) return <Redirect href="/expo-demos/auth-flow/(app)" />;

  return (
    <Stack>
      <Stack.Screen name="login" options={{ title: 'Login', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="register" options={{ title: 'Register', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
    </Stack>
  );
}
