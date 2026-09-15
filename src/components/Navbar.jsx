import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function Navbar() {
  const { cart, wishlist } = useShop();


  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-gray-800 bg-gray-900 px-6 text-white md:px-12 lg:px-20 shadow-md">
      
      <Link to="/" className="text-2xl font-bold tracking-[4px] text-white">
        VEYRA
      </Link>

      
      <div className="hidden gap-8 md:flex">
        <Link to="/" className="text-sm text-gray-300 transition hover:text-white">
          Home
        </Link>
        <Link to="/categories" className="text-sm text-gray-300 transition hover:text-white">
          Categories
        </Link>
      </div>

  
      <div className="flex items-center gap-6">
        
        <Link to="/wishlist" className="relative text-sm text-gray-300 transition hover:text-white">
          Wishlist
          {wishlist.length > 0 && (
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black">
              {wishlist.length}
            </span>
          )}
        </Link>

        {/* Cart Link */}
        <Link to="/cart" className="relative text-sm text-gray-300 transition hover:text-white">
          Bag
          {cartCount > 0 && (
            <span className="absolute -right-3 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black">
              {cartCount}
            </span>
          )}
        </Link>

  
        <Link
          to="/login"
          className="rounded bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-gray-200"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;