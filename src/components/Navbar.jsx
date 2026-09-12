import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
    
        <div>
          <Link to="/" className="text-xl font-bold text-gray-800">
            ClothStore
          </Link>
        </div>

        {/* Links */}
        <ul className="flex space-x-6 text-gray-600 font-medium">
          <li>
            <Link to="/" className="hover:text-black">Home</Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-black">Shop</Link>
          </li>
          <li>
            <Link to="/categories" className="hover:text-black">Categories</Link>
          </li>
        </ul>

        
        <div>
          <Link to="/cart" className="bg-black text-white px-4 py-2 rounded text-sm">
            Cart (0)
          </Link>
        </div>

      </div>
    </header>
  );
}