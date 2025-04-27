export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
}

export const watches: Product[] = [
  {
    id: 1,
    name: "Casio Classic Silver",
    brand: "Casio",
    price: 1500,
    image: "https://cdn.poehali.dev/files/8332108b-f3a3-4d09-85d7-2e34f28fda20.jpg",
    description: "Классические стальные часы Casio с серебристым браслетом и белым циферблатом. Оснащены кварцевым механизмом и имеют функцию отображения даты."
  },
  {
    id: 2, 
    name: "Emporio Armani Ceramica",
    brand: "Emporio Armani",
    price: 4999,
    image: "https://cdn.poehali.dev/files/cccde458-226b-4ca9-9444-35a53769beea.jpg",
    description: "Элегантные белые керамические часы Emporio Armani с римскими цифрами и хронографом. Идеальный аксессуар для особых случаев."
  },
  {
    id: 3,
    name: "Президент России 1953",
    brand: "Президент России",
    price: 2700,
    image: "https://cdn.poehali.dev/files/b8098961-836d-4b83-b284-f8e03ef941d7.jpg",
    description: "Элитные часы с символикой России и подписью президента. Корпус из нержавеющей стали с позолотой и черным циферблатом."
  },
  {
    id: 4,
    name: "Rolex Diamonds Gold",
    brand: "Rolex",
    price: 2499,
    image: "https://cdn.poehali.dev/files/ec2a59b7-9f5e-4d98-af08-bae19dce1e33.jpg",
    description: "Роскошные золотые часы Rolex, украшенные кристаллами. Идеальный аксессуар для торжественных мероприятий."
  },
  {
    id: 5,
    name: "Casio Digital",
    brand: "Casio",
    price: 549,
    image: "https://cdn.poehali.dev/files/556f9792-4b14-4dce-8c98-23c976a963f5.jpg",
    description: "Культовые цифровые часы Casio с металлическим браслетом. Включают будильник, хронограф и подсветку."
  }
];

export const brands = [...new Set(watches.map(watch => watch.brand))];

export const priceRanges = [
  { id: 1, label: "До 1000 ₽", min: 0, max: 1000 },
  { id: 2, label: "1000 ₽ - 2000 ₽", min: 1000, max: 2000 },
  { id: 3, label: "2000 ₽ - 3000 ₽", min: 2000, max: 3000 },
  { id: 4, label: "Свыше 3000 ₽", min: 3000, max: Infinity }
];
