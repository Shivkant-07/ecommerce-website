import { Link } from "react-router-dom";

function Navbar() {
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

      
      <Link
        to="/login"
        className="rounded bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-gray-200"
      >
        Login
      </Link>
    </nav>
  );
}

export default Navbar;