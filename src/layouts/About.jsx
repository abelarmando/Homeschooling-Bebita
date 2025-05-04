import Background_img from "../components/Background_img";
import Card_Course from "../components/Card_Course";
import { programs } from "../constant";
console.log(programs);
function About() {
  return (
    <div className="padding-def padding-def-y space-y-16  w-full relative overflow-hidden">
      <Background_img />
      <h1 className="font-bold text-4xl text-center">
        <span className="text-blue-500">What is Defferent About</span>
        <br />
        Bebita Homeschooling?
      </h1>
      <div className="flex gap-16 justify-center flex-wrap">
        {programs.map((x) => (
          <Card_Course title={x.judul} text={x.deskripsi} img={x.img} />
        ))}
      </div>
    </div>
  );
}

export default About;
