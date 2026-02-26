import { Stack } from "expo-router";
import { DemoBackButton } from "@/components/demo-back-button";
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function ReanimatedDerivedLayout() {
  const headerTheme = useDemoHeaderTheme();

  return (
    <Stack
      screenOptions={{
        ...headerTheme,
        headerLeft: () => <DemoBackButton />,
      }}
    >
      <Stack.Screen name="format-percent" options={{ title: "Derived Percent" }} />
      <Stack.Screen name="linked-rotation" options={{ title: "Linked Rotation" }} />
      <Stack.Screen name="svg-pulse" options={{ title: "SVG Pulse" }} />
      <Stack.Screen name="start-stop" options={{ title: "Start / Stop" }} />
    </Stack>
  );
}
