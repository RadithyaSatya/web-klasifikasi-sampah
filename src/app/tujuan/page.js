// app/about/page.tsx atau pages/about.tsx (tergantung Next.js routing yang kamu pakai)
"use client";

import Image from "next/image";
import { CheckSquare, Linkedin } from "lucide-react";


const About = () => {
  return (
    <div>
      {/* Misi Section */}
      <section
        className="py-5 px-4 md:px-16 bg-no-repeat bg-cover bg-center"
      >
        <div className="grid md:grid-cols-2 place-items-center">
          <div className="max-w-3xl mx-auto px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">
              Tujuan Saya Membuat Platform Ini
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
                Saya membuat website Kaslam, percaya bahwasannya setiap langkah kecil dalam
              pengelolaan sampah dapat membawa perubahan besar bagi lingkungan.
              Oleh karena itu, kami berkomitmen untuk:
            </p>
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start gap-3">
                <CheckSquare className="text-black w-5 h-5 mt-1" />
                Mengedukasi masyarakat tentang pentingnya memilah dan mendaur
                ulang sampah.
              </li>
              <li className="flex items-start gap-3">
                <CheckSquare className="text-black w-5 h-5 mt-1" />
                Menghadirkan teknologi cerdas berbasis AI untuk membantu
                mengidentifikasi jenis sampah dengan cepat dan akurat.
              </li>
              <li className="flex items-start gap-3">
                <CheckSquare className="text-black w-5 h-5 mt-1" />
                Mendorong gaya hidup ramah lingkungan dengan solusi inovatif
                dalam pengelolaan sampah.
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="/images/icon_daur_ulang.png"
              alt="Kaslam Icon"
              width={360}
              height={360}
              className="w-[300px] md:w-[360px] pb- 5"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;