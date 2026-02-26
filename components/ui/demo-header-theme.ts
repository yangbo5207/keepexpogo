import { useColorScheme } from "@/hooks/use-color-scheme";

export function useDemoHeaderTheme() {
  const theme = useColorScheme() ?? "light";
  const headerStyle =
    theme === "dark" ? { backgroundColor: "#25221c" } : { backgroundColor: "#fbf8f0" };
  const headerTintColor = theme === "dark" ? "#e6d5ce" : "#6e4d38";

  return { headerStyle, headerTintColor };
}
