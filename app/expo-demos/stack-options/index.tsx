import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const products = [
  { name: 'Wireless Headphones', price: '$99', emoji: '🎧' },
  { name: 'Smart Watch', price: '$249', emoji: '⌚' },
  { name: 'USB-C Hub', price: '$45', emoji: '🔌' },
];

export default function ScreenOptionsList() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
        <Text className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
          screenOptions (applies to all screens)
        </Text>
        <View className="gap-1.5">
          <View className="flex-row justify-between">
            <Text className="text-xs text-gray-500 dark:text-gray-400">headerStyle</Text>
            <Text className="font-mono text-xs text-teal-600 dark:text-teal-400">
              {"{ backgroundColor: '#14b8a6' }"}
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-xs text-gray-500 dark:text-gray-400">headerTintColor</Text>
            <Text className="font-mono text-xs text-teal-600 dark:text-teal-400">'#fff'</Text>
          </View>
        </View>
      </View>

      <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">Product list</Text>
      {products.map((item) => (
        <Pressable
          key={item.name}
          onPress={() => router.push('/expo-demos/stack-options/detail' as any)}
          className="flex-row items-center gap-3 rounded-xl bg-gray-50 p-4 active:bg-gray-100 dark:bg-gray-800 dark:active:bg-gray-750"
        >
          <View className="h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-700">
            <Text className="text-xl">{item.emoji}</Text>
          </View>
          <View className="flex-1">
            <Text className="text-sm font-semibold text-gray-800 dark:text-gray-100">{item.name}</Text>
            <Text className="text-xs text-gray-500 dark:text-gray-400">{item.price}</Text>
          </View>
          <Text className="text-gray-400">→</Text>
        </Pressable>
      ))}

      <View className="rounded-xl bg-teal-50 p-4 dark:bg-teal-900/20">
        <Text className="mb-1 text-xs font-semibold text-teal-700 dark:text-teal-300">
          Expo Router equivalent
        </Text>
        <Text className="font-mono text-xs leading-5 text-teal-600 dark:text-teal-400">
          {'// app/_layout.tsx\n'}
          {'<Stack\n'}
          {'  screenOptions={{\n'}
          {"    headerStyle: { backgroundColor: '#14b8a6' },\n"}
          {"    headerTintColor: '#fff',\n"}
          {'  }}\n'}
          {'>\n'}
          {'  <Stack.Screen\n'}
          {'    name="detail"\n'}
          {'    options={{ title: "Product Detail" }}\n'}
          {'  />\n'}
          {'</Stack>'}
        </Text>
      </View>
    </ScrollView>
  );
}
