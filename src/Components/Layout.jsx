import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ cartItemsCount }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header cartItemsCount={cartItemsCount} />
      <main className="flex-grow mx-auto max-w-7xl px-4 py-8 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

// import { Outlet } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';

// function Layout () {
//     return (
//         <>
//             <Header />
//             <div className="mx-auto max-w-7xl px-4">
//                 <Outlet />
//             </div>
//             <Footer />
//         </>
//   )
// }

// export default Layout
