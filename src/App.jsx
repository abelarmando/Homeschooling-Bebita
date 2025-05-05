import About from "./layouts/About";
import Activity from "./layouts/Activity";
import Alumni from "./layouts/Alumni";
import Class from "./layouts/Class";
import Course from "./layouts/Course";
import Hero from "./layouts/Hero";
import Partners from "./layouts/Partners";
import Review from "./layouts/Review";
import Students from "./layouts/Students";

function App() {
  return (
    <div className="space-y-20">
      <Hero />
      <Partners />
      <About />
      <Class />
      <Students />
      <Alumni />
      <Review />
      <Activity />
    </div>
  );
}

export default App;
