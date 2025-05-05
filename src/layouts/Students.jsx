import React from "react";
import CountUp from "react-countup";
import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { students } from "../constant";
import Background_img from "../components/Background_img";

gsap.registerPlugin(ScrollTrigger);
function Students() {
  const [StartCountUp, setStartCountUp] = useState(false);
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#students",
      start: "center bottom",
      end: "bottom top",

      onEnter: () => setStartCountUp(true),

      onLeaveBack: () => setStartCountUp(false),
    });
  });

  return (
    <div
      className="padding-def padding-def-y space-y-16 h-fit w-full relative overflow-hidden "
      id="students"
    >
      <Background_img />
      <h1 className="text-4xl font-bold text-center ">
        <span className="text-blue-500">Kontribusi Kami dalam</span>
        <br /> Pendidikan Indonesia
      </h1>
      <div className="flex flex-wrap items-center gap-16 justify-center">
        {StartCountUp &&
          students.map((x) => (
            <div className="font-bold space-y-3">
              <h1 className="text-center text-4xl">
                {StartCountUp && (
                  <CountUp start={0} end={x.jumlah} duration={3} />
                )}
                +
              </h1>
              <p className="text-xl">{x.deskripsi}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Students;
