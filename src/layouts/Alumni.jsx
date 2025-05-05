import React from "react";
import Background_img from "../components/Background_img";

function Alumni() {
  return (
    <div className="padding-def padding-def-y relative overflow-hidden space-y-4">
      <Background_img />
      <h1 className=" text-3xl font-bold text-center ">
        <span className="text-blue-500">Kata Alumni dan Orang Tua</span>
        <br /> Bebita Homeschooling
      </h1>
      <div className="md:flex bg-bg-secondary opacity-70 p-10 rounded-lg gap-10 md:h-[400px] items-center max-md:space-y-4">
        <div className="md:w-1/2 space-y-4">
          <h2 className="uppercase font-bold">judul/highlight</h2>
          <p>
            Bebita Homeschooling offers a flexible, interactive, and supportive
            learning environment, empowering every child to reach their full
            potential from the comfort of home.
          </p>
        </div>
        <div className="rounded-lg md:w-1/2 h-full overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/sLRnGFVQVFY?autoplay=1&controls=1&mute=1&loop=1&playlist=sLRnGFVQVFY"
            width={"100%"}
            height={"100%"}
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Alumni;
