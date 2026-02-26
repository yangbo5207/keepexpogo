import { Stack } from 'expo-router';
import { DemoBackButton } from '@/components/demo-back-button';
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function DynamicParamsLayout() {
  const headerTheme = useDemoHeaderTheme();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Posts',
          headerLeft: () => <DemoBackButton />,
          ...headerTheme,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: 'Post Detail',
          ...headerTheme,
        }}
      />
    </Stack>
  );
}