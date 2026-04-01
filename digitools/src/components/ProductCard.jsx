import { useState } from "react";

const tagStyles = {
  popular: "bg-violet-100 text-violet-700",
  "best seller": "bg-amber-100 text-amber-700",
  new: "bg-green-100 text-green-700",
};

function ProductCard({ product, addToCart, isInCart }) {
  const [clicked, setClicked] = useState(false);

  const handleBuyNow = () => {
    addToCart(product);
    if (!isInCart) {
      setClicked(true);
      setTimeout(() => setClicked(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col relative overflow-hidden">
      {/* Tags - popular/best seller/new etc */}
      {product.tag && (
        <span
          className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full capitalize ${
            tagStyles[product.tagType] || "bg-gray-100 text-gray-600"
          }`}
        >
          {product.tag}
        </span>
      )}

      {/* Icon */}
      <div className="w-14 h-14 mb-4">
        <img
          src={product.icon}
          alt={product.name}
          className="w-14 h-14 object-contain rounded-xl"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>

      {/* Name & Description */}
      <h3 className="text-lg font-bold text-gray-900 mb-1 pr-16">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-1">{product.description}</p>

      {/* Features */}
      <ul className="mb-5 space-y-1">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-violet-500 font-bold text-xs">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Price */}
      <div className="mb-4">
        <span className="text-2xl font-extrabold text-gray-900">${product.price}</span>
        <span className="text-gray-400 text-sm ml-1">/ {product.period}</span>
      </div>

      {/* Buy Now Button */}
      <button
        onClick={handleBuyNow}
        className={`w-full py-3 rounded-3xl font-bold text-sm transition duration-200 ${
          isInCart || clicked
            ? "bg-green-500 text-white cursor-default"
            : "bg-violet-600 text-white hover:bg-violet-700"
        }`}
      >
        {isInCart || clicked ? "✓ Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
}

export default ProductCard;