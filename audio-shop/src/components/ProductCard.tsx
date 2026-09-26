import type { Product } from "../types/productTypes";
import { Star } from "lucide-react";
import { useNavigate } from "react-router"

interface Props {
  product: Product;
  quantity: number;
  addToCart: (product: Product) => void;
  className?: string;
}

function ProductCard({ product, quantity, addToCart, className }: Props) {
  let navigate = useNavigate();
  const isInCart = quantity > 0;

  return (
    <div
      className={`flex aspect-[7/8] w-full flex-col items-center rounded-4xl bg-white p-5 shadow-[0_0_20px_rgba(0,0,0,0.1)] ${className ?? ""}`}
    >
      <img
        src={product.img}
        alt={product.title}
        className="my-auto w-55 object-cover"
      />

      <div className="flex w-full flex-col gap-6">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-xl font-bold text-yellow-500">
            {product.price} ₽
          </p>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Star className="ml-1 w-6 text-yellow-500" />
            <p className="text-gray-400">{product.rate}</p>
          </div>

          <button
            className={`mr-1.5 transition-colors duration-200 ${
              isInCart
                ? "text-green-600"
                : "hover:text-orange-500"
            }`}
              
            onClick={() => !isInCart? addToCart(product) : navigate('/cart')}
          >
            {isInCart ? "В корзине" : "Купить"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;