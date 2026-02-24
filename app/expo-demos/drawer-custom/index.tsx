import { View, Text, ScrollView } from 'react-native';

export default function DrawerCustomDashboard() {
  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-3 pt-4">
        <Text className="text-3xl">📊</Text>
        <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">Dashboard</Text>
      </View>
      <View className="rounded-xl bg-teal-50 p-4 dark:bg-teal-900/20">
        <Text className="mb-1 text-xs font-semibold text-teal-700 dark:text-teal-300">Expo Router: custom drawerContent</Text>
        <Text className="font-mono text-xs leading-5 text-teal-600 dark:text-teal-400">
          {'// app/_layout.tsx\nimport { Drawer } from "expo-router/drawer"\n\n<Drawer\n  drawerContent={(props) => (\n    <CustomDrawer {...props} />\n  )}\n>\n  <Drawer.Screen name="dashboard" />\n  <Drawer.Screen name="projects" />\n</Drawer>'}
        </Text>
      </View>
      <View className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
        <Text className="text-xs text-blue-700 dark:text-blue-300">
          drawerContent 接收 state、descriptors、navigation 三个 props。
          可以使用 DrawerItemList 渲染默认菜单项，也可以完全自定义。
        </Text>
      </View>
    </ScrollView>
  );
}
