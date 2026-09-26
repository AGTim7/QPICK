import type { Product } from "../types/productTypes";

import Image1 from "../assets/images/Image1.png";
import Image2 from "../assets/images/Image2.png";
import Image3 from "../assets/images/Image3.png";
import Image4 from "../assets/images/Image4.png";
import Image5 from "../assets/images/Image5.png";
import Image6 from "../assets/images/Image6.png";

export const products: Product[] = [
  {
    id: 1,
    title: "Apple BYZ S852I",
    price: 3527,
    newPrice: 2927,
    rate: 4.7,
    img: Image1,
    category: "Наушники",
  },
  {
    id: 2,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
    img: Image2,
    category: "Наушники",
  },
  {
    id: 3,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
    img: Image3,
    category: "Наушники",
  },
  {
    id: 4,
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,
    img: Image4,
    category: 'Беспроводные наушники',
  },
  {
    id: 5,
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7,
    img: Image5,
    category: 'Беспроводные наушники',
  },
  {
    id: 6,
    title: "BOROFONE BO4",
    price: 7527,
    rate: 4.7,
    img: Image6,
    category: 'Беспроводные наушники',
  },
];