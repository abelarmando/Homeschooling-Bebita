import React from "react";

function Card_Review({ img, name, deskripsi }) {
  return (
    <div className="bg-bg-secondary opacity-80 rounded-lg md:w-[500px] h-fit p-5 md:flex gap-3 items-center max-md:space-y-4">
      <div className="w-full h-full">
        <img src={img} alt="" className="h-full rounded-lg" />
      </div>
      <div>
        <img src="./images/Stars.png" alt="" className="w-1/2" />
        <p className="font-bold">{name}</p>
        <p>{deskripsi}</p>
      </div>
    </div>
  );
}

export default Card_Review;
