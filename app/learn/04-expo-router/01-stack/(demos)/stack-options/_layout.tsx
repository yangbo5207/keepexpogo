import { Stack } from 'expo-router';
import { DemoBackButton } from '@/components/demo-back-button';

export default function StackOptionsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#14b8a6' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Products',
          headerLeft: () => <DemoBackButton />,
        }}
      />
      <Stack.Screen
        name="detail"
        options={{ title: 'Product Detail' }}
      />
      <Stack.Screen
        name="modal"
        options={{
          title: 'Quick View',
          presentation: 'modal',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
