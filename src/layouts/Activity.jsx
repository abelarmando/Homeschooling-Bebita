import React from "react";
import Card_Activity from "../components/Card_Activity";
import Background_img from "../components/Background_img";
import { activity_students } from "../constant";

function Activity() {
  return (
    <div className="padding-def padding-def-y relative overflow-hidden">
      <Background_img />
      <h1 className="text-center font-bold text-judul">
        Our Activities In <br /> Homeschooling Bebita
      </h1>
      <div className="flex flex-wrap items-center gap-4 justify-center">
        {activity_students.map((x) => (
          <Card_Activity title={x.name} img={x.img} />
        ))}
      </div>
    </div>
  );
}

export default Activity;
