function Card_Course({ title, text, img }) {
  return (
    <div className="bg-bg-secondary opacity-80 rounded-lg w-[300px] p-5 space-y-3  relative h-[320px] hover:shadow-2xl hover:h-[400px] hover:w-[320px] transition-all duration-150 group">
      <h2 className="text-subjudul font-bold text-center w-[270px]  h-[60px] ">
        {title}
      </h2>
      <p className="text-center absolute w-[180px] left-1/2 translate-x-[-30%]  translate-y-10 text-isi">
        {text}
      </p>
      <img
        src={img}
        alt=""
        className="absolute -left-10 bottom-0 w-[120px] h-[200px] group-hover:w-[150px] transition-all duration-150 group-hover:h-[230px]"
      />
    </div>
  );
}

export default Card_Course;
