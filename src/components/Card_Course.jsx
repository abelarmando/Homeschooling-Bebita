function Card_Course({ title, text }) {
  return (
    <div className="bg-[#fef3f1] rounded-lg w-[300px] p-5 space-y-3 transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-xl font-bold text-center">{title}</h2>
      <p className="">{text}</p>
    </div>
  );
}

export default Card_Course;
