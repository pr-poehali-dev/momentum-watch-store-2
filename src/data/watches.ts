export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  discount?: number;
}

export const watches: Product[] = [
  {
    id: 1,
    name: "Casio Classic Silver",
    brand: "Casio",
    price: 1500,
    image: "https://cdn.poehali.dev/files/8332108b-f3a3-4d09-85d7-2e34f28fda20.jpg",
    description: "Классические стальные часы Casio с серебристым браслетом и белым циферблатом. Оснащены кварцевым механизмом и имеют функцию отображения даты.",
    discount: 20
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
  },
  {
    id: 6,
    name: "Casio Blue Square",
    brand: "Casio",
    price: 1300,
    image: "https://cdn.poehali.dev/files/a62a0043-9efc-4c54-89f4-ba921d470656.jpg",
    description: "Стильные часы Casio с синим циферблатом и черным стальным браслетом. Идеальное сочетание современного дизайна и классической элегантности."
  },
  {
    id: 7,
    name: "Patek Philippe Nautilus",
    brand: "Patek Philippe",
    price: 1700,
    image: "https://cdn.poehali.dev/files/22208fb1-f3c3-4fab-b44a-6174add2f252.jpg",
    description: "Легендарные часы Patek Philippe Nautilus с белым циферблатом и стальным браслетом. Изысканная модель, которая никогда не выходит из моды."
  },
  {
    id: 8,
    name: "Hublot Classic Fusion",
    brand: "Hublot",
    price: 1500,
    image: "https://cdn.poehali.dev/files/204a9414-5c76-4435-bf65-092dccc5a0c2.jpg",
    description: "Элегантные спортивные часы Hublot с черным циферблатом и каучуковым ремешком. Сочетание классики и современности."
  },
  {
    id: 9,
    name: "Rolex Datejust Gold",
    brand: "Rolex",
    price: 1500,
    image: "https://cdn.poehali.dev/files/ca975d54-0ed6-4de8-ad51-213be109c8b3.jpg",
    description: "Золотые часы Rolex Datejust с белым циферблатом и золотым браслетом. Символ статуса и престижа."
  },
  {
    id: 10,
    name: "Tissot 1853 Automatic",
    brand: "Tissot",
    price: 2300,
    image: "https://cdn.poehali.dev/files/3900ca4f-cec3-44bb-ba51-b6f2d48cc8d6.jpg",
    description: "Элегантные часы Tissot с автоматическим механизмом и черным циферблатом. Классический дизайн для повседневного использования."
  }
];

export const brands = [...new Set(watches.map(watch => watch.brand))];

export const priceRanges = {
  min: Math.min(...watches.map(watch => watch.price)),
  max: Math.max(...watches.map(watch => watch.price))
};
