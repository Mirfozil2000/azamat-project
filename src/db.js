export const menuItems = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Blog", link: "/blog" },
  { id: 3, title: "About", link: "/about" },
  { id: 4, title: "Contact", link: "/contact" },
];

export const footerInfo = {
  aboutText:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis, minima minus odio!",
  navigationLinks: {
    column1: [
      { id: 1, title: "Home", link: "#" },
      { id: 2, title: "Buy", link: "#" },
      { id: 3, title: "Rent", link: "#" },
      { id: 4, title: "Properties", link: "#" },
    ],
    column2: [
      { id: 5, title: "About Us", link: "#" },
      { id: 6, title: "Privacy Policy", link: "#" },
      { id: 7, title: "Contact Us", link: "#" },
      { id: 8, title: "Terms", link: "#" },
    ],
  },
  socialLinks: [
    { id: 1, icon: "icon-facebook", link: "#" },
    { id: 2, icon: "icon-twitter", link: "#" },
    { id: 3, icon: "icon-instagram", link: "#" },
    { id: 4, icon: "icon-linkedin", link: "#" },
  ],
  copyrightText:
    "Copyright © All rights reserved | This template is made with ❤ by Colorlib",
};

export const productsData = [
    {
      id: 1,
      offerTypes: ['Sale', 'Rent'],
      image: 'images/img_1.jpg',
      title: '625 S. Berendo St',
      location: '625 S. Berendo St Unit 607 Los Angeles, CA 90005',
      price: '$2,265,500',
      specs: [
        { label: 'Beds', value: '2+' },
        { label: 'Baths', value: '2' },
        { label: 'SQ FT', value: '7,000' },
      ],
    },
];

export const listingTypes = [
    'Condo',
    'Commercial Building',
    'Land Property'
  ];
  
  export const offerTypes = [
    'For Sale',
    'For Rent',
    'For Lease'
  ];
  
  export const cities = [
    'New York',
    'Brooklyn',
    'London',
    'Japan',
    'Philippines'
  ];
  
  export const sortOptions = [
    'Sort by',
    'Price Ascending',
    'Price Descending'
  ];
  
 export const slides = [
    {
      id: 1,
      type: 'For Rent',
      title: '871 Crenshaw Blvd',
      price: '$2,250,500',
      buttonText: 'See Details',
      imageUrl: 'images/hero_bg_1.jpg' 
    },
    {
      id: 2,
      type: 'For Sale',
      title: '625 S. Berendo St',
      price: '$1,000,500',
      buttonText: 'See Details',
      imageUrl: 'images/hero_bg_2.jpg' 
    }
  ];