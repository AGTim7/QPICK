import { X } from "lucide-react";
import { useCheckoutForm } from "../hooks/useCheckoutForm";
import { useCartContext } from "../context/CartContext";

interface Props {
  onClose: () => void;
  onComplete: () => void;
}

export default function CheckoutModal({ onClose, onComplete }: Props) {
  const { removeAllFromCart } = useCartContext();
  const { register, formState: { errors }, submit } = useCheckoutForm({ onClose, onComplete });
  const expiryRegister = register("expiryDate");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-3 sm:p-6" onClick={onClose}>
      <section
        className="relative my-auto w-full max-w-md rounded-2xl bg-white p-5 shadow-xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" aria-label="Закрыть окно" onClick={onClose} className="absolute right-4 top-4 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-black">
          <X size={20} />
        </button>

        <h2 id="checkout-title" className="pr-8 text-xl font-semibold sm:text-2xl">Оформление заказа</h2>
        <p className="mt-2 text-sm text-gray-500">Введите данные карты для демонстрационного оформления.</p>

        <form onSubmit={submit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="cardNumber" className="mb-2 block text-sm font-medium">Номер карты</label>
            <input
              id="cardNumber"
              type="text"
              inputMode="numeric"
              autoComplete="cc-number"
              maxLength={16}
              placeholder="1234567812345678"
              aria-invalid={!!errors.cardNumber}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-purple-500"
              {...register("cardNumber", { setValueAs: (value: string) => value.replace(/\D/g, "") })}
            />
            {errors.cardNumber && <p role="alert" className="mt-1 text-sm text-red-600">{errors.cardNumber.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label htmlFor="expiryDate" className="mb-2 block text-sm font-medium">Срок действия</label>
              <input
                id="expiryDate"
                type="text"
                maxLength={5}
                placeholder="ММ/ГГ"
                aria-invalid={!!errors.expiryDate}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-purple-500"
                {...expiryRegister}
                onChange={(event) => {
                  const digits = event.target.value.replace(/\D/g, "").slice(0, 4);
                  const formatted =
                    digits.length > 2
                      ? `${digits.slice(0, 2)}/${digits.slice(2)}`
                      : digits;

                  event.target.value = formatted;
                  expiryRegister.onChange(event);
                }}
              />
              {errors.expiryDate && <p role="alert" className="mt-1 text-sm text-red-600">{errors.expiryDate.message}</p>}
            </div>

            <div>
              <label htmlFor="cvv" className="mb-2 block text-sm font-medium">CVV / CVC</label>
              <input
                id="cvv"
                type="password"
                inputMode="numeric"
                autoComplete="cc-csc"
                maxLength={4}
                placeholder="•••"
                aria-invalid={!!errors.cvv}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-purple-500"
                {...register("cvv", { setValueAs: (value: string) => value.replace(/\D/g, "") })}
              />
              {errors.cvv && <p role="alert" className="mt-1 text-sm text-red-600">{errors.cvv.message}</p>}
            </div>
          </div>

          <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row">
            <button type="button" onClick={onClose} className="w-full rounded-xl border border-gray-300 px-4 py-3 font-medium transition hover:bg-gray-100">
              Отмена
            </button>
            <button onClick={() => {removeAllFromCart(); alert("Заказ оформлен");}} type="submit" className="w-full rounded-xl bg-black px-4 py-3 font-medium text-white transition hover:bg-orange-500 hover:text-black">
              Оформить заказ
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}