import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function CategoriesPage() {
  const categories = [
    { name: "Men", slug: "men", image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=600&auto=format&fit=crop&q=60" },
    { name: "Women", slug: "women", image: "https://plus.unsplash.com/premium_photo-1679440415182-c362deb2fd40?w=600&auto=format&fit=crop&q=60" },
    { name: "Shoes", slug: "shoes", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60" },
    { name: "Accessories", slug: "accessories", image: "https://images.unsplash.com/3/www.madebyvadim.com.jpg?w=600&auto=format&fit=crop&q=60" },
  ];

  return (
    <div>
      <Navbar />
      <div className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs tracking-[4px] text-gray-500">EXPLORE</p>
          <h1 className="text-3xl font-bold md:text-4xl">Shop By Category</h1>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link 
              key={cat.slug} 
              to={`/categories/${cat.slug}`} 
              className="group relative h-[400px] overflow-hidden"
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105" 
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="mb-3 text-2xl font-semibold">{cat.name}</h3>
                <span className="bg-white px-4 py-2 text-sm text-black inline-block">Explore</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}