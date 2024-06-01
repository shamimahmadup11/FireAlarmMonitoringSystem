import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-2  sticky top-0">
      <div className=" mx-auto flex items-center justify-around md:flex-row gap-10">
        <div className="flex items-center justify-center">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/011/406/358/small/house-fire-logo-design-template-preventing-fire-or-fire-alarm-logo-concept-free-vector.jpg" alt=""  className=" h-14 w-14 rounded-full "/>
          <Link to="/">
            
          <span className="text-black text-2xl  font-bold ml-2">
            Fire Alarm System
          </span>
          </Link>
        </div>
        <div className="flex mt-4 md:mt-0  bg-green-600 rounded-md w-28 justify-center h-10 ">
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
