import type { Product } from "../types/productTypes";
import { Star } from "lucide-react";
import { useNavigate } from "react-router";

interface Props {
  product: Product;
  quantity: number;
  addToCart: (product: Product) => void;
  className?: string;
}

function ProductCard({
  product,
  quantity,
  addToCart,
  className,
}: Props) {
  const navigate = useNavigate();
  const isInCart = quantity > 0;

  return (
    <div
      className={`flex aspect-[7/8] w-full flex-col items-center rounded-3xl bg-white p-4 shadow-[0_0_20px_rgba(0,0,0,0.1)] sm:rounded-4xl sm:p-5 ${className ?? ""}`}
    >
      <img
        src={product.img}
        alt={product.title}
        className="my-auto max-h-[55%] w-full max-w-40 object-contain sm:max-w-48 lg:max-w-55"
      />

      <div className="flex w-full flex-col gap-4 sm:gap-5 lg:gap-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 text-base font-semibold leading-snug sm:text-lg">
            {product.title}
          </h3>

          <p className="shrink-0 text-base font-bold text-yellow-500 sm:text-lg lg:text-xl">
            {product.price} ₽
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Star className="ml-0.5 w-5 text-yellow-500 sm:w-6" />
            <p className="text-sm text-gray-400 sm:text-base">
              {product.rate}
            </p>
          </div>

          <button
            className={`mr-1 text-sm transition-colors duration-200 sm:text-base ${
              isInCart
                ? "text-green-600"
                : "hover:text-orange-500"
            }`}
            onClick={() =>
              isInCart ? navigate("/cart") : addToCart(product)
            }
          >
            {isInCart ? "В корзине" : "Купить"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;