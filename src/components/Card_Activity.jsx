import React from "react";
import Border_Photo from "./Border_Photo";

function Card_Activity({ title, img }) {
  return (
    <div className="p-2 w-fit space-y-3">
      <h1 className="text-center text-subjudul">{title}</h1>
      <div className="w-[300px]">
        <Border_Photo img={img} />
      </div>
    </div>
  );
}

export default Card_Activity;
