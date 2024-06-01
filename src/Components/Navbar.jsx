import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-6 sticky top-0">
      <div className=" mx-auto flex items-center justify-around md:flex-row gap-10">
        <div className="flex items-center justify-center">
          {/* Logo */}
          <Link to="/">
          <span className="text-black text-2xl  font-bold ml-2">
            Fire Alarm System
          </span>
          </Link>
        </div>
        <div className="flex mt-4 md:mt-0  bg-green-800 rounded-md w-28 justify-center h-10 ">
          <Link to="/server">
          <button className=" text-black rounded flex items-center px-3 py-1">
            Server
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
