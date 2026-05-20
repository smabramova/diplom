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
    oldPrice: 420,
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
    brand: "Brauberg"
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
    image: "https://images.unsplash.com/photo-1596466361353-4eb2e1b2c170?w=400&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1603712788481-8f2e7c0f07dc?w=400&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1612282131027-5c5b1f8b1b10?w=400&h=300&fit=crop",
    description: "Быстро сохнет.",
    popular: false,
    rating: 4.2,
    brand: "Kores"
  },
  {
    id: 10,
    name: "Ножницы детские 13 см",
    category: "Офисная",
    price: 120,
    image: "https://images.unsplash.com/photo-1597732988003-7d12b1b70c82?w=400&h=300&fit=crop",
    description: "Безопасные лезвия.",
    popular: false,
    rating: 4.7,
    brand: "ErichKrause"
  },
  {
    id: 11,
    name: "Точилка механическая",
    category: "Ручки и карандаши",
    price: 215,
    image: "https://images.unsplash.com/photo-1603468620905-0f5e9a4f5b7d?w=400&h=300&fit=crop",
    description: "Для всех типов карандашей.",
    popular: false,
    rating: 4.0,
    brand: "Faber-Castell"
  },
  {
    id: 12,
    name: "Папка-скоросшиватель А4",
    category: "Офисная",
    price: 85,
    image: "https://images.unsplash.com/photo-1620288627223-53302f4b5c26?w=400&h=300&fit=crop",
    description: "Пластиковая, цветная.",
    popular: false,
    rating: 4.1,
    brand: "Attache"
  },
  {
    id: 13,
    name: "Линейка металлическая 20 см",
    category: "Линейки и циркули",
    price: 150,
    image:"https://images.unsplash.com/photo-1586476375921-7b7d0e6b8c1f?w=400&h=300&fit=crop",
    description: "Нержавеющая сталь.",
    popular: false,
    rating: 4.5,
    brand: "Staedtler"
  },
  {
    id: 14,
    name: "Циркуль металлический",
    category: "Линейки и циркули",
    price: 320,
    image: "https://images.unsplash.com/photo-1590156664704-b7a2c6e5f4d6?w=400&h=300&fit=crop",
    description: "С двумя насадками.",
    popular: false,
    rating: 4.3,
    brand: "Koh-i-Noor"
  },
  {
    id: 15,
    name: "Фломастеры акварельные 18 цветов",
    category: "Рисование",
    price: 390,
    oldPrice: 450,
    image: "https://images.unsplash.com/photo-1584627014543-f47b9150e3d6?w=400&h=300&fit=crop",
    description: "Размываются водой.",
    popular: true,
    rating: 4.8,
    brand: "Jovi"
  },
  {
    id: 16,
    name: "Альбом для рисования А3",
    category: "Рисование",
    price: 230,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85e65b?w=400&h=300&fit=crop",
    description: "Плотная бумага 180г/м².",
    popular: false,
    rating: 4.6,
    brand: "Brauberg"
  },
  {
    id: 17,
    name: "Клей-карандаш 21г",
    category: "Офисная",
    price: 75,
    image: "https://images.unsplash.com/photo-1616628188458-4c7b5b5f8b5e?w=400&h=300&fit=crop",
    description: "Прозрачный, быстросохнущий.",
    popular: false,
    rating: 4.4,
    brand: "UHU"
  },
  {
    id: 18,
    name: "Степлер №10",
    category: "Офисная",
    price: 245,
    image: "https://images.unsplash.com/photo-1601132359864-c974e79f3e47?w=400&h=300&fit=crop",
    description: "Надёжный металлический.",
    popular: false,
    rating: 4.5,
    brand: "KW-trio"
  },
  {
    id: 19,
    name: "Набор текстовыделителей 5 цветов",
    category: "Маркеры",
    price: 165,
    image: "https://images.unsplash.com/photo-1610614819513-1e6a0b6c5b4e?w=400&h=300&fit=crop",
    description: "Флуоресцентные.",
    popular: true,
    rating: 4.7,
    brand: "Stabilo"
  },
  {
    id: 20,
    name: "Дырокол на 2 отверстия",
    category: "Офисная",
    price: 195,
    image: "https://images.unsplash.com/photo-1606857521015-7b1d0c8b6b2f?w=400&h=300&fit=crop",
    description: "До 10 листов.",
    popular: false,
    rating: 4.3,
    brand: "ErichKrause"
  }
];

export const categoriesList: string[] = [
  "Ручки и карандаши",
  "Маркеры",
  "Рисование",
  "Тетради и блокноты",
  "Офисная",
  "Линейки и циркули"
];