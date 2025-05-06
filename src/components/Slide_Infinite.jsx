import React from "react";

function Slide_Infinite({ data }) {
  return (
    <div className=" flex gap-16  animate-infinte-scroll">
      {[...data, ...data, ...data, ...data, ...data, ...data].map((x) => (
        <img src={x.img} alt="" className="w-[200px] h-[100px]  " />
      ))}
    </div>
  );
}

export default Slide_Infinite;
