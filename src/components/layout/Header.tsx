import { Link, NavLink } from "react-router-dom";
import {Container} from "../Container";
import { Heart, ShoppingCart } from "lucide-react";
import { useCartContext } from "../../context/CartContext";


function Header() {

  const { products, totalValueCart, addToCart } = useCartContext();

  let totalValueFavorites = 0;

  return (
    <header className="py-4">
      <Container className="flex justify-between items-center">
        <Link to="/" className="w-fit text-2xl font-bold tracking-tight text-black transition-colors duration-200 hover:text-orange-500">QPICK</Link>

      <nav className="flex gap-6" >
        <NavLink to='/favorites' className="relative">
          <Heart className="text-gray-400 transition-all hover:text-red-500 hover:scale-105 duration-200"/>
          {totalValueFavorites > 0 && <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-yellow-500 text-white text-xs flex items-center justify-center">
            {totalValueFavorites}
          </div>}
        </NavLink>
        <NavLink to='/cart' className='relative'>
          <ShoppingCart className="text-gray-400 transition-all hover:text-green-500 hover:scale-105 duration-200"/>
          {totalValueCart > 0 && <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-yellow-500 text-white text-xs flex items-center justify-center">
            {totalValueCart}
          </div>}
        </NavLink>
      </nav>
      </Container>
    </header>
  )
}

export default Header