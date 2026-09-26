import CartProduct from "../components/CartProduct";
import { Container } from "../components/Container";
import { useCart } from "../hooks/useCart";

function CartPage() {
  const {
    products,
    cartSum,
    removeAllFromCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  return (
    <main className="mt-8">
      <Container>
        <div className="flex items-center gap-5">
          <h2 className="text-xl">Корзина</h2>

          <button
            onClick={removeAllFromCart}
            className="mt-0.5 text-[15px] text-gray-400 hover:text-red-500"
          >
            Очистить корзину
          </button>
        </div>

        <div className="flex justify-between">
          <div className="mt-4 flex flex-col gap-10">
            {products.map(({ product, quantity }) => (
              <CartProduct
                key={product.id}
                product={product}
                quantity={quantity}
                onIncrease={() => increaseQuantity(product.id)}
                onDecrease={() => decreaseQuantity(product.id)}
                onRemove={() => removeFromCart(product.id)}
              />
            ))}
          </div>

          <div className="flex h-35 w-85 flex-col justify-between rounded-4xl bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)]">
            <div className="flex justify-between p-5">
              <h3>ИТОГО</h3>
              <p>{cartSum} ₽</p>
            </div>

            <button className="h-20 w-full rounded-4xl bg-black text-white hover:bg-orange-500 hover:text-black">
              Перейти к оформлению
            </button>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default CartPage;