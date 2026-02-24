import { Stack } from 'expo-router';
import { DemoBackButton } from '@/components/demo-back-button';

export default function DynamicCatchallLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Documentation',
          headerLeft: () => <DemoBackButton />,
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
