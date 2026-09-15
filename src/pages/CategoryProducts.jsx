import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useShop } from '../context/ShopContext';

export default function CategoryProducts() {
    const { categoryName } = useParams();
    const { addToCart, toggleWishlist, wishlist } = useShop();

    const allProducts = {
        men: [
            { id: 1, name: "Tailored Slim Trousers", price: "₹1,299", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop&q=60" },
            { id: 2, name: "Oversized Beige Hoodie", price: "₹999", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=60" },
            { id: 3, name: "Classic Black Blazer", price: "₹1,799", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=60" },
            { id: 4, name: "Casual Linen Shirt", price: "₹899", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=60" },
        ],
        women: [
            { id: 5, name: "Elegant Slip Dress", price: "₹1,499", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&auto=format&fit=crop&q=60" },
            { id: 6, name: "Knitted Woolen Cardigan", price: "₹1,199", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&auto=format&fit=crop&q=60" },
            { id: 7, name: "High-Waist Pleated Skirt", price: "₹999", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&auto=format&fit=crop&q=60" },
            { id: 8, name: "Chic Trench Coat", price: "₹1,999", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=60" },
        ],
        shoes: [
            { id: 9, name: "Classic Leather Chelsea Boots", price: "₹1,899", image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&auto=format&fit=crop&q=60" },
            { id: 10, name: "Minimalist White Sneakers", price: "₹1,299", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=60" },
            { id: 11, name: "Suede Formal Loafers", price: "₹1,499", image: "https://plus.unsplash.com/premium_photo-1787075042126-e4d9685cdb7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3VlZGUlMjBGb3JtYWwlMjBMb2FmZXJzfGVufDB8fDB8fHww" },
            { id: 12, name: "Running Sport Shoes", price: "₹1,399", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60" },
        ],
        accessories: [
            { id: 13, name: "Minimalist Casual Watch", price: "₹1,199", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60" },
            { id: 14, name: "Leather Crossbody Bag", price: "₹1,599", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop&q=60" },
            { id: 15, name: "Classic UV Sunglasses", price: "₹699", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=60" },
            { id: 16, name: "Minimalist Metal Belt", price: "₹499", image: "https://images.unsplash.com/photo-1667284152823-0b07a791fb79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWluaW1hbGlzdCUyME1ldGFsJTIwQmVsdHxlbnwwfHwwfHx8MA%3D%3D" },
        ],
    };

    const currentProducts = allProducts[categoryName] || [];

    return (
        <div>
            <Navbar />

            <div className="px-6 py-16 md:px-12 lg:px-20">
                <div className="mb-12 text-center">
                    <p className="mb-2 text-xs tracking-[4px] text-gray-500">
                        COLLECTION
                    </p>
                    <h1 className="text-3xl font-bold uppercase md:text-4xl">
                        {categoryName}
                    </h1>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {currentProducts.map((item) => {
                        const isWishlisted = wishlist.some((w) => w.id === item.id);

                        return (
                            <div key={item.id} className="group relative flex flex-col">
                                <div className="relative mb-4 h-[350px] bg-gray-100 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                    {/* Wishlist Button */}
                                    <button
                                        onClick={() => toggleWishlist(item)}
                                        className="absolute top-3 right-3 rounded-full bg-white/80 p-2 text-black transition hover:bg-white shadow"
                                    >
                                        {isWishlisted ? "❤️" : "🤍"}
                                    </button>
                                </div>

                                <div className="flex flex-col flex-grow">
                                    <h3 className="text-base font-medium text-gray-900">
                                        {item.name}
                                    </h3>
                                    <p className="mt-1 text-sm font-semibold text-gray-700">
                                        {item.price}
                                    </p>

                                    {/* Add to Bag Button */}
                                    <button
                                        onClick={() => addToCart(item)}
                                        className="mt-3 w-full bg-black py-2.5 text-sm text-white transition hover:bg-gray-800"
                                    >
                                        Add to Bag
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div style={{ marginTop: "100px" }} className="text-center">
                    <Link
                        to="/categories"
                        className="inline-block bg-black px-8 py-4 text-sm rounded-xl text-white transition hover:bg-gray-700"
                    >
                        Back to Categories
                    </Link>
                </div>
            </div>
        </div>
    );
}