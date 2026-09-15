import { Link } from "react-router-dom";

export default function PromoBanner() {
  return (
    <section className="relative bg-black px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-xs tracking-[4px] text-gray-400">
          LIMITED TIME OFFER
        </p>
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Spring Sale Is Live Up To 40% Off
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-gray-300">
          Discover handpicked seasonal favorites with massive discounts. Upgrade your wardrobe today before stocks run out.
        </p>
        <Link
          to="/categories"
          className="inline-block bg-white px-8 py-4 text-sm font-medium text-black transition hover:bg-gray-200"
        >
          Explore Collection
        </Link>
      </div>
    </section>
  );
}