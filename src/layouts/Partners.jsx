import React from "react";
import Background_img from "../components/Background_img";
import Slide_Infinite from "../components/Slide_Infinite";
const partners = [
  {
    id: 1,
    img: "./images/AIRLANGGA.PNG",
  },
  {
    id: 2,
    img: "./images/UIN.png",
  },
  {
    id: 3,
    img: "./images/PORTAL_SEKOLAH.png",
  },
];

function Partners() {
  return (
    <div className="relative h-[300px] flex items-center overflow-hidden">
      <Background_img />
      <div className="space-y-4 z-99 w-screen">
        <h1 className="text-3xl padding-def">Bebita Homeschooling Partners</h1>
        <div className="bg-bg-secondary h-fit overflow-hidden p-9 padding-def w-full">
          <Slide_Infinite data={partners} />
        </div>
      </div>
    </div>
  );
}

export default Partners;
