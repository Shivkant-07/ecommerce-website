import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useShop } from '../context/ShopContext';

export default function WishlistPage() {
    const { wishlist, toggleWishlist, addToCart } = useShop();

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="px-6 py-16 md:px-12 lg:px-20">
                <div className="mb-12 text-center">
                    <p className="mb-2 text-xs tracking-[4px] text-gray-500">SAVED ITEMS</p>
                    <h1 className="text-3xl font-bold uppercase md:text-4xl">My Wishlist</h1>
                </div>

                {wishlist.length === 0 ? (
                    <div className="py-20 text-center">
                        <p className="mb-6 text-gray-500">Your wishlist is currently empty.</p>
                        <Link
                            to="/categories"
                            className="inline-block bg-black px-8 py-3 text-sm text-white transition hover:bg-gray-800"
                        >
                            Explore Categories
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {wishlist.map((item) => (
                            <div key={item.id} className="group relative flex flex-col">
                                <div className="relative mb-4 h-[350px] bg-gray-100 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                    {/* Remove from Wishlist Button */}
                                    <button
                                        onClick={() => toggleWishlist(item)}
                                        className="absolute top-3 right-3 rounded-full bg-white/90 p-2 text-black transition hover:bg-white shadow"
                                    >
                                        ❌
                                    </button>
                                </div>

                                <div className="flex flex-col flex-grow">
                                    <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
                                    <p className="mt-1 text-sm font-semibold text-gray-700">{item.price}</p>

                                    {/* Move to Bag Button */}
                                    <button
                                        onClick={() => {
                                            addToCart(item);
                                            toggleWishlist(item); // Bag mein daalne ke baad wishlist se hata sakte hain ya rakh bhi sakte hain
                                        }}
                                        className="mt-3 w-full bg-black py-2.5 text-sm text-white transition hover:bg-gray-800"
                                    >
                                        Move to Bag
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}