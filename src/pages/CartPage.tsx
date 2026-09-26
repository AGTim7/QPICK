import { useState } from "react";
import CartProduct from "../components/CartProduct";
import { Container } from "../components/Container";
import { useCartContext } from "../context/CartContext";
import { AnimatePresence, motion } from "motion/react";
import CheckoutModal from "../components/CheckoutModal";

function CartPage() {
  const {
    products,
    cartSum,
    removeAllFromCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartContext();

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <main className="mt-6 sm:mt-8">
      <Container>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <h2 className="text-xl font-medium sm:text-2xl">Корзина</h2>

          <button
            onClick={removeAllFromCart}
            className="text-sm text-gray-500 transition-colors hover:text-red-600 sm:text-base"
          >
            Очистить корзину
          </button>
        </div>

        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
          <div className="flex min-w-0 flex-1 flex-col gap-5 sm:gap-8">
            <AnimatePresence initial={false}>
              {products.map(({ product, quantity }) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    marginBottom: 0,
                    scale: 0.98,
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <CartProduct
                    product={product}
                    quantity={quantity}
                    onIncrease={() => increaseQuantity(product.id)}
                    onDecrease={() => decreaseQuantity(product.id)}
                    onRemove={() => removeFromCart(product.id)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex w-full flex-col justify-between gap-4 rounded-4xl bg-white shadow-md lg:sticky lg:top-4 lg:w-72 lg:shrink-0">
            <div className="flex justify-between gap-4 p-4">
              <h3 className="font-medium">ИТОГО</h3>
              <p className="font-medium">{cartSum.toLocaleString("ru-RU")} ₽</p>
            </div>

            <button onClick={() => setIsCheckoutOpen(true)} className="w-full rounded-4xl h-18 bg-black text-sm text-white transition-colors hover:bg-orange-500 hover:text-black sm:py-4 sm:text-base">
              Перейти к оформлению
            </button>
          </div>
        </div>
      </Container>
      {isCheckoutOpen && (
        <CheckoutModal
          onClose={() => setIsCheckoutOpen(false)}
          onComplete={() => {
            // Здесь можно показать уведомление об успешном демо-заказе.
          }}
        />
      )}
    </main>
  );
}

export default CartPage;