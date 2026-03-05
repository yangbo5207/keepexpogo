import type { LayoutChangeEvent, ViewStyle } from "react-native";

export type ScrollTabItem = {
  key: string;
  label: string;
};

export type ScrollableTabsProps = {
  tabs: ScrollTabItem[];
  activeIndex: number;
  onChange: (index: number) => void;
  indicatorWidth?: number;
  indicatorClassName?: string;
  indicatorStyle?: Omit<ViewStyle, "width" | "transform">;
};

export type TabItemProps = {
  index: number;
  label: string;
  active: boolean;
  onPress: (index: number) => void;
  onLayoutMeasure: (index: number, event: LayoutChangeEvent) => void;
};
