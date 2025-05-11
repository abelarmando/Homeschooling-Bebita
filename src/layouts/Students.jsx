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
      // markers: true,
      onEnter: () => setStartCountUp(true),
      onLeave: () => setStartCountUp(false),
      onEnterBack: () => setStartCountUp(true),
      onLeaveBack: () => setStartCountUp(false),
    });
  });

  return (
    <div
      className="padding-def padding-def-y space-y-16  w-full relative overflow-hidden md:min-h-[350px] min-h-[570px] "
      id="students"
    >
      <Background_img />
      <h1 className="text-4xl font-bold text-center text-judul">
        <span className="text-blue-500">Kontribusi Kami dalam</span>
        <br /> Pendidikan Indonesia
      </h1>
      <div className="flex flex-wrap items-center gap-16 justify-center">
        {StartCountUp &&
          students.map((x) => (
            <div className="font-bold space-y-3">
              <h1 className="text-center text-4xl text-judul">
                {StartCountUp && (
                  <CountUp start={0} end={x.jumlah} duration={3} />
                )}
                +
              </h1>
              <p className="text-xl text-center text-subjudul">{x.deskripsi}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Students;
