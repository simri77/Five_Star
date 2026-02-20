export type Food = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "Breakfast" | "Lunch" | "Dinner" | "Drinks";
};

export type Staff = {
  id: number;
  name: string;
  role: string;
  image: string;
};