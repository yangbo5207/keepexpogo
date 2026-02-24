import { Stack } from 'expo-router';
import { DemoCloseButton } from '@/components/demo-close-button';

export default function DynamicSearchLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Search',
          headerLeft: () => <DemoCloseButton />,
          headerStyle: { backgroundColor: '#6366f1' },
          headerTintColor: '#fff',
        }}
      />
    </Stack>
  );
}
