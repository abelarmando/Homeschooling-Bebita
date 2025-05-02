import React from "react";
import Background_img from "../components/Background_img";
const partners = [
  {
    id: 1,
    img: "./images/AIRLANGGA.PNG",
  },
  {
    id: 2,
    img: "./images/UIN.JPG",
  },
  {
    id: 3,
    img: "./images/PORTAL_SEKOLAH.JPG",
  },
];

function Partners() {
  return (
    <div className="relative h-[600px] flex items-center  overflow-hidden">
      <Background_img />
      <div className="space-y-4 z-99 w-full">
        <h1 className="text-3xl padding-def">Bebita Homeschooling Partners</h1>
        <div className="bg-[#a39e9e] h-fit overflow-hidden p-9">
          <div className=" flex gap-16 animate-infinte-scroll">
            {[
              ...partners,
              ...partners,
              ...partners,
              ...partners,
              ...partners,
              ...partners,
            ].map((x) => (
              <img src={x.img} alt="" className="w-[400px] h-[200px]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
