// import React, { useState } from "react";
// import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
// import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
// import ResponsiveMenu from "./ResponsiveMenu";

// export const Navlinks = [
//   {
//     id: 1,
//     name: "HOME",
//     link: "/#",
//   },
//   {
//     id: 1,
//     name: "Services",
//     link: "/#services",
//   },
//   {
//     id: 2,
//     name: "CARS",
//     link: "/#cars",
//   },
//   {
//     id: 1,
//     name: "ABOUT",
//     link: "/#About",
//   },
//   {
//     id: 1,
//     name: "Testimonial",
//     link: "/#Testimonial",
//   },
// ];
// {
//   /* <div className="NavLinks">
//   <ul>

//   <li>
//     <Link to="/">Home</Link>
//   </li>
//   <li>
//     <Link to="/Host">Host</Link>
//   </li>
//   <li>
//     <Link to="/About">About</Link>
//   </li>
//   <li>
//     <Link to="/Vans">Vans</Link>
//   </li>
//   </ul>
// </div>; */
// }
// // ];
// const Navbar = ({ theme, setTheme }) => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };
//   return (
//     <div
//       className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300
//     "
//     >
//       <div className="container py-2 md:py-0">
//         <div className="flex justify-between items-center">
//           <div>
//             <span className="text-3xl font-bold font-serif ">Audi</span>
//           </div>
//           <nav className="hidden md:block">
//             <ul className="flex items-center gap-8">
//               {Navlinks.map(({ id, name, link }) => (
//                 <li key={id} className="py-4">
//                   <a
//                     href={link}
//                     className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
//                   >
//                     {name}
//                   </a>
//                 </li>
//               ))}

//               {theme === "dark" ? (
//                 <BiSolidSun
//                   onClick={() => setTheme("light")}
//                   className="text-2xl"
//                 />
//               ) : (
//                 <BiSolidMoon
//                   onClick={() => setTheme("dark")}
//                   className="text-2xl"
//                 />
//               )}
//             </ul>
//           </nav>
//           {/* Mobile view  */}
//           <div className="flex items-center gap-4 md:hidden ">
//             {/* dark  mode */}
//             {theme === "dark" ? (
//               <BiSolidSun
//                 onClick={() => setTheme("light")}
//                 className="text-2xl"
//               />
//             ) : (
//               <BiSolidMoon
//                 onClick={() => setTheme("dark")}
//                 className="text-2xl"
//               />
//             )}
//             {/* Mobile Hamburger icon */}
//             {showMenu ? (
//               <HiMenuAlt1
//                 onClick={toggleMenu}
//                 className=" cursor-pointer transition-all"
//                 size={30}
//               />
//             ) : (
//               <HiMenuAlt3
//                 onClick={toggleMenu}
//                 className="cursor-pointer transition-all"
//                 size={30}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//       <ResponsiveMenu showMenu={showMenu} />
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { useState } from "react";

import { Links } from "react-router-dom";
import { AiOutlineMenu, AiFillMoon, AiOutlineSun } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <nav
      className={`bg-${
        darkMode ? "black" : "white"
      }shadow-[0_0_10px_rgba(0,0,255,0.2)]
    p-4 flex justify-between items-centre`}
    >
      <div className="logo text-lg font-bold">
        {darkMode ? (
          <span className="text-white">Audi</span>
        ) : (
          <span className="text-black-800">Audi</span>
        )}
      </div>
      <div className="md:hidden flex">
        <button
          className="mobile-menu-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AiOutlineMenu size={24} color={darkMode ? "white" : black - 800} />
        </button>
      </div>
      <ul
        className={`md:flex ${
          isOpen ? "flex" : "hidden"
        }md:space-x-4 md:flex-row flex-col`}
      >
        <li>
          <link
            to="/"
            className={`hover:translate-y-1 hover:shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out ${
              darkMode ? "text-white" : "text-black"
            }py-2 px-4 rounded-lg`}
          >
            Home
          </link>
        </li>
        <li>
          <link
            to="/about"
            className={`hover:translate-y-1 hover:shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out ${
              darkMode ? "text-white" : "text-black"
            }py-2 px-4 rounded-lg`}
          >
            About
          </link>
        </li>
        <li>
          <link
            to="/services"
            className={`hover:translate-y-1 hover:shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out ${
              darkMode ? "text-white" : "text-black"
            }py-2 px-4 rounded-lg`}
          >
            Services
          </link>
        </li>
        <li>
          <link
            to="/gallery"
            className={`hover:translate-y-1 hover:shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out ${
              darkMode ? "text-white" : "text-black"
            }py-2 px-4 rounded-lg`}
          >
            Gallery
          </link>
        </li>
        <li>
          <link
            to="/Testimonial"
            className={`hover:translate-y-1 hover:shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out ${
              darkMode ? "text-white" : "text-black"
            }py-2 px-4 rounded-lg`}
          >
            Testimonials
          </link>
        </li>
        <li>
          <link
            to="/Contact"
            className={`hover:translate-y-1 hover:shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out ${
              darkMode ? "text-white" : "text-black"
            }py-2 px-4 rounded-lg`}
          >
            Contact
          </link>
        </li>
      </ul>
      <div className="flex">
        {darkMode ? (
          <AiOutlineSun
            size={24}
            color="white"
            onClick={() => setDarkMode(false)}
          />
        ) : (
          <AiFIllMoon
            size={24}
            color="black"
            onClick={() => setDarkMode(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
