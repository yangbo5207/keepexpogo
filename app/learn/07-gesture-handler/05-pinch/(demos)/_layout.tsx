import { Stack } from "expo-router";
import { DemoBackButton } from "@/components/demo-back-button";
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function PinchGestureLayout() {
  const headerTheme = useDemoHeaderTheme();

  return (
    <Stack
      screenOptions={{
        ...headerTheme,
        headerLeft: () => <DemoBackButton />,
      }}
    >
      <Stack.Screen name="basic" options={{ title: "Pinch Basic" }} />
      <Stack.Screen name="viewer" options={{ title: "Pinch Viewer" }} />
      <Stack.Screen name="focal-zoom" options={{ title: "Pinch Focal Zoom" }} />
    </Stack>
  );
}
