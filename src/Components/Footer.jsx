import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const categories = [
    { name: "Women's", href: "/" },
    { name: "Men's", href: "/" },
    { name: "Shoes", href: "/" },
    { name: "Watches", href: "/" },
  ];

  const help = [
    { name: "Track Order", href: "/" },
    { name: "Returns", href: "/" },
    { name: "Shipping", href: "/" },
    { name: "FAQs", href: "/" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="uppercase font-bold text-white mb-4">Categories</h3>
            <ul className="mt-4">
              {categories.map((cat, index) => (
                <li key={index} className="my-2 text-sm">
                  <Link
                    to={cat.href}
                    className="hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="uppercase font-bold text-white mb-4">Help</h3>
            <ul className="mt-4">
              {help.map((item, index) => (
                <li key={index} className="my-2 text-sm">
                  <Link
                    to={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="uppercase font-bold text-white mb-4">
                Get in Touch
              </h3>
              <p className="text-sm">
                Any questions? <br /> Let us know in store at Arun Shopping's or
                call us on +91 9840135126
              </p>
            </div>

            <div>
              <h3 className="uppercase font-bold text-white mb-4">
                Newsletter
              </h3>
              <form onSubmit={(e) => e.preventDefault()} className="mt-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="block w-full bg-transparent outline-none border-b border-b-gray-500 py-2 focus:border-b-gray-300 transition-colors"
                />
                <button className="mt-4 bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-200 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-xs text-center text-gray-400 border-t border-t-gray-800 pt-8">
          Copyright © {new Date().getFullYear()} All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// import { NavLink } from 'react-router-dom'

// function Footer() {
//     const categories = [
//         { name: "Women's", href: "/" },
//         { name: "Men's", href: "/" },
//         { name: "Shoes", href: "/" },
//         { name: "Watches", href: "/" },
//     ];

//     const help = [
//         { name: "Track Order", href: "/" },
//         { name: "Returns", href: "/" },
//         { name: "Shipping", href: "/" },
//         { name: "FAQs", href: "/" },
//     ];

//   return (
//     <div className="bg-gray-900 text-gray-300 pt-16 pb-8">
//       <div className="block mx-auto max-w-7xl px-4">
//         <div className="grid grid-cols-4 mb-8 gap-4 ">
//           <div>
//             <div className="uppercase font-bold text-white mb-4">
//               Categories
//             </div>
//             <ul className="mt-8">
//               {categories.map((cat, index) => {
//                 return (
//                   <li key={index} className="my-4 text-sm">
//                     <NavLink to="/">{cat.name}</NavLink>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>

//           <div>
//             <div className="uppercase font-bold text-white mb-4">Help</div>
//             <ul className="mt-8">
//               {help.map((cat, index) => {
//                 return (
//                   <li key={index} className="my-4 text-sm">
//                     <NavLink to="/">{cat.name}</NavLink>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>

//                   <div className="col-span-2 grid grid-cols-2 gap-8">
//                       <div>
//                           <div className="uppercase font-bold text-white mb-6">
//                               Get in Touch
//                           </div>
//                           <p>
//                               Any questions? <br /> Let us know in store at Arun Shopping's or call us on +91 9840135126 </p>
//                   </div>

//                   <div>
//                       <div className='uppercase font-bold text-white mb-6'>
//                           Newsletter
//                           </div>

//                       <div>
//                           <input type="email" placeholder='Email Address' className='block w-full bg-transparent outline-none border-b border-b-gray-500 py-2 focus-visible:border-b-gray-300' />
//                           <button className='mt-4 btn-v1'>Subscribe</button>
//                     </div>

//                     </div>

//         </div>
//               </div>

//               <div className='text-xs text-center text-gray-400 border-t border-t-gray-800 pt-8'>
//                   Copyright @2023 All rights reserved
//             </div>
//           </div>
//           </div>
//   );
// }

// export default Footer;
