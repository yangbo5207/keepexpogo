import { Stack } from 'expo-router';
import { DemoBackButton } from '@/components/demo-back-button';

export default function DynamicParamsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Posts',
          headerLeft: () => <DemoBackButton />,
          headerStyle: { backgroundColor: '#6366f1' },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: 'Post Detail',
          headerStyle: { backgroundColor: '#6366f1' },
          headerTintColor: '#fff',
        }}
      />
    </Stack>
  );
}
