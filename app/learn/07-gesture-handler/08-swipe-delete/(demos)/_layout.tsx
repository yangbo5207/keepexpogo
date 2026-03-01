import { Stack } from "expo-router";
import { DemoBackButton } from "@/components/demo-back-button";
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function SwipeDeleteLayout() {
  const headerTheme = useDemoHeaderTheme();

  return (
    <Stack
      screenOptions={{
        ...headerTheme,
        headerLeft: () => <DemoBackButton />,
      }}
    >
      <Stack.Screen name="swipe-delete" options={{ title: "Swipe Delete List" }} />
      <Stack.Screen name="swipe-actions-exit" options={{ title: "Swipe Actions + Exit Animation" }} />
    </Stack>
  );
}
