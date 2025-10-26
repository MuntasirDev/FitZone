import React from "react";

const Link = ({ route }) => {
  return (
    <li className="Sora relative group px-4 py-2 lg:mr-6 text-green-400 font-semibold transition duration-300">
      <a
        href={route.path}
        className="relative z-10 transition-colors duration-300 group-hover:text-green-300"
      >
        {route.name}
      </a>

      {/* Underline Glow Effect */}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#22c55e]"></span>
    </li>
  );
};

export default Link;
