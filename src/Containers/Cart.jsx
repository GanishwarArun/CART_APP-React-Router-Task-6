import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      // Replace this with your actual API endpoint
      const response = await fetch("https://fakestoreapi.com/carts/1");
      if (!response.ok) {
        throw new Error("Failed to fetch cart items");
      }
      const data = await response.json();
      // Assuming the API returns an array of product IDs and quantities
      // We'll fetch the full product details for each item
      const itemsWithDetails = await Promise.all(
        data.products.map(async (item) => {
          const productResponse = await fetch(
            `https://fakestoreapi.com/products/${item.productId}`
          );
          const productData = await productResponse.json();
          return { ...productData, quantity: item.quantity };
        })
      );
      setCartItems(itemsWithDetails);
      setLoading(false);
    } catch (err) {
      setError("Error fetching cart items: " + err.message);
      setLoading(false);
    }
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  if (loading)
    return <div className="text-center mt-8">Loading cart items...</div>;
  if (error)
    return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-gray-800 font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b border-gray-200 py-4 px-6"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-right">
            <p className="text-xl font-semibold text-gray-800 mb-4">
              Total: ${calculateTotal()}
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
      <Link
        to="/"
        className="mt-8 inline-block text-blue-500 hover:text-blue-600 transition-colors"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default Cart;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function Cart() {
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = async () => {
//     try {
//       setLoading(true);
//       // Replace this with your actual API endpoint
//       const response = await fetch("https://fakestoreapi.com/carts/1");
//       if (!response.ok) {
//         throw new Error("Failed to fetch cart items");
//       }
//       const data = await response.json();
//       // Assuming the API returns an array of product IDs and quantities
//       // We'll fetch the full product details for each item
//       const itemsWithDetails = await Promise.all(
//         data.products.map(async (item) => {
//           const productResponse = await fetch(
//             `https://fakestoreapi.com/products/${item.productId}`
//           );
//           const productData = await productResponse.json();
//           return { ...productData, quantity: item.quantity };
//         })
//       );
//       setCartItems(itemsWithDetails);
//       setLoading(false);
//     } catch (err) {
//       setError("Error fetching cart items: " + err.message);
//       setLoading(false);
//     }
//   };

//   const calculateTotal = () => {
//     return cartItems
//       .reduce((total, item) => total + item.price * item.quantity, 0)
//       .toFixed(2);
//   };

//   if (loading)
//     return <div className="text-center mt-8">Loading cart items...</div>;
//   if (error)
//     return <div className="text-center mt-8 text-red-500">{error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl text-gray-800 font-bold mb-6">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p className="text-gray-600">Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-center border-b border-gray-200 py-4 px-6"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-16 h-16 object-cover mr-4"
//                 />
//                 <div className="flex-grow">
//                   <h2 className="text-lg font-semibold text-gray-800">
//                     {item.title}
//                   </h2>
//                   <p className="text-gray-600">Quantity: {item.quantity}</p>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-lg font-semibold text-gray-800">
//                     ${(item.price * item.quantity).toFixed(2)}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="text-right">
//             <p className="text-xl font-semibold text-gray-800 mb-4">
//               Total: ${calculateTotal()}
//             </p>
//             <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
//               Proceed to Checkout
//             </button>
//           </div>
//         </>
//       )}
//       <Link
//         to="/"
//         className="mt-8 inline-block text-blue-500 hover:text-blue-600 transition-colors"
//       >
//         ← Back to Home
//       </Link>
//     </div>
//   );
// }

// export default Cart;

// import { Link } from 'react-router-dom'

// function Cart() {
//     return (
//         <>
//             <h1 className='text-3xl text-gray-600 font-bold'>Cart Page!</h1>
//             <Link to='/'>Home</Link>
//         </>
//   )
// }

// export default Cart
