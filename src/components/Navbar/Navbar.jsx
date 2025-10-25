import { Menu, X } from "lucide-react";
import Link from "./Link";
import React from "react";

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blogs", path: "/Blogs" },
  { id: 5, name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const links = navLinks.map((route) => (
    <li key={route.id} className="px-4 py-2 hover:text-blue-500">
      <Link route={route}>{route.name}</Link>
    </li>
  ));

  return (
    <nav className="flex justify-between items-center p-4 relative mt-5">
      {/* Logo */}
      <h3 className="text-xl font-bold">My Navbar</h3>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">{links}</ul>

      {/* Sign In Button (Desktop) */}
      <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded">
        Sign In
      </button>

      {/* Mobile Hamburger */}
      <div
        className="flex md:hidden items-center cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden absolute left-0 w-full bg-gray-100 flex flex-col items-center transition-all duration-500 ${
          isOpen ? "top-16 opacity-100" : "-top-96 opacity-0"
        }`}
      >
        {links}
        <li className="py-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Sign In
          </button>
        </li>
      </ul>
    </nav>
  );
};
 
export default Navbar;
