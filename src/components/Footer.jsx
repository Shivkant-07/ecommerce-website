function Footer() {
  return (
    <footer className="bg-[#151515] px-6 pb-5 pt-16 text-white md:px-12 lg:px-20">

      <div className="grid gap-10 border-b border-gray-700 pb-10 md:grid-cols-2">

        <div>
          <h2 className="mb-4 text-2xl font-bold tracking-[4px]">
            VEYRA
          </h2>

          <p className="leading-7 text-gray-400">
            Modern fashion for your everyday style.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">
            Quick Links
          </h3>

          <a
            href="#home"
            className="mb-2 block text-gray-400 hover:text-white"
          >
            Home
          </a>

          <a
            href="#categories"
            className="block text-gray-400 hover:text-white"
          >
            Categories
          </a>
        </div>

      </div>

      <div className="pt-5 text-center text-sm text-gray-500">
        © 2026 VEYRA. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;