import { Stack } from 'expo-router';
import { DemoCloseButton } from '@/components/demo-close-button';

export default function StackBasicLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          headerLeft: () => <DemoCloseButton />,
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
