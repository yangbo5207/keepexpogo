import { Stack } from 'expo-router';
import { DemoBackButton } from '@/components/demo-back-button';
import { useDemoHeaderTheme } from '@/components/ui/demo-header-theme';

export default function AnimInterpolateLayout() {
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
        options={{ title: 'Interpolation' }}
      />
      <Stack.Screen
        name="color"
        options={{ title: 'Color Interpolation' }}
      />
      <Stack.Screen
        name="rotation"
        options={{ title: 'Rotation' }}
      />
      <Stack.Screen
        name="slide-up"
        options={{ title: 'Slide Up' }}
      />
      <Stack.Screen
        name="pop-in"
        options={{ title: 'Pop In' }}
      />
    </Stack>
  );
}
