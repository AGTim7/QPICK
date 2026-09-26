import { Container } from "../components/Container";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";
import type { Product } from "../types/productTypes";
import { useCartContext } from "../context/CartContext";

function CatalogPage() {
  const { data, loading } = useProducts();
  const { addToCart, products } = useCartContext();

  const groupedProducts = data.reduce<Record<string, Product[]>>(
    (groups, product) => {
      if (!groups[product.category]) {
        groups[product.category] = [];
      }
      groups[product.category].push(product);
      return groups;
    },
    {}
  );

  if (loading) {
    return (
      <Container>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-10 lg:grid-cols-3 lg:gap-8">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="aspect-[7/8] w-full animate-pulse rounded-3xl bg-gray-300 sm:rounded-4xl"
            />
          ))}
        </div>
      </Container>
    );
  }

  return (
    <main className="mt-6 sm:mt-8 lg:mt-10">
      <Container>
        {Object.entries(groupedProducts).map(([category, items]) => (
          <section key={category} className="mb-8 sm:mb-10">
            <h2 className="my-4 text-lg text-gray-400 sm:my-5 sm:text-xl">
              {category}
            </h2>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
              {items.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  quantity={
                    products.find((item) => item.product.id === product.id)
                      ?.quantity ?? 0
                  }
                  addToCart={addToCart}
                />
              ))}
            </div>
          </section>
        ))}
      </Container>
    </main>
  );
}

export default CatalogPage;