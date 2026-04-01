import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function ProductSection({ cartItems, addToCart, setActiveTab }) {
  return (
    <section className="py-20 bg-white px-4" id="products">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-6">
            Choose from our curated collection of premium digital products designed to boost your
            productivity and creativity.
          </p>
          <div className="flex justify-center gap-2">
            <button className="px-6 py-2 bg-violet-600 text-white rounded-full font-semibold text-sm shadow">
              Products
            </button>
            <button
              onClick={() => setActiveTab("cart")}
              className="px-6 py-2 border border-gray-200 text-gray-700 rounded-full font-semibold text-sm hover:border-violet-400 transition"
            >
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        <ProductGrid cartItems={cartItems} addToCart={addToCart} />
      </div>
    </section>
  );
}

function ProductGrid({ cartItems, addToCart }) {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {

    fetch("/product_data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false); 
      })
      .catch((err) => {
        setError("Failed to load products. Make sure product_data.json is in the public folder.");
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="text-5xl mb-4 animate-spin inline-block">⚙️</div>
        <p className="text-gray-400 text-lg font-medium">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="text-5xl mb-4">❌</div>
        <p className="text-red-500 text-lg font-medium">{error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          isInCart={cartItems.some((item) => item.id === product.id)}
        />
      ))}
    </div>
  );
}

export default ProductSection;