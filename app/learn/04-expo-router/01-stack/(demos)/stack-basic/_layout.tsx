import { Stack } from 'expo-router';
import { DemoBackButton } from '@/components/demo-back-button';
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function StackBasicLayout() {
  const headerTheme = useDemoHeaderTheme();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          headerLeft: () => <DemoBackButton />,
          ...headerTheme,
        }}
      />
      <Stack.Screen
        name="detail"
        options={{
          title: 'Detail',
          ...headerTheme,
        }}
      />
      <Stack.Screen
        name="sub-detail"
        options={{
          title: 'SubDetail',
          ...headerTheme,
        }}
      />
    </Stack>
  );
}
