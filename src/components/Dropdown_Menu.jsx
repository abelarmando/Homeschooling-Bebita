import React from "react";

function Dropdown_Menu() {
  return (
    <div className="w-full h-fit spacey-10 absolute bg-white -translate-x-[76%]  flex flex-col gap-4 padding-def py-4 items-center justify-center">
      <a href="#about">About</a>
      <a href="#class">Class</a>
      <button className="bg-blue-500 rounded-lg px-3 py-2 cursor-pointer text-white">
        Daftar Sekarang
      </button>
    </div>
  );
}

export default Dropdown_Menu;
