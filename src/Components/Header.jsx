import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header({ cartItemsCount }) {
  const navigations = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="shadow bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-12 w-12"
                src="https://thumbs.dreamstime.com/z/cart-apps-shop-logo-template-design-white-background-212245019.jpg"
                alt="Shopping Cart"
              />
            </Link>
            <nav className="ml-10 flex items-baseline space-x-4">
              {navigations.map((nav, index) => (
                <NavLink
                  key={index}
                  to={nav.href}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium ${
                      isActive
                        ? "bg-indigo-500 text-white"
                        : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-500"
                    }`
                  }
                >
                  {nav.name}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="flex items-center">
            <Link to="/cart" className="relative text-gray-700 hover:text-indigo-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItemsCount > 0 && (
                <span className="absolute -right-2 -top-1 rounded-full bg-red-600 w-4 h-4 text-white font-mono text-xs leading-tight text-center">
                  {cartItemsCount} </span>
                
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;






// import { NavLink } from "react-router-dom";

// function Header() {
//     const navigations = [
//         { name: "Home", href: "/" },
//         { name: "Products", href: "/products" },
//         { name: "About", href: "/about" },
//         { name: "Contact", href: "/contact" },
//     ];
        
//     return (
//       <div className="shadow bg-gray-400 px-12 ">
//         <div className="mx-auto max-w-7xl px-4 flex justify-between ">
//           <div className="flex items-center gap-10 ">
//             <NavLink to="/">
//               <img
//                 className="h-12 w-12"
//                 src="https://thumbs.dreamstime.com/z/cart-apps-shop-logo-template-design-white-background-212245019.jpg"
//                 alt="Shopping Cart"
//               />
//             </NavLink>
//             {navigations.map((nav, index) => {
//               return (
//                 <NavLink
//                   key={index}
//                   to={nav.href}
//                   className={({ isActive }) =>
//                     `text-black-500 border-b hover:border-b-indigo-500 hover:text-indigo-500 px-4 py-4 h-full text-sm font-medium${
//                       isActive ? " border-b-indigo-500 text-indigo-500" : ""
//                     }`
//                   }
//                 >
//                   {nav.name}
//                 </NavLink>
//               );
//             })}
//             ;
//           </div>
//           <div className="flex items-center ml-10">
//             <i className="bi bi-cart relative text-2xl">
//               <span className="absolute -right-2 -top-1 rounded-full bg-red-600 w-4 h-4 p-0 m-0 text-white font-mono text-xs leading-tight text-center">
//                 1
//               </span>
//             </i>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default Header;







