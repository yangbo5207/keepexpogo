import { Stack } from 'expo-router';
import { DemoBackButton } from '@/components/demo-back-button';

export default function AnimInterpolateLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#f97316' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Interpolation',
          headerLeft: () => <DemoBackButton />,
        }}
      />
      <Stack.Screen
        name="color"
        options={{ title: 'Color Interpolation' }}
      />
      <Stack.Screen
        name="rotation"
        options={{ title: 'Rotation' }}
      />
    </Stack>
  );
}
