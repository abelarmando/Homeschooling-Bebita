import React from "react";

function Card_Class({ title, text, img }) {
  return (
    <div className="flex items-center gap-6 w-full max-md:flex-col">
      <img src={img} alt="" className="md:w-[200px] h-full max-md:h-[200px] " />
      <div className="space-y-3">
        <h1 className="font-bold">{title}</h1>
        <p>{text}</p>
        <button className="border-2 rounded-lg p-2 hover:shadow-2xl hover:bg-bg-secondary ">
          Selengkapnya
        </button>
      </div>
    </div>
  );
}

export default Card_Class;
