import { DemoBackButton } from "@/components/demo-back-button";
import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function ReanimatedBasicLayout() {
  const theme = useColorScheme() ?? "light";
  const headerStyle =
    theme === "dark"
      ? { backgroundColor: "#25221c" }
      : { backgroundColor: "#fbf8f0" };
  const headerTintColor = theme === "dark" ? "#e6d5ce" : "#6e4d38";

  return (
    <Stack
      screenOptions={{
        headerStyle,
        headerTintColor,
        headerLeft: () => <DemoBackButton />,
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Reanimated Basic" }}
      />
      <Stack.Screen
        name="basic-animated-style"
        options={{ title: "Basic Animated Style" }}
      />
      <Stack.Screen
        name="basic-animated-style-timing"
        options={{ title: "Basic Animated Style (Timing)" }}
      />
      <Stack.Screen
        name="basic-animated-style-spring"
        options={{ title: "Basic Animated Style (Spring)" }}
      />
      <Stack.Screen
        name="decay-drag"
        options={{ title: "Decay Drag" }}
      />
    </Stack>
  );
}
