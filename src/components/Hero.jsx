function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[600px] flex-col items-center gap-10 bg-[#eee9e2] px-6 py-16 md:px-12 lg:flex-row lg:px-20"
    >

      <div className="flex-1 text-center lg:text-left">

        <p className="mb-5 text-xs tracking-[4px]">
          NEW COLLECTION 2026
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
          Discover Your
          <br />
          Perfect Style
        </h1>

        <p className="mx-auto mb-8 max-w-md text-lg leading-7 text-gray-600 lg:mx-0">
          Explore modern fashion designed for your
          everyday lifestyle.
        </p>

        <button className="bg-black px-8 py-4 text-sm text-white transition hover:bg-gray-700">
          Shop Now
        </button>

      </div>

      <div className="w-full flex-1">

        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80"
          alt="Fashion collection"
          className="h-[400px] w-full object-cover md:h-[500px]"
        />

      </div>

    </section>
  );
}

export default Hero;