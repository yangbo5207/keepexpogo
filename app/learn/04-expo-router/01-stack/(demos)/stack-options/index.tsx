import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ListRow, ListRowGroup } from '@/components/ui/list-row';

const products = [
  { name: 'Wireless Headphones', price: '$99', emoji: '🎧' },
  { name: 'Smart Watch', price: '$249', emoji: '⌚' },
  { name: 'USB-C Hub', price: '$45', emoji: '🔌' },
];

export default function ScreenOptionsList() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="rounded-xl bg-cream-100 p-4 dark:bg-night-700">
        <Text className="mb-3 text-sm font-semibold text-cream-700 dark:text-night-200">
          screenOptions (applies to all screens)
        </Text>
        <View className="gap-1.5">
          <View className="flex-row justify-between">
            <Text className="text-xs text-cream-700 dark:text-night-200">headerStyle</Text>
            <Text className="font-mono text-xs text-secondary-600 dark:text-secondary-400">
              {"{ backgroundColor: '#14b8a6' }"}
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-xs text-cream-700 dark:text-night-200">headerTintColor</Text>
            <Text className="font-mono text-xs text-secondary-600 dark:text-secondary-400">'#fff'</Text>
          </View>
        </View>
      </View>

      <Text className="text-sm font-semibold text-cream-700 dark:text-night-200">Product list</Text>
      <ListRowGroup>
        {products.map((item) => (
          <ListRow
            key={item.name}
            title={item.name}
            description={item.price}
            onPress={() => router.push('/learn/04-expo-router/01-stack/stack-options/detail' as any)}
            left={(
              <View className="h-12 w-12 items-center justify-center rounded-xl bg-cream-200 dark:bg-night-600">
                <Text className="text-xl">{item.emoji}</Text>
              </View>
            )}
            right={<Text className="text-cream-600">→</Text>}
          />
        ))}
      </ListRowGroup>

      <View className="rounded-xl bg-secondary-50 p-4 dark:bg-secondary-900/20">
        <Text className="mb-1 text-xs font-semibold text-secondary-700 dark:text-secondary-300">
          Expo Router equivalent
        </Text>
        <Text className="font-mono text-xs leading-5 text-secondary-600 dark:text-secondary-400">
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
