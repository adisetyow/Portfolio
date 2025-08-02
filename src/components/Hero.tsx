import React from "react";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import ProfileImage from "./assets/img/1.webp";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  // --- FUNGSI UNTUK MENGUNDUH CV ---
  const downloadResume = () => {
    const link = document.createElement("a");
    // Path menunjuk ke file di dalam folder public
    link.href = "/CV_Adi_Setyo_Wenang.pdf";
    // Nama file yang akan diunduh oleh pengguna
    link.download = "CV_Adi_Setyo_Wenang.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative">
                <img
                  src={ProfileImage}
                  alt="Adi Setyo Wenang"
                  className="w-80 h-80 rounded-xl object-cover border-4 border-gray-800 shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-8 animate-slide-in-right">
            <div className="space-y-4">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                <span className="block text-white">Halo, Saya</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient leading-normal">
                  Adi Setyo Wenang
                </span>
              </h1>
              <TypeAnimation
                sequence={[
                  "Mahasiswa Teknik Informatika",
                  1000,
                  "Software Engineer",
                  1000,
                  "Frontend Developer",
                  1000,
                  "Backend Developer",
                  1000,
                  "AI Learner",
                  1000,
                  "Problem Solver",
                  1000,
                ]}
                wrapper="p"
                speed={50}
                className="text-base lg:text-lg text-purple-400"
                repeat={Infinity}
              />
            </div>

            <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Mahasiswa Teknik Informatika yang berfokus pada Software
              Engineering dan pengembangan web. Terampil dalam membangun solusi
              digital yang efisien, dengan minat kuat untuk berkembang di bidang
              aplikasi mobile dan Artificial Intelligence (AI).
            </p>

            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/adisetyow"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                data-cursor="pointer"
              >
                <Github className="w-6 h-6 text-white group-hover:animate-spin" />
              </a>
              <a
                href="https://www.linkedin.com/in/adi-setyo-73239529b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-cyan-600 transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                data-cursor="pointer"
              >
                <Linkedin className="w-6 h-6 text-white group-hover:animate-spin" />
              </a>
              <a
                href="mailto:adisetyo.w1112@gmail.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-pink-600 transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                data-cursor="pointer"
              >
                <Mail className="w-6 h-6 text-white group-hover:animate-spin" />
              </a>
            </div>

            <div className="pt-0 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 animate-pulse-slow"
                data-cursor="pointer"
              >
                Tentang Saya
                <ChevronDown className="ml-2 w-5 h-5" />
              </button>
              {/* --- TOMBOL INI DIPERBARUI --- */}
              <button
                onClick={downloadResume} // Menggunakan fungsi yang sudah didefinisikan
                className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                data-cursor="pointer"
              >
                <Download className="mr-2 w-5 h-5" />
                Unduh CV
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-[43%] transform -translate-x-1/2 animate-float">
          <div className="animate-bounce flex flex-col items-center text-purple-400">
            <p className="text-sm">Scroll Down</p>
            <ChevronDown className="w-6 h-6 mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
