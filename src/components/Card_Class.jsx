import React from "react";

function Card_Class({ title, text, img }) {
  return (
    <div className="md:flex  items-center gap-6 md:w-[700px]  w-full">
      <img src={img} alt="" className="md:w-[200px] h-full max-md:h-[200px] " />
      <div className="space-y-3">
        <h1>{title}</h1>
        <p>{text}</p>
        <button className="border-2 rounded-lg p-2 ">Selengkapnya</button>
      </div>
    </div>
  );
}

export default Card_Class;
