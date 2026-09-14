function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-20 items-center justify-between border-b bg-white px-6 md:px-12 lg:px-20">

      <div className="text-2xl font-bold tracking-[4px]">
        VEYRA
      </div>

      <div className="hidden gap-8 md:flex">
        <a
          href="#home"
          className="text-sm transition hover:text-gray-500"
        >
          Home
        </a>

        <a
          href="#categories"
          className="text-sm transition hover:text-gray-500"
        >
          Categories
        </a>
      </div>

      <button className="bg-black px-5 py-2.5 text-sm text-white transition hover:bg-gray-700">
        Login
      </button>

    </nav>
  );
}

export default Navbar;