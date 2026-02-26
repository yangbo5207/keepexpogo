import { View, Text, ScrollView } from 'react-native';

export default function DrawerCustomDashboard() {
  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-3 pt-4">
        <Text className="text-3xl">📊</Text>
      </View>
      <View className="rounded-xl bg-secondary-50 p-4 dark:bg-secondary-900/20">
        <Text className="mb-1 text-xs font-semibold text-secondary-700 dark:text-secondary-300">Expo Router: custom drawerContent</Text>
        <Text className="font-mono text-xs leading-5 text-secondary-600 dark:text-secondary-400">
          {'// app/_layout.tsx\nimport { Drawer } from "expo-router/drawer"\n\n<Drawer\n  drawerContent={(props) => (\n    <CustomDrawer {...props} />\n  )}\n>\n  <Drawer.Screen name="dashboard" />\n  <Drawer.Screen name="projects" />\n</Drawer>'}
        </Text>
      </View>
      <View className="rounded-lg bg-secondary-50 p-3 dark:bg-secondary-900/20">
        <Text className="text-xs text-secondary-700 dark:text-secondary-300">
          drawerContent 接收 state、descriptors、navigation 三个 props。
          可以使用 DrawerItemList 渲染默认菜单项，也可以完全自定义。
        </Text>
      </View>
    </ScrollView>
  );
}
