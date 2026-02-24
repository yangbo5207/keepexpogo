import { Stack } from 'expo-router';
import { DemoBackButton } from '@/components/demo-back-button';

export default function StackBasicLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          headerLeft: () => <DemoBackButton />,
          headerStyle: { backgroundColor: '#6366f1' },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="detail"
        options={{
          title: 'Detail',
          headerStyle: { backgroundColor: '#6366f1' },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="sub-detail"
        options={{
          title: 'SubDetail',
          headerStyle: { backgroundColor: '#6366f1' },
          headerTintColor: '#fff',
        }}
      />
    </Stack>
  );
}
