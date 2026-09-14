function Categories() {
  const categories = [
    {
      name: "Men",
      image:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Women",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section
      id="categories"
      className="bg-white px-6 py-20 md:px-12 lg:px-20"
    >

      <div className="mb-10 text-center">

        <p className="mb-2 text-xs tracking-[4px] text-gray-500">
          EXPLORE
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Shop By Category
        </h2>

      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {categories.map((category) => (
          <div
            key={category.name}
            className="group relative h-[400px] overflow-hidden"
          >

            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white">

              <h3 className="mb-3 text-2xl font-semibold">
                {category.name}
              </h3>

              <button className="bg-white px-4 py-2 text-sm text-black transition hover:bg-gray-200">
                Explore
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Categories;