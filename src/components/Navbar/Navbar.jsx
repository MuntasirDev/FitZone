import { Dumbbell, Menu, X } from "lucide-react";
import Link from "./Link";
import React from "react";

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blogs", path: "/blogs" },
  { id: 5, name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="Sora bg-gradient-to-r from-black via-gray-900 to-black border-b border-gray-800 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Dumbbell size={32} className="text-green-400" />
          <h3 className="text-2xl font-extrabold text-green-400 tracking-wide">
            Fit<span className="text-green-300">Zone</span>
          </h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          {navLinks.map((route) => (
            <Link key={route.id} route={route} />
          ))}
        </ul>

        {/* Sign In Button (Desktop) */}
        <button className="hidden md:block bg-green-500 text-black font-bold px-4 py-2 rounded-full shadow hover:bg-green-400 transition">
          Sign In
        </button>

        {/* Mobile Hamburger */}
        <div
          className="flex md:hidden items-center cursor-pointer text-green-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden bg-black bg-opacity-95 border-t border-gray-800 flex flex-col items-center space-y-3 pb-6 transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {navLinks.map((route) => (
          <Link key={route.id} route={route} />
        ))}
        <li className="py-2">
          <button className="bg-green-500 text-black font-bold px-4 py-2 rounded-full hover:bg-green-400 transition">
            Sign In
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
