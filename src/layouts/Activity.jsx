import React from "react";
import Card_Activity from "../components/Card_Activity";

function Activity() {
  return (
    <div className="padding-def padding-def-y">
      <h1 className="text-center font-bold text-3xl">
        Our Activities In <br /> Homeschooling Bebita
      </h1>
      <div className="flex flex-wrap items-center gap-4 justify-center">
        <Card_Activity />
        <Card_Activity />
        <Card_Activity />
        <Card_Activity />
      </div>
    </div>
  );
}

export default Activity;
