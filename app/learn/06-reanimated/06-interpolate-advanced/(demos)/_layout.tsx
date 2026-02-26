import { Stack } from "expo-router";
import { DemoBackButton } from "@/components/demo-back-button";
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function ReanimatedInterpolateAdvancedLayout() {
  const headerTheme = useDemoHeaderTheme();

  return (
    <Stack
      screenOptions={{
        ...headerTheme,
        headerLeft: () => <DemoBackButton />,
      }}
    >
      <Stack.Screen name="flip-card" options={{ title: "3D Flip Card" }} />
      <Stack.Screen name="parallax" options={{ title: "Parallax Scroll", headerShown: false }} />
    </Stack>
  );
}
