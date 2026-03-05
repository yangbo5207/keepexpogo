import { BASE_CONTACTS } from "./data";
import type { Contact } from "./types";

function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export async function fetchLatestData() {
  await delay(900);
  return BASE_CONTACTS;
}

export async function fetchNextPage(page: number, pageSize = 5) {
  await delay(900);
  if (page > 3) {
    return [];
  }

  const start = (page - 1) * pageSize + 1;
  const result: Contact[] = Array.from({ length: pageSize }, (_, index) => {
    const seq = start + index;
    return {
      id: `page-${page}-${seq}`,
      name: `联系人 ${seq}`,
      phone: `138-0000-${String(1000 + seq).slice(-4)}`,
      avatar: `${(seq % 9) + 1}`,
    };
  });
  return result;
}
