import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-6">
      <div className=" mx-auto flex items-center justify-around md:flex-row gap-10">
        <div className="flex items-center justify-center">
          {/* Logo */}
          <span className="text-black text-2xl  font-bold ml-2">
            Fire Alarm System
          </span>
        </div>
        <div className="flex mt-4 md:mt-0  bg-green-800 rounded-md w-28 justify-center h-10 ">
          
          <button className=" text-black rounded flex items-center px-3 py-1">
            Server
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
