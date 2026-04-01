import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import { StatsBar, HowItWorks, Pricing, CallToAction, Footer } from "./components/StaticSections";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [activeTab, setActiveTab] = useState("products");

  const addToCart = (product) => {
    const alreadyInCart = cartItems.find((item) => item.id === product.id);
    if (alreadyInCart) {
      toast.info(`"${product.name}" is already in your cart!`, {
        position: "top-right",
        autoClose: 2500,
      });
      return;
    }
    setCartItems([...cartItems, product]);
    toast.success(`"${product.name}" added to cart! 🛒`, {
      position: "top-right",
      autoClose: 2500,
    });
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
    toast.error(`"${product.name}" removed from cart.`, {
      position: "top-right",
      autoClose: 2500,
    });
  };

  const proceedToCheckout = () => {
    if (cartItems.length === 0) {
      toast.warn("Your cart is empty!", { position: "top-right", autoClose: 2000 });
      return;
    }
    setCartItems([]);
    toast.success("🎉 Order placed! Your cart has been cleared.", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-white font-sans">
      <ToastContainer />
      <Navbar cartCount={cartItems.length} activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "products" ? (
        <>
          <Hero setActiveTab={setActiveTab} />
          <StatsBar />
          <ProductSection
            cartItems={cartItems}
            addToCart={addToCart}
            setActiveTab={setActiveTab}
          />
          <HowItWorks />
          <Pricing />
          <CallToAction setActiveTab={setActiveTab} />
          <Footer />
        </>
      ) : (
        <CartPage
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          proceedToCheckout={proceedToCheckout}
          cartTotal={cartTotal}
          setActiveTab={setActiveTab}
        />
      )}
    </div>
  );
}

function CartPage({ cartItems, removeFromCart, proceedToCheckout, cartTotal, setActiveTab }) {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            Premium Digital Tools
          </h1>
          <p className="text-gray-500 text-base max-w-lg mx-auto">
            Choose from our curated collection of premium digital products designed to boost your
            productivity and creativity.
          </p>
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab("products")}
              className="px-6 py-2 rounded-full text-gray-600 font-semibold hover:bg-gray-100 transition border border-gray-200"
            >
              Products
            </button>
            <button className="px-6 py-2 rounded-full bg-violet-600 text-white font-semibold shadow">
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Cart</h2>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-gray-400 text-lg font-medium">Your cart is empty</p>
              <button
                onClick={() => setActiveTab("products")}
                className="mt-6 px-6 py-3 bg-violet-600 text-white rounded-full font-semibold hover:bg-violet-700 transition"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-3 mb-6">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
                ))}
              </div>
              <div className="border-t border-gray-100 pt-4 flex justify-between items-center mb-5">
                <span className="text-gray-500 font-medium text-lg">Total:</span>
                <span className="text-2xl font-extrabold text-gray-900">${cartTotal}</span>
              </div>
              <button
                onClick={proceedToCheckout}
                className="w-full py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-lg font-bold rounded-xl hover:from-violet-700 hover:to-purple-700 transition shadow-lg"
              >
                Proceed To Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function CartItem({ item, removeFromCart }) {
  return (
    <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-4 border border-gray-100">
      <div className="flex items-center gap-4">
        <img
          src={item.icon}
          alt={item.name}
          className="w-12 h-12 rounded-lg object-contain bg-white p-1 border border-gray-100"
        />
        <div>
          <p className="font-semibold text-gray-800">{item.name}</p>
          <p className="text-gray-500 text-sm">${item.price}</p>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item)}
        className="text-red-500 font-semibold hover:text-red-700 transition text-sm px-2 py-1 rounded hover:bg-red-50"
      >
        Remove
      </button>
    </div>
  );
}

export default App;