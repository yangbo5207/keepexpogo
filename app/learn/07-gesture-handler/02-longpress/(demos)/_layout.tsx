import { Stack } from "expo-router";
import { DemoBackButton } from "@/components/demo-back-button";
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function LongPressGestureLayout() {
  const headerTheme = useDemoHeaderTheme();

  return (
    <Stack
      screenOptions={{
        ...headerTheme,
        headerLeft: () => <DemoBackButton />,
      }}
    >
      <Stack.Screen name="basic" options={{ title: "LongPress Basic" }} />
      <Stack.Screen name="hold-progress" options={{ title: "LongPress Hold Progress" }} />
      <Stack.Screen name="longpress-drag" options={{ title: "LongPress Drag" }} />
      <Stack.Screen name="context-menu" options={{ title: "LongPress Context Menu" }} />
    </Stack>
  );
}
