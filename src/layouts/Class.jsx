import React from "react";
import Card_Class from "../components/Card_Class";
import { jenis_kelas } from "../constant";
import Background_img from "../components/Background_img";

function Class() {
  return (
    <div className="padding-def padding-def-y space-y-16 h-fit w-full relative overflow-hidden">
      <Background_img />
      <h1 className="font-bold text-4xl text-center">
        <span className="text-blue-500">What is Defferent About</span>
        <br />
        Bebita Homeschooling?
      </h1>
      <div className="grid-cols-1 md:grid-cols-2 grid gap-16 justify-center">
        {jenis_kelas.map((x) => (
          <Card_Class title={x.judul} text={x.deskripsi} img={x.img} />
        ))}
      </div>
    </div>
  );
}

export default Class;
