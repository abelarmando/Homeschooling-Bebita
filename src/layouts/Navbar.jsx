import React from "react";
import { GrMenu } from "react-icons/gr";
import { useState } from "react";
import Dropdown_Menu from "../components/Dropdown_Menu";
function Navbar() {
  const [Show, setShow] = useState(false);
  return (
    <nav className="bg-white md:rounded-b-lg fixed top-0 left-0 right-0 z-99 padding-def ">
      <div className="flex justify-between items-center w-full py-[10px] ">
        <div className="md:h-[60px] max-md:w-[100px]">
          <img
            src="./images/Logo_homeschooling.png"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="space-x-4 max-md:hidden">
          <a href="#about">About</a>
          <a href="#class">Class</a>

          <button
            className="bg-blue-500 rounded-lg px-3 py-2 cursor-pointer text-white"
            onClick={() =>
              (window.location.href = "https://wa.me/6285775262667")
            }
          >
            Daftar Sekarang
          </button>
        </div>
        <div className="md:hidden">
          <GrMenu className="w-[40px] h-full" onClick={() => setShow(!Show)} />
          {Show && <Dropdown_Menu />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
