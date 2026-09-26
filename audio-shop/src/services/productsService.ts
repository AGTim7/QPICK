import { products } from "../data/products";
import type { Product } from "../types/productTypes";

export function getProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1500);
  });
}