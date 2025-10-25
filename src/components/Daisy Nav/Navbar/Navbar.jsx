import Link from "./Link"
import React from 'react';

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blogs", path: "/Blogs" },
  { id: 5, name: "Contact", path: "/contact" },
];


const Navbar = () => {
    return (
        <nav>
            <ul className="flex">
             {
                navLinks.map((route => (<Link route={route} key={route.id}></Link>)
           ))}
            </ul>

        </nav>
    );
};

export default Navbar;

