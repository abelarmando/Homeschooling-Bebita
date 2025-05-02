import Background_img from "../components/Background_img";
function Hero() {
  return (
    <div className="w-full bg-linear-to-r from-[rgba(11,73,180,255)] to-[rgba(54,124,245,255)] h-[500px] flex  items-center padding-def relative overflow-hidden max-md:py-[400px]">
      <Background_img />
      <div className="md:flex gap-5 w-full justify-between items-center z-99 max-md:space-y-4">
        <div className="space-y-3">
          <div className="w-fit p-2 bg-[#97b0db] rounded-lg flex justify-center items-center">
            <p className="text-white">TERAKREDITASI</p>
          </div>
          <h1 className="text-3xl font-bold text-white">
            Bebita Homeschooling Build Character and Explores Student's
            Interests
          </h1>
          <p className="text-xl text-white">
            Bebita Homeschooling offers a flexible, interactive, and supportive
            learning environment, empowering every child to reach their full
            potential from the comfort of home.
          </p>
          <button className="bg-white rounded-lg px-3 py-2 cursor-pointer font-semibold">
            Daftar Sekarang
          </button>
        </div>
        <div>
          <img src="./dev.jpg" alt="" className="w-[400px] " />
        </div>
      </div>
    </div>
  );
}

export default Hero;
