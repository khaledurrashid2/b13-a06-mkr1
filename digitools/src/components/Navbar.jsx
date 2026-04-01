function Navbar({ cartCount, activeTab, setActiveTab }) {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo Text */}
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => setActiveTab("products")}
        >
          <span className="text-violet-600 font-extrabold text-2xl tracking-tight">Digi</span>
          <span className="text-gray-900 font-extrabold text-2xl tracking-tight">Tools</span>
        </div>

        {/* Nav links - hidden on mobile */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#products" className="hover:text-violet-600 transition">Products</a>
          <a href="#features" className="hover:text-violet-600 transition">Features</a>
          <a href="#pricing" className="hover:text-violet-600 transition">Pricing</a>
          <a href="#" className="hover:text-violet-600 transition">Testimonials</a>
          <a href="#" className="hover:text-violet-600 transition">FAQ</a>
        </div>

        
        <div className="flex items-center gap-3">

          {/* Cart button */}
          <button
            onClick={() => setActiveTab("cart")}
            className="relative flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:border-violet-400 transition"
          >
            🛒
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-violet-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          {/* Login button */}
          <button className="hidden md:inline text-sm font-medium text-gray-600 hover:text-violet-600 transition">
            Login
          </button>

          {/* Get Started button */}
          <button className="px-4 py-2 bg-violet-600 text-white text-sm font-bold rounded-full hover:bg-violet-700 transition shadow">
            Get Started
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;