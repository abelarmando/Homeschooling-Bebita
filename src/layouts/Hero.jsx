function Hero() {
  return (
    <div className="w-full bg-linear-to-r from-[rgba(11,73,180,255)] to-[rgba(54,124,245,255)] h-[500px] flex  items-center padding-def">
      <div className="flex gap-5 w-full justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Bebita Homeschooling Build Character and Explores Student's
            Interests
          </h1>
          <p className="text-xl text-white">
            Personalized education to nurture character and creativity
          </p>
        </div>
        <div>
          <img src="./dev.jpg" alt="" className="w-[400px] " />
        </div>
      </div>
    </div>
  );
}

export default Hero;
