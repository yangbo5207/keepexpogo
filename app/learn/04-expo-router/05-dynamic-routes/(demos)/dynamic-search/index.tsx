import { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';

const categories = ['all', 'tech', 'design', 'business', 'science'];

const allResults = [
  { title: 'React Native Performance Tips', category: 'tech', emoji: '⚡' },
  { title: 'Expo Router Deep Dive', category: 'tech', emoji: '🔀' },
  { title: 'Design System Principles', category: 'design', emoji: '🎨' },
  { title: 'Typography in Mobile Apps', category: 'design', emoji: '✏️' },
  { title: 'Startup Funding Guide', category: 'business', emoji: '💰' },
  { title: 'Quantum Computing Basics', category: 'science', emoji: '🔬' },
];

export default function DynamicSearchIndex() {
  const params = useLocalSearchParams<{ q?: string; category?: string }>();
  const router = useRouter();
  const [query, setQuery] = useState(params.q || '');
  const [category, setCategory] = useState(params.category || 'all');
  const [submitted, setSubmitted] = useState(!!params.q || !!params.category);

  const filtered = allResults.filter((r) => {
    const matchQuery = !query || r.title.toLowerCase().includes(query.toLowerCase());
    const matchCat = category === 'all' || r.category === category;
    return matchQuery && matchCat;
  });

  const urlParams = new URLSearchParams();
  if (query) urlParams.set('q', query);
  if (category !== 'all') urlParams.set('category', category);
  const paramString = urlParams.toString();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="flex-row gap-2">
        <TextInput
          className="flex-1 rounded-lg border border-cream-400 bg-cream-50 px-3 py-2 text-sm text-cream-900 dark:border-cream-500 dark:bg-night-700 dark:text-cream-400"
          placeholder="Search..."
          placeholderTextColor="#9ca3af"
          value={query}
          onChangeText={(t) => { setQuery(t); setSubmitted(false); }}
          onSubmitEditing={() => setSubmitted(true)}
        />
        <Button label="Go" onPress={() => setSubmitted(true)} />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row gap-2">
          {categories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              size="sm"
              variant="primary"
              selected={category === cat}
              onPress={() => { setCategory(cat); setSubmitted(true); }}
            />
          ))}
        </View>
      </ScrollView>

      <View className="rounded-xl bg-primary-50 p-4 dark:bg-primary-900/20">
        <Text className="mb-2 text-xs font-semibold text-primary-700 dark:text-primary-300">URL & Search Params</Text>
        <View className="rounded-lg bg-cream-50 p-3 dark:bg-night-700">
          <Text className="font-mono text-xs text-primary-600 dark:text-primary-400">
            /search{paramString ? `?${paramString}` : ''}
          </Text>
        </View>
        <View className="mt-2 rounded-lg bg-cream-50 p-3 dark:bg-night-700">
          <Text className="font-mono text-xs text-cream-700 dark:text-cream-600">
            useLocalSearchParams() →{'\n'}
            {'{ '}{query ? `q: "${query}"` : ''}{query && category !== 'all' ? ', ' : ''}{category !== 'all' ? `category: "${category}"` : ''}{!query && category === 'all' ? '/* empty */' : ''}{' }'}
          </Text>
        </View>
      </View>

      {submitted && (
        <View className="gap-3">
          <Text className="text-sm font-semibold text-cream-700 dark:text-night-200">Results ({filtered.length})</Text>
          {filtered.length === 0 ? (
            <View className="items-center rounded-xl bg-cream-100 py-8 dark:bg-night-700">
              <Text className="text-cream-600">No results found</Text>
            </View>
          ) : (
            filtered.map((r, i) => (
              <View key={i} className="flex-row items-center gap-3 rounded-xl bg-cream-100 p-3.5 dark:bg-night-700">
                <Text className="text-lg">{r.emoji}</Text>
                <View className="flex-1">
                  <Text className="text-sm font-medium text-cream-900 dark:text-night-50">{r.title}</Text>
                  <Text className="text-xs text-cream-600">{r.category}</Text>
                </View>
              </View>
            ))
          )}
        </View>
      )}

      <View className="rounded-xl bg-secondary-50 p-4 dark:bg-secondary-900/20">
        <Text className="mb-1 text-xs font-semibold text-secondary-700 dark:text-secondary-300">Expo Router code</Text>
        <Text className="font-mono text-xs leading-5 text-secondary-600 dark:text-secondary-400">
          {'// Navigate with query params:\nrouter.push("/search?q=expo&category=tech")\n\n// Or use object form:\nrouter.push({\n  pathname: "/search",\n  params: { q: "expo", category: "tech" }\n})'}
        </Text>
      </View>
    </ScrollView>
  );
}
