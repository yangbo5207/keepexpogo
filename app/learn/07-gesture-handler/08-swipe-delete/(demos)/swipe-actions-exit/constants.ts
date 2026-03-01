export type SwipeActionType = "pin" | "delete";

export type SwipeDeleteItem = {
  id: string;
  title: string;
  subtitle: string;
};

export const BUTTONS: { label: string; color: string; action: SwipeActionType }[] = [
  { label: "置顶", color: "#3b82f6", action: "pin" },
  { label: "删除", color: "#ef4444", action: "delete" },
];

export const ROW_HEIGHT = 72;
export const ACTION_BUTTON_WIDTH = 72;
export const ACTION_WIDTH = ACTION_BUTTON_WIDTH * BUTTONS.length;
export const THRESHOLD = ACTION_WIDTH / 2;

export const INITIAL_ITEMS: SwipeDeleteItem[] = [
  { id: "1", title: "Latte", subtitle: "Cafe order" },
  { id: "2", title: "Notebook", subtitle: "Office supply" },
  { id: "3", title: "Headphones", subtitle: "Electronics" },
  { id: "4", title: "Running Shoes", subtitle: "Sport gear" },
  { id: "5", title: "Sunglasses", subtitle: "Accessories" },
];
