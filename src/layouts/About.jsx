function About() {
  return (
    <div className="padding-def ">
      <div className="flex gap-4 relative">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">
            What is Defferent About Bebita Homeschooling?
          </h1>
          <p>
            Grow with Us: Build Character, Embrace Emotions, and Learn
            Creatively
          </p>
          <ul className="space-y-3">
            <li>✅ Pengembangan karakter dan ketahanan mental anak</li>
            <li>✅ Pembelajaran berbasis kebutuhan psikologis peserta didik</li>
            <li>✅ Lingkungan belajar ramah dan tanpa diskriminasi </li>
            <li>✅ Aktivitas pembelajaran kontekstual dan eksploratif </li>
            <li>✅ Dukungan penuh untuk Anak Berkebutuhan Khusus</li>
          </ul>
        </div>
        <div>
          <img
            src="./dev.jpg"
            alt=""
            className="w-80 h-80 rounded-lg absolute right-40 -translate-y-15"
          />
          <img
            src="./dev.jpg"
            alt=""
            className="w-80 h-80  absolute right-0 translate-y-25  rounded-lg border-5 border-white "
          />
        </div>
      </div>
    </div>
  );
}

export default About;
