import AppleIcon from "./AppleIcon";
import { IoIosSearch } from "react-icons/io";
import { TbMenu } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center text-xs sticky top-0 left-0 bg-white/80 backdrop-blur-lg shadow-md z-10">
      <div className="w-[1024px] px-3 flex justify-between">
        <div className="">
          <AppleIcon />
        </div>

        <div className="hidden md:flex items-center justify-center">
          <a href="">Mac</a>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <a href="">iPad</a>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <a href="">iPhone</a>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <a href="">Watch</a>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <a href="">AirPods</a>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <a href="">TV & Rumah</a>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <a href="">Hiburan</a>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <a href="">Dukungan</a>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <a href="">Tempat Membeli</a>
        </div>

        <div className="flex items-center gap-8">
          <button>
            <IoIosSearch className="h-5 w-5" />
          </button>

          <button className="md:hidden">
            <TbMenu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
