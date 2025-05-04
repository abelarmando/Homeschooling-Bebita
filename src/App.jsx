import About from "./layouts/About";
import Class from "./layouts/Class";
import Course from "./layouts/Course";
import Hero from "./layouts/Hero";
import Partners from "./layouts/Partners";
import Students from "./layouts/Students";

function App() {
  return (
    <div className="space-y-30">
      <Hero />
      <Partners />
      <About />
      <Class />
      <Students />
    </div>
  );
}

export default App;
