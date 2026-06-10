export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  popular: boolean;
  rating: number;
  brand: string;
}

export const productsData: Product[] = [
  {
    id: 1,
    name: "Набор ручек BIC 10 цветов",
    category: "Ручки и карандаши",
    price: 349,
    oldPrice: 420,
    image: "https://avatars.mds.yandex.net/get-mpic/200316/img_id5026275391414280563.jpeg/orig",
    description: "10 ярких цветов, мягкое письмо.",
    popular: true,
    rating: 4.8,
    brand: "BIC"
  },
  {
    id: 2,
    name: "Блокнот А5 120 листов",
    category: "Тетради и блокноты",
    price: 189,
    image: "https://ir.ozone.ru/s3/multimedia-h/6642018053.jpg",
    description: "Твёрдая обложка, клетка.",
    popular: true,
    rating: 4.9,
    brand: "Brauberg"
  },
  {
    id: 3,
    name: "Карандаши Koh-i-Noor 36 цветов",
    category: "Рисование",
    price: 416,
    oldPrice: 520,
    image: "https://basket-10.wbbasket.ru/vol1439/part143908/143908265/images/big/1.webp",
    description: "Профессиональные карандаши.",
    popular: true,
    rating: 4.7,
    brand: "Koh-i-Noor"
  },
  {
    id: 4,
    name: "Стикеры Post-it 5 цветов",
    category: "Офисная",
    price: 279,
    image: "https://s3.ibta.ru/goods/111769/32231f164c52e69fbbd464002ae859c5_xl.jpg",
    description: "Классические стикеры.",
    popular: true,
    rating: 4.6,
    brand: "Post-it"
  },
  {
    id: 5,
    name: "Ручка шариковая синяя",
    category: "Ручки и карандаши",
    price: 29,
    image: "https://avatars.mds.yandex.net/i?id=3204a8f42587a37550bb681000d54e0b_l-10124655-images-thumbs&n=13у",
    description: "Надёжная классика.",
    popular: false,
    rating: 4.5,
    brand: "BIC"
  },
  {
    id: 6,
    name: "Ручка гелевая Pilot G2",
    category: "Ручки и карандаши",
    price: 89,
    image: "https://avatars.mds.yandex.net/get-mpic/5236458/img_id3581197794487052450.jpeg/orig",
    description: "Мягкое письмо.",
    popular: false,
    rating: 4.6,
    brand: "Pilot"
  },
  {
    id: 7,
    name: "Маркер текстовый Boss",
    category: "Маркеры",
    price: 79,
    image: "https://avatars.mds.yandex.net/i?id=42f0eac27c9d578d94bec4eda8498e7e_sr-16340208-images-thumbs&n=13",
    description: "Яркие цвета.",
    popular: false,
    rating: 4.3,
    brand: "Boss"
  },
  {
    id: 8,
    name: "Корректор жидкий Kores",
    category: "Офисная",
    price: 59,
    image: "https://avatars.mds.yandex.net/i?id=b6effb8fdafc3f3c20a003cabeacb8e7_l-5220954-images-thumbs&n=13",
    description: "Быстро сохнет.",
    popular: false,
    rating: 4.2,
    brand: "Kores"
  }
];

export const categoriesList: string[] = [
  "Ручки и карандаши",
  "Маркеры",
  "Рисование",
  "Тетради и блокноты",
  "Офисная"
];