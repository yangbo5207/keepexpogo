import { useRef, useState } from "react";
import { Pressable, SectionList, Text, View } from "react-native";

interface Contact {
  id: string;
  name: string;
  phone: string;
}

type Section = {
  title: string;
  data: Contact[];
};

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ROW_HEIGHT = 60;
const HEADER_HEIGHT = 34;
const SEPARATOR_HEIGHT = 1;
const SECTION_HEIGHT = HEADER_HEIGHT + 12 * ROW_HEIGHT + 11 * SEPARATOR_HEIGHT;

function buildContacts() {
  const contacts: Contact[] = [];

  LETTERS.forEach((letter) => {
    for (let i = 1; i <= 12; i += 1) {
      const seq = String(i).padStart(2, "0");
      contacts.push({
        id: `${letter}-${seq}`,
        name: `${letter}联系人${seq}`,
        phone: `138-${letter.charCodeAt(0)}${seq}-00${seq}`,
      });
    }
  });

  return contacts;
}

function groupByFirstLetter(contacts: Contact[]): Section[] {
  const map = new Map<string, Contact[]>();

  contacts.forEach((contact) => {
    const first = contact.name[0]?.toUpperCase() ?? "#";
    const letter = /[A-Z]/.test(first) ? first : "#";
    const group = map.get(letter) || [];
    group.push(contact);
    map.set(letter, group);
  });

  return Array.from(map.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([title, data]) => ({ title, data }));
}

const CONTACT_SECTIONS = groupByFirstLetter(buildContacts());

export default function ContactBookScreen() {
  const sectionListRef = useRef<SectionList<Contact, Section>>(null);
  const pendingSectionIndexRef = useRef<number | null>(null);
  const [activeLetter, setActiveLetter] = useState(CONTACT_SECTIONS[0]?.title ?? "A");

  const forceScrollToSection = (sectionIndex: number) => {
    const responder = (sectionListRef.current as any)?.getScrollResponder?.();
    responder?.scrollTo?.({
      y: sectionIndex * SECTION_HEIGHT,
      animated: true,
    });
  };

  const scrollToSection = (letter: string) => {
    const sectionIndex = CONTACT_SECTIONS.findIndex((section) => section.title === letter);
    if (sectionIndex !== -1) {
      setActiveLetter(letter);
      pendingSectionIndexRef.current = sectionIndex;
      sectionListRef.current?.scrollToLocation({
        sectionIndex,
        itemIndex: 0,
        animated: true,
        viewPosition: 0,
        viewOffset: 2,
      });
      setTimeout(() => {
        forceScrollToSection(sectionIndex);
      }, 40);
    }
  };

  const onViewableItemsChangedRef = useRef(({ viewableItems }: { viewableItems: Array<{ section?: Section }> }) => {
    const visible = viewableItems.find((item) => item.section?.title);
    if (visible?.section?.title) {
      setActiveLetter(visible.section.title);
    }
  });

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <SectionList
        ref={sectionListRef}
        sections={CONTACT_SECTIONS}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled
        onViewableItemsChanged={onViewableItemsChangedRef.current}
        viewabilityConfig={{ itemVisiblePercentThreshold: 40 }}
        onScrollToIndexFailed={() => {
          const sectionIndex = pendingSectionIndexRef.current;
          if (sectionIndex == null) {
            return;
          }
          setTimeout(() => {
            sectionListRef.current?.scrollToLocation({
              sectionIndex,
              itemIndex: 0,
              animated: true,
              viewPosition: 0,
              viewOffset: 2,
            });
            forceScrollToSection(sectionIndex);
          }, 100);
        }}
        renderItem={({ item }) => (
          <View className="h-[60px] flex-row items-center px-4 py-3">
            <View className="mr-3 h-9 w-9 items-center justify-center rounded-xs bg-primary-100 dark:bg-primary-900">
              <Text className="font-semibold text-primary-700 dark:text-primary-200">{item.name[0]}</Text>
            </View>
            <View>
              <Text className="text-base text-cream-900 dark:text-night-100">{item.name}</Text>
              <Text className="text-xs text-cream-600 dark:text-night-300">{item.phone}</Text>
            </View>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View className="h-[34px] justify-center bg-cream-100 px-4 py-1.5 dark:bg-night-700">
            <Text className="text-sm font-bold text-cream-600 dark:text-night-300">{section.title}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View className="ml-16 h-px bg-cream-200 dark:bg-night-600" />}
      />

      <View className="absolute bottom-0 right-0 top-0 justify-center py-2">
        {LETTERS.map((letter) => (
          <Pressable key={letter} onPress={() => scrollToSection(letter)} className="px-2 py-0.5">
            <Text className={activeLetter === letter ? "text-xs font-semibold text-primary-700 dark:text-primary-200" : "text-xs font-medium text-primary-500 dark:text-primary-300"}>{letter}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
