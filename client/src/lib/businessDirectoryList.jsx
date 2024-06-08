export const BUSINESS_DIRECTORY_LIST = [
    {
      key: "001",
      business: "Macdonalds",
      category: ["Food", "Drink"],
      startDate: new Date("2024-01-25"),
      endDate: new Date("2024-04-20"),
      products: 25,
      save: true,
      info: "/macdonalds",
      iconPath: "/assets/seller_profiles/macdonalds.svg",
      rating: 4,
      upcomingPromotion:null,
    },
      
    {
      key: "002",
      business: "Heineken",
      category: ["Beverages"],
      startDate: new Date("2024-02-20"),
      endDate: new Date("2024-04-20"),
      products: 50,
      save: false,
      info: "/heineken",
      iconPath: "/assets/seller_profiles/Heineken.svg",
      rating: 3,
      upcomingPromotion:null,
    },
  
    {
      key: "003",
      business: "Chipotle",
      category: ["Food"],
      startDate: new Date("2024-03-10"),
      endDate: new Date("2024-04-25"),
      products: 50,
      save: true,
      info: "/chipotle",
      iconPath: "/assets/seller_profiles/chipotle.svg",
      rating: 4,
      upcomingPromotion:null,
    },
  
    {
      key: "004",
      business: "Nestle",
      category: ["Food", "Drink", "Baby Products"],
      startDate: new Date("2024-03-22"),
      endDate: new Date("2024-04-22"),
      products: 35,
      save: false,
      info: "/nestle",
      iconPath: "/assets/seller_profiles/nestle.svg",
      rating: 3.75,
      upcomingPromotion :"/assets/upcomingPromotions/SuperSale.png"
    },
  
    {
      key: "005",
      business: "Feedzai",
      category: ["Food", "Drink", "Baby Products"],
      startDate: new Date("2024-03-18"),
      endDate: new Date("2024-04-26"),
      products: 25,
      save: true,
      info: "/feedzai",
      iconPath: "/assets/seller_profiles/feedzai.svg",
      rating: 4,
      upcomingPromotion :null,
    },
  
    {
      key: "006",
      business: "Nike",
      category: ["Shoes"],
      startDate: new Date("2024-03-22"),
      endDate: new Date("2024-04-30"),
      products: 25,
      save: true,
      info: "/nike",
      iconPath: "/assets/seller_profiles/nike.svg",
      rating: 4,
      upcomingPromotion:null,
    },

    {
      key: "007",
      business: "Dreamron",
      category: ["Haircare", "Beauty"],
      startDate: new Date("2024-03-25"),
      endDate: new Date("2024-05-01"),
      products: 10,
      save: true,
      info: "/dreamron",
      iconPath: "/assets/seller_profiles/dreamaron.svg",
      rating: 4,
      upcomingPromotion:"/assets/upcomingPromotions/haircareProducts.png",
    },

    {
      key: "008",
      business: "Loreal",
      category: ["Skincare" , "Haircare" , "Beauty"],
      startDate: new Date("2024-03-25"),
      endDate: new Date("2024-05-01"),
      products: 10,
      save: false,
      info: "/loreal",
      iconPath: "/assets/seller_profiles/loreal.svg",
      rating: 4,
      upcomingPromotion:"/assets/upcomingPromotions/glamourRetreat.png",
    },
  ];


  BUSINESS_DIRECTORY_LIST.forEach((business) => {
    business.info = `/socialZone${business.info}`; 
});

export default BUSINESS_DIRECTORY_LIST;