import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-2">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
         
          <span className="text-white text-lg font-bold ml-2">
            Fire Alarm System
          </span>
        </div>
        <div className="flex mt-4 md:mt-0">
          {/* Navigation Links */}
          <a href="#about" className="text-white px-2 hover:underline">
            About
          </a>
          <a href="#contact" className="text-white px-2 hover:underline">
            Contact
          </a>
          <a href="#login" className="text-white px-2 hover:underline">
            Login
          </a>
          <a href="#signup" className="text-white px-2 hover:underline">
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
