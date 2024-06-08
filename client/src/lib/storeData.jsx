export const STORE_DATA = [
  {
    id: 1,
    name: "Nike",
    tagline: "Welcome to Nike Store",
    url: "/socialZone",
    category: [
      {
        id: 1,
        name: 'all',
        img: "/assets/store/Nike/storeView.png",
        position:" y: 2, z: -3"   
        
      },
      {
        id: 2,
        women: 'women',
        img: "/assets/store/Nike/storeView.png",
        position:" y: 2, z: -3"
      },
      {
        id: 3,
        women: 'Men',
        img: "/assets/store/Nike/storeView.png",
        position:" y: 2, z: -3"
      },
      {
        id: 4,
        kids: 'kids',
        img: "/assets/store/Nike/storeView.png",
        position:" y: 2, z: -3"
      },
    ]

  },

  {
    id: 2,
    name: "Macdonalds",
    tagline: "Welcome to Macdonlads",
    url: "/socialZone/macdonalds",
    category: [
      {
        id: 1,
        name: 'all',
        img: "/assets/store/Nike/storeView.png",
        connectedViews: [2, 3],
      },
      {
        id: 2,
        women: 'women',
        img: "/assets/store/Nike/storeView.png",
        connectedViews: [1, 3],
      },
      {
        id: 3,
        kids: 'kids',
        img: "/assets/store/Nike/storeView.png",
        connectedViews: [1, 2],
      },
    ]

  },

];
