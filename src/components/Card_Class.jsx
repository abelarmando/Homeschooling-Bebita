import React from "react";

function Card_Class({ title, text, img }) {
  return (
    <div className="flex items-center gap-6 w-full max-md:flex-col">
      <img src={img} alt="" className="md:w-[200px] h-full max-md:h-[200px] " />
      <div className="space-y-3 max-md:text-center">
        <h1 className="font-bold text-subjudul">{title}</h1>
        <p className="text-isi">{text}</p>
        <button
          className="border-2 text-isi rounded-lg p-2 hover:shadow-2xl hover:bg-bg-secondary "
          onClick={() => (window.location.href = "https://wa.me/6285775262667")}
        >
          Selengkapnya
        </button>
      </div>
    </div>
  );
}

export default Card_Class;
