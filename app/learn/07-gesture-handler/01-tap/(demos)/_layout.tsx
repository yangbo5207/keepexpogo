import { Stack } from "expo-router";
import { DemoBackButton } from "@/components/demo-back-button";
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function TapGestureLayout() {
  const headerTheme = useDemoHeaderTheme();

  return (
    <Stack
      screenOptions={{
        ...headerTheme,
        headerLeft: () => <DemoBackButton />,
      }}
    >
      <Stack.Screen name="basic" options={{ title: "Tap Gesture" }} />
      <Stack.Screen name="ripple" options={{ title: "Tap Ripple" }} />
      <Stack.Screen name="press-feedback" options={{ title: "Tap Press Feedback" }} />
      <Stack.Screen name="tap-longpress-menu" options={{ title: "Tap + LongPress Menu" }} />
    </Stack>
  );
}
