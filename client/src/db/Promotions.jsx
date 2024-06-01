import { CATEGORIES } from "../lib/consts/categories";

export const PROMOTIONS = [
  {
    key: "001",
    business: "Macdonalds",
    category: [CATEGORIES.FOOD, CATEGORIES.DRINK],
    startDate : new Date("2024-01-25"),
    endsDate: new Date("2024-04-20"),
    products: 25,
    save: true,
    info: "/macdonalds",
  },
  {
    key: "002",
    business: "Heineken",
    category: [CATEGORIES.BEVERAGES],
    startsDate :new Date("2024-02-20"),
    endsDate : new Date("2024-04-20"),
    products: 50,
    save: true,
    info: "/heineken",
  },

  {
    key: "003",
    business: "Chipotle",
    category: [CATEGORIES.FOOD],
    startsDate :new Date("2024-03-10"),
    endsDate : new Date("2024-04-25"),
    products: 50,
    save: true,
    info: "/chipotle",
  },

  {
    key: "004",
    business: "Nestle",
    category: [CATEGORIES.FOOD, CATEGORIES.DRINK, CATEGORIES.BABY_PRODUCTS],
    startsDate :new Date("2024-03-22"),
    endsDate : new Date("2024-04-22"),
    products: 35,
    save: true,
    info: "/nestle",
  },

  {
    key: "005",
    business: "Feedzai",
    category: [CATEGORIES.FOOD, CATEGORIES.DRINK, CATEGORIES.BABY_PRODUCTS],
    startsDate :new Date("2024-03-18"),
    endsDate : new Date("2024-04-26"),
    products: 25,
    save: true,
    info: "/feedzai",
  },

  {
    key: "006",
    business: "Nike",
    category: [CATEGORIES.FOOD, CATEGORIES.DRINK, CATEGORIES.BABY_PRODUCTS],
    startsDate :new Date("2024-03-22"),
    endsDate : new Date("2024-04-30"),
    products: 25,
    save: true,
    info: "/nike",
  },
];
