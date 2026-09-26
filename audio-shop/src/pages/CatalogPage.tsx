import { Container } from "../components/Container";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";
import type { Product } from "../types/productTypes";

function CatalogPage() {
  const { data, loading } = useProducts();
  const { addToCart, products } = useCart();

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
        <div className="mt-10 grid grid-cols-3 gap-8">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="h-120 animate-pulse rounded-4xl bg-gray-300"
            />
          ))}
        </div>
      </Container>
    );
  }

  return (
    <main className="mt-10">
      <Container>
        {Object.entries(groupedProducts).map(([category, items]) => (
          <section key={category}>
            <h2 className="my-5 text-xl text-gray-400">{category}</h2>

            <div className="grid grid-cols-3 gap-8">
              {items.map((product) => (
                <ProductCard
                  product={product}
                  quantity={products.find((item) => item.product.id === product.id)?.quantity ?? 0}
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