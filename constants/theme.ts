/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";
import { designSystem } from "./design-system";

export const Colors = {
  light: {
    text: designSystem.colors.light.text,
    background: designSystem.colors.light.background,
    tint: designSystem.colors.light.primary,
    icon: designSystem.colors.light.icon,
    tabIconDefault: designSystem.colors.light.tabIconDefault,
    tabIconSelected: designSystem.colors.light.tabIconSelected,
  },
  dark: {
    text: designSystem.colors.dark.text,
    background: designSystem.colors.dark.background,
    tint: designSystem.colors.dark.primary,
    icon: designSystem.colors.dark.icon,
    tabIconDefault: designSystem.colors.dark.tabIconDefault,
    tabIconSelected: designSystem.colors.dark.tabIconSelected,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
