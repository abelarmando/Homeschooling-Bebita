import React from "react";

function Footer() {
  return (
    <div className="w-full bg-blue-600 padding-def py-[50px]">
      <div className="md:flex justify-between text-white max-md:space-y-4">
        <div className="md:w-[400px] space-y-4 w-full ">
          <h1 className="font-bold text-2xl">About us</h1>
          <p>
            Homeschooling Bebita adalah lembaga pendidikan berbasis rumah yang
            berkomitmen mendampingi tumbuh kembang anak secara holistik,
            fleksibel, dan sesuai minat bakat. Dapatkan solusi pendidikan
            terbaik yang personal, berkualitas, dan sesuai kebutuhan keluarga
            Anda.
          </p>
        </div>
        <div className="md:w-[400px] space-y-4 w-full">
          <h1 className="font-bold text-2xl">Contact Info</h1>
          <p>
            Jl. Abdulrahman No.199, RT.16/RW.5, Cibubur, Kec. Ciracas, Kota
            Jakarta Timur, Daerah Khusus Ibukota Jakarta 13720
          </p>
          <p>Whatsapp: 085775262667</p>
        </div>
      </div>
      <div className="mt-4">
        <hr />
        <p className="text-center text-white">
          &copy; 2023 Bebita Homeschooling. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
