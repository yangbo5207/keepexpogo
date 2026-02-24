import { Stack } from 'expo-router';

export default function NestTabsStackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="detail" options={{ headerShown: true, title: 'Post Detail', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal', headerShown: true, title: 'Modal', headerStyle: { backgroundColor: '#6366f1' }, headerTintColor: '#fff' }} />
    </Stack>
  );
}
