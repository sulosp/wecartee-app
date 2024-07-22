export const PRODUCTS_LIST = [
  {
    id: 1,
    store: "Nike",
    products: [
      {
        id: 1,
        type: 'shoes',
        gender: 'women',
        product: 'Women Racing Shoes',
        collections: 'Nike Vaporfly 3',
        attributes: {size: 5, color: 'Red'},  
        price: 349,
        genere: 'Lifestyle',
        img: [
          '/assets/Products/Nike-Vaporfly-3-4.png',
          '/assets/Products/Nike-Vaporfly-3-1.png',
          '/assets/Products/Nike-Vaporfly-3-2.png',
          '/assets/Products/Nike-Vaporfly-3-3.png'
        ],
        cart:true
      },
      {
        id: 2,
        type: 'shoes',
        gender: 'women',
        product: 'Nike Dunk Low SE',
        collections: 'Nike Dunk',
        attributes: ['Size: 6', 'Color: Blue'],  
        price: 249,
        genere: 'Athletics',
        img: [
          '/assets/Products/dunk-low-womens-shoes-1.webp',
          '/assets/Products/dunk-low-womens-shoes-2.webp',
          '/assets/Products/dunk-low-womens-shoes-3.webp',
          '/assets/Products/dunk-low-womens-shoes-4.webp'
        ],
        cart:false
      },
      {
        id: 3,
        type: 'shoes',
        gender: 'women',
        product: 'Nike E-Series 1.0',
        collections: 'Younger Kids Shoes',
        attributes: ['Size: 7', 'Color: Green'],  
        price: 249,
        genere: 'Lifestyle',
        img: [
          '/assets/Products/force-1-low-easyon-baby-toddler-shoes-4.webp',
          '/assets/Products/force-1-low-easyon-baby-toddler-shoes-1.webp',
          '/assets/Products/force-1-low-easyon-baby-toddler-shoes-2.webp',
          '/assets/Products/force-1-low-easyon-baby-toddler-shoes-3.webp'
        ]
      }
    ]
  }
];
