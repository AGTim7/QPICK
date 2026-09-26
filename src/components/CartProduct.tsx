import type { Product } from "../types/productTypes";
import { Trash2, Minus, Plus } from "lucide-react";

interface Props {
  product: Product;
  className?: string;
  onRemove?: () => void;
  quantity?: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function CartProduct({
  product,
  className,
  onRemove,
  quantity = 1,
  onIncrease,
  onDecrease,
}: Props) {
  return (
    <div
      className={`relative flex w-full items-start gap-3 rounded-2xl bg-white p-3 transition-shadow sm:items-center sm:gap-5 sm:p-4 ${className ?? ""}`}
    >
      <button
        className="absolute right-3 top-3 text-gray-400 transition-colors hover:text-red-600 sm:right-4 sm:top-4"
        onClick={onRemove}
      >
        <Trash2 size={20} />
      </button>

      <div className="flex w-24 shrink-0 flex-col items-center sm:w-32">
        <img
          src={product.img}
          alt={product.title}
          className="my-auto h-24 w-full object-contain sm:h-40"
        />

        <div className="mt-3 flex items-center gap-2 sm:gap-4">
          <button
            onClick={onDecrease}
            disabled={quantity === 1}
            className="rounded-full bg-amber-300 p-1 text-white transition-colors hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Minus size={16} />
          </button>

          <span className="min-w-4 text-center">{quantity}</span>

          <button
            onClick={onIncrease}
            className="rounded-full bg-amber-300 p-1 text-white transition-colors hover:bg-orange-400"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2 py-1 pr-7 sm:gap-3">
        <h3 className="break-words text-sm text-black sm:text-base">
          {product.title}
        </h3>

        <p className="text-gray-500">
          {product.price} ₽
        </p>
      </div>

      <span className="absolute bottom-4 right-5 text-gray-800">
        {(product.price * quantity)} ₽
      </span>
    </div>
  );
}