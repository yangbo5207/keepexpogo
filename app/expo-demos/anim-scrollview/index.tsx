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
    title: "Collapsing Header",
    route: "/expo-demos/anim-scrollview/collapsing-header",
    icon: "vertical-align-top",
    desc: "Scroll-driven header that collapses and fades using Animated.event and interpolate.",
  },
  {
    title: "Parallax List",
    route: "/expo-demos/anim-scrollview/parallax-list",
    icon: "view-agenda",
    desc: "Each list item scales and fades based on its scroll position via per-item interpolate.",
  },
  {
    title: "Page Indicator",
    route: "/expo-demos/anim-scrollview/page-indicator",
    icon: "more-horiz",
    desc: "Horizontal paging with scroll-driven dot indicator using interpolate on scrollX.",
  },
];

export default function AnimScrollViewIndex() {
  const router = useRouter();

  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-[#151718]"
      contentContainerClassName="p-4 gap-4"
    >
      <View className="items-center gap-2 pt-4 pb-2">
        <Text className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Animated.ScrollView
        </Text>
        <Text className="text-center text-sm text-gray-500 dark:text-gray-400">
          Drive animations from scroll position using Animated.event.
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
