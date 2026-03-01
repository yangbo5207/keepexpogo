import { Stack } from "expo-router";
import { DemoBackButton } from "@/components/demo-back-button";
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function GestureConflictsLayout() {
  const headerTheme = useDemoHeaderTheme();

  return (
    <Stack
      screenOptions={{
        ...headerTheme,
        headerLeft: () => <DemoBackButton />,
      }}
    >
      <Stack.Screen name="tap-vs-doubletap" options={{ title: "Tap vs Double Tap" }} />
      <Stack.Screen name="tap-doubletap-longpress-drag" options={{ title: "Tap + DoubleTap + Drag" }} />
    </Stack>
  );
}
