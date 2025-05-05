import Background_img from "../components/Background_img";
function Hero() {
  return (
    <div className="w-full bg-linear-to-r from-[rgba(11,73,180,255)] to-[rgba(54,124,245,255)] min-h-[500px] md:flex items-center  padding-def padding-def-y relative overflow-hidden  ">
      <Background_img />
      <div className="flex w-full  justify-between max-md:flex-col-reverse gap-4">
        <div className="md:flex gap-5 md:w-1/2 justify-between items-center  max-md:space-y-4">
          <div className="space-y-3">
            <div className="w-fit p-2 bg-[#97b0db] rounded-lg flex justify-center items-center">
              <p className="text-white">TERAKREDITASI</p>
            </div>
            <h1 className="text-3xl font-bold text-white">
              Bebita Homeschooling Build Character and Explores Student's
              Interests
            </h1>
            <p className="text-xl text-white">
              Bebita Homeschooling offers a flexible, interactive, and
              supportive learning environment, empowering every child to reach
              their full potential from the comfort of home.
            </p>
            <button className="bg-white rounded-lg px-3 py-2 cursor-pointer font-semibold z-10">
              Daftar Sekarang
            </button>
          </div>
        </div>
        <div className="relative md:w-[400px] md:h-[400px]">
          <img
            src="./dev.jpg"
            alt=""
            className="w-[400px] absolute bottom-0 z-10 max-md:hidden"
          />
          <img
            src="./dev.jpg"
            alt=""
            className="md:absolute md:translate-x-[50%] "
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
