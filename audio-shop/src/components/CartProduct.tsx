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

export default function CartItem({ product, className, onRemove, quantity, onIncrease, onDecrease }: Props) {
  return (
    <div className={`relative flex w-200 h-50 items-center gap-6 rounded-2xl bg-white p-4 shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-lg ${className}`}>
      <button className="absolute right-4 top-3 text-red-400 transition-colors hover:text-red-600" onClick={onRemove}>
        <Trash2 size={24} />
      </button>

      <div className="flex h-full w-30 flex-col items-center">
        <img src={product.img} alt={product.title} className=" w-full object-contain my-auto" />
        <div className="flex items-center gap-4 mt-4">
          <button onClick={onDecrease} disabled={quantity === 1} className="rounded-full bg-[#FFCE7F] p-1 text-white transition-colors hover:bg-orange-400">
            <Minus size={18} />
          </button>
          <span>{quantity}</span>
          <button onClick={onIncrease} className="rounded-full bg-[#FFCE7F] p-1 text-white transition-colors hover:bg-orange-400">
            <Plus size={18} />
          </button>
        </div>
      </div>

      <div className="flex h-full flex-col justify-center gap-1">
        <h3 className="text-black">{product.title}</h3>
        <p className="text-gray-400">{product.price.toLocaleString("ru-RU")} ₽</p>
      </div>

      <span className="absolute bottom-4 right-5 text-balck">
        {product.price.toLocaleString("ru-RU")} ₽
      </span>
    </div>
  );
}