import Background_img from "../components/Background_img";
import Border_Photo from "../components/Border_Photo";
function Hero() {
  return (
    <div className="w-full bg-linear-to-r from-[rgba(11,73,180,255)] to-[rgba(54,124,245,255)] min-h-[500px] md:flex items-center  padding-def padding-def-y relative overflow-hidden ">
      <Background_img />
      <div className="flex w-full  justify-between max-md:flex-col-reverse gap-4 max-md:mt-[50px] ">
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
            <button
              className="bg-white rounded-lg px-3 py-2 cursor-pointer font-semibold z-10"
              onClick={() =>
                (window.location.href = "https://wa.me/6285775262667")
              }
            >
              Daftar Sekarang
            </button>
          </div>
        </div>
        <div className="relative md:w-1/2 ">
          <div className="2xl:w-[400px] md:w-[350px] md:h-[300px] md:absolute 2xl:left-[15%] -bottom-20 z-10  ">
            <Border_Photo img={"./images/Header_1.jpg"} />
          </div>
          <div className="md:absolute md:translate-x-[50%]  2xl:w-[400px] md:w-[350px] md:h-[300px] 2xl:right-[25%]  md:top-0 md:right-45 max-md:hidden">
            <Border_Photo img={"./images/Header_2.jpg"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
