import { Stack } from 'expo-router';

export default function NestCrossLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="new-post" options={{ presentation: 'modal', headerShown: true, title: 'New Post', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="notifications" options={{ headerShown: true, title: 'Notifications', headerStyle: { backgroundColor: '#f59e0b' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="create-story" options={{ presentation: 'transparentModal', headerShown: false }} />
    </Stack>
  );
}
