import { CONTACTS } from "./data";
import type { Contact } from "./types";

export function fetchLatestData() {
  return new Promise<Contact[]>((resolve) => {
    setTimeout(() => {
      resolve(CONTACTS);
    }, 900);
  });
}
