import { FlatList, Text, View } from "react-native";

interface Contact {
  id: string;
  name: string;
  phone: string;
}

const contacts: Contact[] = [
  { id: "1", name: "张三", phone: "138-0000-0001" },
  { id: "2", name: "李四", phone: "138-0000-0002" },
  { id: "3", name: "王五", phone: "138-0000-0003" },
];

export default function FlatListBasicScreen() {
  return (
    <View className="flex-1 bg-cream-50 px-6 py-8 dark:bg-night-800">
      <Text className="text-xs mb-4 text-cream-700 dark:text-night-200">FlatList Core API</Text>

      <FlatList<Contact>
        className="mt-5"
        data={contacts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 8 }}
        renderItem={({ item, index }) => (
          <View className="rounded-xs border border-cream-200 bg-cream-50 px-4 py-3 dark:border-night-600 dark:bg-night-700">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <View className="h-9 w-9 items-center justify-center rounded-xs bg-primary-100 dark:bg-primary-900">
                  <Text className="text-xs font-semibold text-primary-700 dark:text-primary-200">{item.name.slice(0, 1)}</Text>
                </View>
                <View>
                  <Text className="text-base font-semibold text-cream-900 dark:text-night-100">{item.name}</Text>
                  <Text className="mt-1 text-sm text-cream-600 dark:text-night-300">{item.phone}</Text>
                </View>
              </View>

              <View className="rounded-xs bg-cream-200 px-2 py-1 dark:bg-night-600">
                <Text className="text-[11px] font-semibold uppercase tracking-wider text-cream-700 dark:text-night-200">#{index + 1}</Text>
              </View>
            </View>

            <View className="mt-3 h-px bg-cream-200 dark:bg-night-600" />

            <View className="mt-2 flex-row items-center justify-between">
              <Text className="text-xs font-medium text-cream-600 dark:text-night-300">联系人状态</Text>
              <View className="flex-row items-center gap-2">
                <View className="h-2 w-2 rounded-full bg-success-500" />
                <Text className="text-xs font-semibold text-success-600 dark:text-success-400">已同步</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
