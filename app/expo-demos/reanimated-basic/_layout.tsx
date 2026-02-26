import { DemoBackButton } from "@/components/demo-back-button";
import { Stack } from "expo-router";

export default function ReanimatedBasicLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f97316" },
        headerTintColor: "#fff",
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
        name="spring-move"
        options={{ title: "Spring Move" }}
      />
      <Stack.Screen
        name="timing-move"
        options={{ title: "Timing Move" }}
      />
      <Stack.Screen
        name="spring-config"
        options={{ title: "Spring Config" }}
      />
      <Stack.Screen
        name="decay-drag"
        options={{ title: "Decay Drag" }}
      />
    </Stack>
  );
}
