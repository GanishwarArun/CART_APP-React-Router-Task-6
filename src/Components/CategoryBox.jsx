import React from "react";
import { Link } from "react-router-dom";

const CategoryBox = ({ id, name, href, img, height }) => {
  return (
    <Link to={href} className="block">
      <div
        className={`${
          height || "h-96"
        } bg-white shadow rounded overflow-hidden relative group`}
      >
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-xl font-semibold">{name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryBox;

// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const CategoryBox = (props) => {
//     return (
//       <NavLink to={props.href}>
//         <div
//           className={`${
//             props.height || "h-96"
//           } group rounded relative overflow-hidden border shadow`}
//         >
//           <img
//             src={props.img}
//             alt={props.name}
//             className=" h-full rounded absolute object-cover group-hover:scale-110 "
//           />
//                 <p className='realtive rounded bg-gradient-to-t from-gray-950 text-white h-full text-xl font-semibold flex items-end justify-center pb-10'>
//                     {props.img}</p>
//         </div>
//       </NavLink>
//     );
// }

// export default CategoryBox;
