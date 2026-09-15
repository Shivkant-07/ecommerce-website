import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useShop } from '../context/ShopContext';

export default function CartPage() {
    const { cart, removeFromCart, addToCart, decreaseQuantity } = useShop();

    // Price string (jaise "₹1,299") ko number mein convert karke total calculate karna
    const subtotal = cart.reduce((total, item) => {
        const cleanPrice = Number(item.price.replace(/[^\d]/g, ""));
        return total + cleanPrice * item.quantity;
    }, 0);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="px-6 py-16 md:px-12 lg:px-20">
                <div className="mb-12 text-center">
                    <p className="mb-2 text-xs tracking-[4px] text-gray-500">YOUR SHOPPING BAG</p>
                    <h1 className="text-3xl font-bold uppercase md:text-4xl">Bag ({cart.length})</h1>
                </div>

                {cart.length === 0 ? (
                    <div className="py-20 text-center">
                        <p className="mb-6 text-gray-500">Your shopping bag is empty.</p>
                        <Link
                            to="/categories"
                            className="inline-block bg-black px-8 py-3 text-sm text-white transition hover:bg-gray-800"
                        >
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                        {/* Items List */}
                        <div className="lg:col-span-2 space-y-6">
                            {cart.map((item) => (
                                <div key={item.id} className="flex gap-4 border-b border-gray-200 pb-6 items-center">
                                    <img src={item.image} alt={item.name} className="h-24 w-20 object-cover bg-gray-100" />
                                    <div className="flex-grow">
                                        <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
                                        <p className="mt-1 text-sm font-semibold text-gray-700">{item.price}</p>
                                        <div className="mt-2 flex items-center gap-3">
                                            <div className="flex items-center border border-gray-300 rounded">
                                                <button
                                                    onClick={() => decreaseQuantity(item.id)}
                                                    className="px-2.5 py-0.5 text-sm hover:bg-gray-100 transition"
                                                    title="Decrease"
                                                >
                                                    -
                                                </button>
                                                <span className="px-3 py-0.5 text-xs font-semibold">{item.quantity}</span>
                                                <button
                                                    onClick={() => addToCart(item)}
                                                    className="px-2.5 py-0.5 text-sm hover:bg-gray-100 transition"
                                                    title="Increase"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-xs text-red-500 transition hover:text-red-700 underline"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary Box */}
                        <div className="bg-gray-50 p-6 h-fit border border-gray-200">
                            <h3 className="text-lg font-bold mb-4">Order Summary</h3>
                            <div className="flex justify-between mb-3 text-sm text-gray-600">
                                <span>Subtotal</span>
                                <span>₹{subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between mb-4 text-sm text-gray-600">
                                <span>Shipping</span>
                                <span className="text-green-600 font-medium">Free</span>
                            </div>
                            <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-base mb-6">
                                <span>Total</span>
                                <span>₹{subtotal.toLocaleString()}</span>
                            </div>
                            <button className="w-full bg-black py-3 text-sm text-white transition hover:bg-gray-800">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}