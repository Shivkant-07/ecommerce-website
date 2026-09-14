import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-20 items-center justify-between border-b bg-white px-6 md:px-12 lg:px-20">
      <Link to="/" className="text-2xl font-bold tracking-[4px]">
        VEYRA
      </Link>

      <div className="hidden gap-8 md:flex">
        <Link to="/" className="text-sm transition hover:text-gray-500">
          Home
        </Link>
        <Link to="/categories" className="text-sm transition hover:text-gray-500">
          Categories
        </Link>
      </div>

      <Link
        to="/login"
        className="bg-black px-5 py-2.5 text-sm text-white transition hover:bg-gray-700"
      >
        Login
      </Link>
    </nav>
  );
}

export default Navbar;