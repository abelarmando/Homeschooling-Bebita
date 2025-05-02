import About from "./layouts/About";
import Course from "./layouts/Course";
import Hero from "./layouts/Hero";
import Partners from "./layouts/Partners";

function App() {
  return (
    <div className="space-y-50">
      <Hero />
      <Partners />
      <About />
      <Course />
    </div>
  );
}

export default App;
