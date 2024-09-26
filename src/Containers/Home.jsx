import React, { useState, useEffect } from "react";
import BannerImg from "./../assets/banner.jpg";
import ProductBox from "../Components/ProductBox";
import CategoryBox from "../Components/CategoryBox";

function Home() {
  const [categories, setCategories] = useState([]);
  const [topRatedProducts, setTopRatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      // Fetch categories
      const categoriesResponse = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const categoriesData = await categoriesResponse.json();

      const formattedCategories = categoriesData.map((category) => ({
        id: category,
        name: category.charAt(0).toUpperCase() + category.slice(1),
        href: `/category/${category}`,
        img: `${category}.jpg`, // You might need to adjust this based on your image naming convention
      }));

      setCategories(formattedCategories);

      // Fetch products
      const productsResponse = await fetch(
        "https://fakestoreapi.com/products?limit=6"
      );
      const productsData = await productsResponse.json();

      setTopRatedProducts(productsData);
      setLoading(false);
    } catch (err) {
      setError("Error fetching data: " + err.message);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="relative h-[500px]">
        <img
          src={BannerImg}
          className="absolute top-0 left-0 h-[500px] w-full object-cover"
          alt="Banner"
        />
        <div className="backdrop-blur-sm bg-white/40 h-full flex flex-col items-center justify-center text-center text-gray-800">
          <h1 className="text-5xl font-bold">New arrivals are here</h1>
          <p className="text-lg w-8/12 mx-auto mt-2 font-semibold">
            The new arrivals have, well, newly arrived. Check out the latest
            options from our summer small-batch release while they're still in
            stock.
          </p>
          <button className="btn mt-4">Shop New Arrivals</button>
        </div>
      </div>

      <div className="my-16 container mx-auto px-4">
        <h2 className="text-2xl font-bold uppercase mb-4">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <CategoryBox key={category.id} {...category} />
          ))}
        </div>
      </div>

      <div className="my-16 container mx-auto px-4">
        <h2 className="text-2xl font-bold uppercase mb-4">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {topRatedProducts.map((product) => (
            <ProductBox key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

// import BannerImg from "./../assets/banner.jpg"
// import ProductBox from "../Components/ProductBox"
// import CategoryBox from '../Components/CategoryBox'

// function Home() {
//   const categories = [
//     {
//       id: "electronics",
//       name: "Electronics",
//       href: "/",
//       img: "electronics.jpg",
//     },
//     { id: "jewelery", name: "Jewelery", href: "/", img: "jewelery.jpg" },
//     {
//       id: "men's clothing",
//       name: "Men's Clothing",
//       href: "/",
//       img: "men's clothing.jpg",
//     },
//     {
//       id: "women's clothing",
//       name: "Women's Clothing",
//       href: "/",
//       img: "women's clothing.jpg",
//     },
//   ];
//   const topRatedProducts = [
//     {
//       id: 1,
//       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//       price: 109.95,
//       description:
//         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//       category: "men's clothing",
//       image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//       rating: {
//         rate: 3.9,
//         count: 120,
//       },
//     },
//     {
//       id: 2,
//       title: "Mens Casual Premium Slim Fit T-Shirts ",
//       price: 22.3,
//       description:
//         "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//       category: "men's clothing",
//       image:
//         "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//       rating: {
//         rate: 4.1,
//         count: 259,
//       },
//     },
//     {
//       id: 3,
//       title: "Mens Cotton Jacket",
//       price: 55.99,
//       description:
//         "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//       category: "men's clothing",
//       image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//       rating: {
//         rate: 4.7,
//         count: 500,
//       },
//     },
//     {
//       id: 4,
//       title: "Mens Casual Slim Fit",
//       price: 15.99,
//       description:
//         "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//       category: "men's clothing",
//       image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//       rating: {
//         rate: 2.1,
//         count: 430,
//       },
//     },
//     {
//       id: 5,
//       title:
//         "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//       price: 695,
//       description:
//         "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//       category: "jewelery",
//       image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//       rating: {
//         rate: 4.6,
//         count: 400,
//       },
//     },
//     {
//       id: 6,
//       title: "Solid Gold Petite Micropave ",
//       price: 168,
//       description:
//         "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//       category: "jewelery",
//       image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//       rating: {
//         rate: 3.9,
//         count: 70,
//       },
//     },
//   ];
//   return (
//     <div>
//       <div className="relative h-[500px]">
//         <img
//           src={BannerImg}
//           className="absolute top-0 left-0 h-[500px] w-full object-cover"
//         />
//         <div className="backdrop-blur-sm bg-white/40 h-full flex flex-col items-center justify-center text-center text-gray-800">
//           <h1 className="text-5xl font-bold">New arrivals are here</h1>
//           <p className="text-lg w-8/12 mx-auto mt-2 font-semibold">
//             The new arrivals have, well, newly arrived. Check out the latest
//             options from our summer small-batch release while they're still in
//             stock.
//           </p>
//           <button className="btn mt-4">Shop New Arrivals</button>
//         </div>
//       </div>
//       <div className="my-16">
//         <h2 className="text-xl font-bold uppercase">Shop by Category</h2>
//         <div className="grid grid-cols-4 gap-8 mt-4">
//           {categories.map((cat, index) => {
//             return <CategoryBox key={index} {...cat} />;
//           })}
//         </div>
//       </div>
//       <div className="my-16">
//         <h2 className="text-xl font-bold uppercase">Trending Products</h2>
//         <div className="grid grid-cols-6 gap-4 mt-4">
//           {topRatedProducts.map((product, index) => {
//             return <ProductBox key={index} {...product} />;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
