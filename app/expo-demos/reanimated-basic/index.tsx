import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { ComponentProps } from "react";

const demos: {
  title: string;
  route: string;
  icon: ComponentProps<typeof MaterialIcons>["name"];
  desc: string;
}[] = [
  {
    title: "Basic Animated Style",
    route: "/expo-demos/reanimated-basic/basic-animated-style",
    icon: "flip",
    desc: "useSharedValue + useAnimatedStyle with direct assignment (no animation).",
  },
  {
    title: "Basic Animated Style (Timing)",
    route: "/expo-demos/reanimated-basic/basic-animated-style-timing",
    icon: "schedule",
    desc: "useSharedValue + useAnimatedStyle + withTiming for smooth movement.",
  },
  {
    title: "Spring Move",
    route: "/expo-demos/reanimated-basic/spring-move",
    icon: "swap-horiz",
    desc: "useSharedValue + useAnimatedStyle + withSpring to move a box.",
  },
  {
    title: "Timing Move",
    route: "/expo-demos/reanimated-basic/timing-move",
    icon: "timer",
    desc: "withTiming default vs custom duration and Easing.bezier curve.",
  },
  {
    title: "Spring Config",
    route: "/expo-demos/reanimated-basic/spring-config",
    icon: "tune",
    desc: "withSpring with different damping, stiffness, and mass configs.",
  },
  {
    title: "Decay Drag",
    route: "/expo-demos/reanimated-basic/decay-drag",
    icon: "swipe",
    desc: "withDecay inertial momentum after drag with clamp range limit.",
  },
];

export default function ReanimatedBasicIndex() {
  const router = useRouter();

  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-[#151718]"
      contentContainerClassName="p-4 gap-4"
    >
      <View className="items-center gap-2 pt-4 pb-2">
        <Text className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Reanimated Basic
        </Text>
        <Text className="text-center text-sm text-gray-500 dark:text-gray-400">
          Core concepts: shared values, animated styles, and spring animations.
        </Text>
      </View>

      {demos.map((demo) => (
        <Pressable
          key={demo.route}
          className="rounded-xs bg-orange-50 p-4 active:bg-orange-100 dark:bg-orange-900/20 dark:active:bg-orange-900/30"
          onPress={() => router.push(demo.route as any)}
        >
          <View className="flex-row items-center gap-3">
            <View className="h-12 w-12 items-center justify-center rounded-xs bg-orange-100 dark:bg-orange-800/30">
              <MaterialIcons name={demo.icon} size={24} color="#f97316" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-semibold text-gray-800 dark:text-gray-100">
                {demo.title}
              </Text>
              <Text className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                {demo.desc}
              </Text>
            </View>
            <Text className="text-lg text-gray-400">›</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}
