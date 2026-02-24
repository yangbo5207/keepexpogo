import { Stack } from 'expo-router';
import { DemoCloseButton } from '@/components/demo-close-button';

export default function DynamicCatchallLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Documentation',
          headerLeft: () => <DemoCloseButton />,
          headerStyle: { backgroundColor: '#6366f1' },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="docs/[...slug]"
        options={{
          headerStyle: { backgroundColor: '#6366f1' },
          headerTintColor: '#fff',
        }}
      />
    </Stack>
  );
}
