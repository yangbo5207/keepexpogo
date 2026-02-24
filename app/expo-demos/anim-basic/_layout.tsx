import { Stack } from 'expo-router';
import { DemoBackButton } from '@/components/demo-back-button';

export default function AnimBasicLayout() {
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
          title: 'Basic Animations',
          headerLeft: () => <DemoBackButton />,
        }}
      />
      <Stack.Screen
        name="fade"
        options={{ title: 'Fade (Timing)' }}
      />
      <Stack.Screen
        name="fade-toggle"
        options={{ title: 'Fade Toggle' }}
      />
      <Stack.Screen
        name="scroll-fade"
        options={{ title: 'Scroll Fade' }}
      />
      <Stack.Screen
        name="value-xy"
        options={{ title: 'ValueXY Move' }}
      />
      <Stack.Screen
        name="decay"
        options={{ title: 'Decay Momentum' }}
      />
      <Stack.Screen
        name="spring"
        options={{ title: 'Spring Bounce' }}
      />
    </Stack>
  );
}
