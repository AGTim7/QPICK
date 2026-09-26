import { useEffect, useState } from "react";
import type { Product } from "../types/productTypes";

const CART_STORAGE_KEY = "cart";

export interface CartItem {
  product: Product;
  quantity: number;
}

export function useCart() {
  const [products, setProducts] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);

      if (!savedCart) return [];

      const parsed = JSON.parse(savedCart);

      if (parsed.length && !parsed[0].product) {
        const result: CartItem[] = [];

        parsed.forEach((product: Product) => {
          const existing = result.find(
            (item) => item.product.id === product.id
          );

          if (existing) {
            existing.quantity++;
          } else {
            result.push({ product, quantity: 1 });
          }
        });

        return result;
      }

      return parsed;
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const totalValueCart = products.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const cartSum = products.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  function addToCart(product: Product) {
    setProducts((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { product, quantity: 1 }];
    });
  }

  function increaseQuantity(productId: number) {
    setProducts((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(productId: number) {
    setProducts((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(productId: number) {
    setProducts((prev) =>
      prev.filter((item) => item.product.id !== productId)
    );
  }

  function removeAllFromCart() {
    const result = confirm("Вы уверены что хотите очистить корзину?");

    if (result) {
      setProducts([]);
    }
  }

  return {
    products,
    totalValueCart,
    cartSum,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    removeAllFromCart,
  };
}