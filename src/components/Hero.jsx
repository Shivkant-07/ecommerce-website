import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          New Season Arrivals
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
          Check out our latest collection of trendy clothes designed for your everyday comfort and style.
        </p>

        {/* Button */}
        <div>
          <Link
            to="/shop"
            className="bg-black text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transition"
          >
            Shop Now
          </Link>
        </div>

      </div>
    </section>
  );
}