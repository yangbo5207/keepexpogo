import { View, Text, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { ListRow, ListRowGroup } from '@/components/ui/list-row';

export default function NavLinkIndex() {
  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <Text className="text-sm text-cream-700 dark:text-night-200">
        Tap links below — each demonstrates a different Link prop behavior.
      </Text>

      <View className="gap-2">
        <Text className="text-xs font-bold uppercase tracking-wider text-cream-600 dark:text-cream-700">{'<Link href="...">'}  (default = navigate)</Text>
        <ListRowGroup>
          {[
            { href: '/learn/04-expo-router/06-navigation-api/nav-link/about', label: '/about', emoji: '📄' },
            { href: '/learn/04-expo-router/06-navigation-api/nav-link/blog', label: '/blog', emoji: '📝' },
            { href: '/learn/04-expo-router/06-navigation-api/nav-link/contact', label: '/contact', emoji: '✉️' },
          ].map((link) => (
            <Link key={link.href} href={link.href as any} asChild>
              <ListRow
                asChild
                title={link.label}
                description="navigate — won't duplicate"
                className="py-3.5"
                left={<Text className="text-lg">{link.emoji}</Text>}
                right={<Text className="text-cream-600">→</Text>}
                titleClassName="text-primary-600 dark:text-primary-400"
                descriptionClassName="text-[10px] text-cream-600"
              />
            </Link>
          ))}
        </ListRowGroup>
      </View>

      <View className="gap-2">
        <Text className="text-xs font-bold uppercase tracking-wider text-cream-600 dark:text-cream-700">{'<Link push href="...">'}</Text>
        <ListRowGroup>
          <Link href="/learn/04-expo-router/06-navigation-api/nav-link/blog" push asChild>
            <ListRow
              asChild
              title="/blog"
              description="push — always new entry"
              className="py-3.5"
              left={<Text className="text-lg">📝</Text>}
              right={<Text className="text-secondary-400">→</Text>}
              titleClassName="text-secondary-600 dark:text-secondary-400"
              descriptionClassName="text-[10px] text-cream-600"
            />
          </Link>
        </ListRowGroup>
      </View>

      <View className="gap-2">
        <Text className="text-xs font-bold uppercase tracking-wider text-cream-600 dark:text-cream-700">{'<Link replace href="...">'}</Text>
        <ListRowGroup>
          <Link href="/learn/04-expo-router/06-navigation-api/nav-link/about" replace asChild>
            <ListRow
              asChild
              title="/about"
              description="replace — swaps current screen"
              className="py-3.5"
              left={<Text className="text-lg">📄</Text>}
              right={<Text className="text-warning-400">↻</Text>}
              titleClassName="text-warning-600 dark:text-warning-400"
              descriptionClassName="text-[10px] text-cream-600"
            />
          </Link>
        </ListRowGroup>
      </View>

      <View className="rounded-xl bg-secondary-50 p-4 dark:bg-secondary-900/20">
        <Text className="mb-1 text-xs font-semibold text-secondary-700 dark:text-secondary-300">Expo Router code</Text>
        <Text className="font-mono text-xs leading-5 text-secondary-600 dark:text-secondary-400">
          {'import { Link, Redirect } from "expo-router"\n\n// Default: navigate behavior\n<Link href="/about">About</Link>\n\n// Always push new screen\n<Link push href="/blog">Blog</Link>\n\n// Replace current screen\n<Link replace href="/about">About</Link>\n\n// Conditional redirect\nif (!session) {\n  return <Redirect href="/login" />\n}'}
        </Text>
      </View>
    </ScrollView>
  );
}
