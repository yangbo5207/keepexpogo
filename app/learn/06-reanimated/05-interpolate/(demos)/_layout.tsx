import { Stack } from "expo-router";
import { DemoBackButton } from "@/components/demo-back-button";
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function ReanimatedInterpolateLayout() {
  const headerTheme = useDemoHeaderTheme();

  return (
    <Stack
      screenOptions={{
        ...headerTheme,
        headerLeft: () => <DemoBackButton />,
      }}
    >
      <Stack.Screen name="basic" options={{ title: "Interpolate" }} />
      <Stack.Screen name="color" options={{ title: "Color Interpolation" }} />
      <Stack.Screen name="multi-prop" options={{ title: "Multi-Property" }} />
      <Stack.Screen name="extrapolation" options={{ title: "Extrapolation" }} />
    </Stack>
  );
}
