import { Stack } from 'expo-router';
import { DemoBackButton } from '@/components/demo-back-button';
import { useDemoHeaderTheme } from '@/components/ui/demo-header-theme';

export default function AnimBasicLayout() {
  const headerTheme = useDemoHeaderTheme();

  return (
    <Stack
      screenOptions={{
        ...headerTheme,
        headerLeft: () => <DemoBackButton />,
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: 'Basic Animations' }}
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
