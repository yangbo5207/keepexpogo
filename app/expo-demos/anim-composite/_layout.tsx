import { DemoBackButton } from "@/components/demo-back-button";
import { Stack } from "expo-router";

export default function AnimCompositeLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f97316" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Composite Animations",
          headerLeft: () => <DemoBackButton />,
        }}
      />
      <Stack.Screen name="sequence" options={{ title: "Sequence" }} />
      <Stack.Screen name="stagger" options={{ title: "Stagger" }} />
    </Stack>
  );
}
