import { memo } from "react";
import { Pressable, Text } from "react-native";
import type { TabItemProps } from "./types";

export const TabItem = memo(
  function TabItem({ index, label, active, onPress, onLayoutMeasure }: TabItemProps) {
    return (
      <Pressable onPress={() => onPress(index)} onLayout={(event) => onLayoutMeasure(index, event)} className="px-4 py-3">
        <Text className={active ? "text-sm font-semibold text-primary-700 dark:text-primary-200" : "text-sm font-medium text-cream-700 dark:text-night-300"}>{label}</Text>
      </Pressable>
    );
  },
  (prev, next) => {
    return prev.index === next.index && prev.label === next.label && prev.active === next.active && prev.onPress === next.onPress && prev.onLayoutMeasure === next.onLayoutMeasure;
  },
);
