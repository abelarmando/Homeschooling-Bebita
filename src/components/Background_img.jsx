import React from "react";

function Background_img() {
  return (
    <>
      <img
        src="./images/icons/Jangka.png"
        alt="jangka"
        className="opacity-20 scale-x-[-1] absolute right-1/2 translate-x-50 top-0"
      />
      <img
        src="./images/icons/Toga.png"
        alt=""
        className="rotate-80 opacity-20 absolute -top-30 -translate-x-50 "
      />
      <img
        src="./images/icons/Toga.png"
        alt=""
        className="rotate-40 opacity-20 absolute -right-5 -translate-y-20 w-100 max-md:hidden"
      />
      <img
        src="./images/icons/Kalkulator.png"
        alt=""
        className="scale-x-[-1] opacity-20 absolute right-1/2 bottom-10 max-md:hidden"
      />
      <img
        src="./images/icons/Jangka.png"
        alt="jangka"
        className="opacity-20 rotate-35  absolute bottom-8 -left-30"
      />
      <img
        src="./images/icons/Kalkulator.png"
        alt=""
        className="scale-x-[-1] opacity-20 absolute right-20 -bottom-15 "
      />
    </>
  );
}

export default Background_img;
