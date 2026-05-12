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
    name: "Набор шариковых ручек BIC 10 цветов",
    category: "Ручки и карандаши",
    price: 349,
    image: "https://images.unsplash.com/photo-1583485088037-697dd0a160b4?w=400&h=300&fit=crop",
    description: "10 ярких цветов, мягкое письмо.",
    popular: true,
    rating: 4.8,
    brand: "BIC"
  },
  {
    id: 2,
    name: "Блокнот с твёрдой обложкой А5 120 листов",
    category: "Тетради и блокноты",
    price: 189,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=300&fit=crop",
    description: "Твёрдая обложка, клетка.",
    popular: true,
    rating: 4.9,
    brand: ""
  },
  {
    id: 3,
    name: "Цветные карандаши Koh-i-Noor 36 цветов",
    category: "Рисование",
    price: 416,
    oldPrice: 520,
    image: "https://images.unsplash.com/photo-1596466361353-4eb2e1b2c170?w=400&h=300&fit=crop",
    description: "Профессиональные карандаши.",
    popular: true,
    rating: 4.7,
    brand: "Koh-i-Noor"
  },
  {
    id: 4,
    name: "Стикеры Post-it 76x76 мм 5 цветов 100 листов",
    category: "Офисная",
    price: 279,
    image: "https://images.unsplash.com/photo-1583485088037-697dd0a160b4?w=400&h=300&fit=crop",
    description: "Классические стикеры.",
    popular: true,
    rating: 4.6,
    brand: "Post-it"
  },
  {
    id: 5,
    name: "Ручка шариковая BIC Cristal синяя",
    category: "Ручки и карандаши",
    price: 29,
    image: "https://images.unsplash.com/photo-1583485088037-697dd0a160b4?w=400&h=300&fit=crop",
    description: "Надёжная классика.",
    popular: false,
    rating: 4.5,
    brand: "BIC"
  },
  {
    id: 6,
    name: "Ручка гелевая Pilot G2 черная 0.7 мм",
    category: "Ручки и карандаши",
    price: 89,
    image: "https://images.unsplash.com/photo-1583485088037-697dd0a160b4?w=400&h=300&fit=crop",
    description: "Мягкое письмо.",
    popular: false,
    rating: 4.6,
    brand: "Pilot"
  },
  {
    id: 7,
    name: "Карандаш простой HB Koh-i-Noor",
    category: "Ручки и карандаши",
    price: 45,
    image: "https://images.unsplash.com/photo-1583485088037-697dd0a160b4?w=400&h=300&fit=crop",
    description: "Твёрдо-мягкий грифель.",
    popular: false,
    rating: 4.4,
    brand: "Koh-i-Noor"
  },
  {
    id: 8,
    name: "Маркер текстовый Boss",
    category: "Маркеры",
    price: 79,
    image: "https://images.unsplash.com/photo-1583485088037-697dd0a160b4?w=400&h=300&fit=crop",
    description: "Яркие цвета.",
    popular: false,
    rating: 4.3,
    brand: "Boss"
  },
  {
    id: 9,
    name: "Корректор жидкий Kores 20мл белый",
    category: "Офисная",
    price: 59,
    image: "https://images.unsplash.com/photo-1583485088037-697dd0a160b4?w=400&h=300&fit=crop",
    description: "Быстро сохнет.",
    popular: false,
    rating: 4.2,
    brand: "Kores"
  }
];

export const categoriesList: string[] = [
  "Ручки и карандаши",
  "Маркеры",
  "Фломастеры",
  "Линейки и циркули",
  "Тетради и блокноты",
  "Рисование",
  "Офисная"
];