import React from "react";

function ProductList({ products, addToCart }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
