export type ProductCategory = 'Наушники' | 'Беспроводные наушники'

export interface Product {
  id: number;
  title: string;
  price: number;
  rate: number;
  img: string;
  category: ProductCategory;
  newPrice?: number;
}