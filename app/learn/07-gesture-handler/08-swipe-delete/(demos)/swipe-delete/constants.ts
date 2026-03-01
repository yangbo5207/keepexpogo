export type SwipeDeleteItem = {
  id: string;
  title: string;
  subtitle: string;
};

export const DELETE_WIDTH = 80;
export const THRESHOLD = DELETE_WIDTH / 2;

export const INITIAL_ITEMS: SwipeDeleteItem[] = [
  { id: "1", title: "Latte", subtitle: "Cafe order" },
  { id: "2", title: "Notebook", subtitle: "Office supply" },
  { id: "3", title: "Headphones", subtitle: "Electronics" },
  { id: "4", title: "Running Shoes", subtitle: "Sport gear" },
  { id: "5", title: "Sunglasses", subtitle: "Accessories" },
];
