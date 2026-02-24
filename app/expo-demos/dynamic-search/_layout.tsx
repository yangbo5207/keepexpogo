import { Stack } from 'expo-router';
import { DemoBackButton } from '@/components/demo-back-button';

export default function DynamicSearchLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Search',
          headerLeft: () => <DemoBackButton />,
          headerStyle: { backgroundColor: '#6366f1' },
          headerTintColor: '#fff',
        }}
      />
    </Stack>
  );
}
