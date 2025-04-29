import Card_Course from "../components/card_course";
import { programs } from "../constant";
function Course() {
  return (
    <div className="space-y-4 padding-def ">
      <h1 className="text-center font-bold text-2xl">
        What are the Class Program at Bebita Homeschooling?
      </h1>
      <div className="flex gap-4 flex-wrap justify-center">
        {programs.map((x) => (
          <Card_Course title={x.name} text={x.description} />
        ))}
      </div>
    </div>
  );
}

export default Course;
