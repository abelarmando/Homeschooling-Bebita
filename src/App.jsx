import About from "./layouts/About";
import Activity from "./layouts/Activity";
import Alumni from "./layouts/Alumni";
import Class from "./layouts/Class";
import Navbar from "./layouts/Navbar";
import Hero from "./layouts/Hero";
import Partners from "./layouts/Partners";
import Review from "./layouts/Review";
import Students from "./layouts/Students";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="space-y-20">
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <Class />
      <Students />
      <Alumni />
      <Review />
      <Activity />
      <Footer />
    </div>
  );
}

export default App;
