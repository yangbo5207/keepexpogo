import { Stack } from "expo-router";
import { DemoBackButton } from "@/components/demo-back-button";
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function ReanimatedBasicLayout() {
  const headerTheme = useDemoHeaderTheme();

  return (
    <Stack
      screenOptions={{
        ...headerTheme,
        headerLeft: () => <DemoBackButton />,
      }}
    >
      <Stack.Screen name="basic-animated-style" options={{ title: "Basic Animated Style" }} />
      <Stack.Screen name="basic-animated-style-timing" options={{ title: "Basic Animated Style (Timing)" }} />
      <Stack.Screen name="basic-animated-style-spring" options={{ title: "Basic Animated Style (Spring)" }} />
      <Stack.Screen name="decay-drag" options={{ title: "Decay Drag" }} />
    </Stack>
  );
}
