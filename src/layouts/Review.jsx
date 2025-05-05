import React from "react";
import Card_Review from "../components/Card_Review";
import Background_img from "../components/Background_img";

function Review() {
  return (
    <div className="padding-def padding-def-y space-y-4 relative overflow-hidden">
      <Background_img />
      <h1 className="text-center font-bold text-3xl">
        <span className="text-blue-500">Penilaian Alumni dan Orang Tua</span>
        <br />
        Bebita Homeschooling
      </h1>
      <div className="flex gap-10 justify-center flex-wrap">
        <Card_Review />
        <Card_Review />
        <Card_Review />
        <Card_Review />
      </div>
    </div>
  );
}

export default Review;
