import {useEffect, useState} from 'react'
import { getProducts } from '../services/productsService'
import type { Product } from '../types/productTypes'

interface UseProductsResult {
  data: Product[];
  loading: boolean;
  error: string | null;
}

export function useProducts(): UseProductsResult {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts(){
      try{
        setLoading(true);

        const result = await getProducts()
        setData(result)
      } catch (error) {
        setError("Не удалось загрузить товары");
      } finally {
        setLoading(false)
      }
    }
    fetchProducts();
  }, []);

  return { data, loading, error };
}
