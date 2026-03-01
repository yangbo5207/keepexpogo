import { Stack } from "expo-router";
import { DemoBackButton } from "@/components/demo-back-button";
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function RotationGestureLayout() {
  const headerTheme = useDemoHeaderTheme();

  return (
    <Stack
      screenOptions={{
        ...headerTheme,
        headerLeft: () => <DemoBackButton />,
      }}
    >
      <Stack.Screen name="basic" options={{ title: "Rotation Basic" }} />
      <Stack.Screen name="snap-90" options={{ title: "Rotation Snap 90" }} />
      <Stack.Screen name="knob" options={{ title: "Rotation Knob" }} />
    </Stack>
  );
}
