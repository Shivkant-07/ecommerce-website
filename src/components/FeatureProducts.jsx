export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Oversized Beige Hoodie",
      price: "$75.00",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    },
    {
      id: 2,
      name: "Tailored Slim Trousers",
      price: "$90.00",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    },
    {
      id: 3,
      name: "Classic Leather Chelsea Boots",
      price: "$140.00",
      image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    },
    {
      id: 4,
      name: "Minimalist Casual Watch",
      price: "$120.00",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-20 md:px-12 lg:px-20">
      <div className="mb-12 text-center">
        <p className="mb-2 text-xs tracking-[4px] text-gray-500">
          TRENDING
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">
          Featured Products
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative mb-4 h-[350px] overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              
            </div>
            <h3 className="text-base font-medium text-gray-900">
              {product.name}
            </h3>
            <p className="mt-1 text-sm font-semibold text-gray-700">
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}