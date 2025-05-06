import React from "react";

function Border_Photo({ img }) {
  return (
    <div className="relative border-4 border-white w-full h-full p-1">
      <div className="w-3 h-3 bg-white absolute -top-2 -left-2" />
      <div className="w-3 h-3 bg-white absolute -top-2 -right-2" />
      <div className="w-3 h-3 bg-white absolute -bottom-2 -left-2" />
      <div className="w-3 h-3 bg-white absolute -bottom-2 -right-2" />
      <img src={img} alt="" className="w-full h-full" />
    </div>
  );
}

export default Border_Photo;
