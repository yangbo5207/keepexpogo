import { FlatList, Text, View } from "react-native";
import { Inbox } from "lucide-react-native";

interface Contact {
  id: string;
  name: string;
  phone: string;
}

const contacts: Contact[] = [];

export default function FlatListEmptyScreen() {
  return (
    <View className="flex-1 bg-cream-50 px-6 py-8 dark:bg-night-800">
      <FlatList<Contact>
        className="mt-5"
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={() => null}
        ListEmptyComponent={
          <View className="items-center justify-center py-20">
            <View className="mb-4 h-14 w-14 items-center justify-center rounded-xs bg-cream-100 dark:bg-night-700">
              <Inbox size={24} color="#9e978a" />
            </View>
            <Text className="text-base text-cream-500 dark:text-night-400">暂无数据</Text>
            <Text className="mt-2 text-xs text-cream-400 dark:text-night-500">请稍后重试或调整筛选条件</Text>
          </View>
        }
      />
    </View>
  );
}
