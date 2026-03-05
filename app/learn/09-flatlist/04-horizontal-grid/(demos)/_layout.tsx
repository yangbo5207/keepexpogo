import { Stack } from "expo-router";
import { DemoBackButton } from "@/components/demo-back-button";
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function HorizontalGridLayout() {
  const headerTheme = useDemoHeaderTheme();

  return (
    <Stack
      screenOptions={{
        ...headerTheme,
        headerLeft: () => <DemoBackButton />,
      }}
    >
      <Stack.Screen name="horizontal-list" options={{ title: "Horizontal List" }} />
      <Stack.Screen name="equal-grid" options={{ title: "Equal Width Grid" }} />
    </Stack>
  );
}
