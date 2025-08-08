import React from "react";
import { Code2, GraduationCap, Target, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Pendidikan Akademik",
      description:
        "Fokus pada Rekayasa Perangkat Lunak selama studi Teknik Informatika.",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Kemampuan Teknis",
      description:
        "Terampil menggunakan bahasa pemrograman dan framework dalam berbagai proyek.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Pemecah Masalah",
      description:
        "Antusias menganalisis permasalahan dan merancang solusi yang efisien dan skalabel.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Berorientasi Inovasi",
      description:
        "Aktif mengeksplorasi teknologi terbaru dan menerapkannya secara praktis.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tentang{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Saya
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Perjalanan saya dalam rekayasa perangkat lunak didorong oleh
            semangat untuk menciptakan solusi inovatif yang membawa dampak
            positif.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="prose prose-lg text-gray-300">
              <p className="text-lg leading-relaxed">
                Mahasiswa Teknik Informatika yang berdedikasi dan bersemangat
                dalam menciptakan solusi perangkat lunak yang{" "}
                <strong className="text-purple-400">inovatif</strong>.
                Perjalanan saya di dunia teknologi dimulai dari ketertarikan
                mendalam pada bagaimana kode dapat mengubah ide menjadi
                kenyataan.
              </p>

              <p className="text-lg leading-relaxed">
                Dengan spesialisasi di bidang{" "}
                <strong className="text-cyan-400">Software Engineering</strong>,
                saya terus mempelajari teknologi dan metodologi baru untuk
                meningkatkan keterampilan dan tetap relevan di industri yang
                berkembang pesat ini. Tujuan utama saya adalah memanfaatkan{" "}
                <strong className="text-cyan-400">teknologi</strong> untuk
                menciptakan solusi bermakna yang memberikan{" "}
                <strong className="text-purple-400">dampak positif</strong> bagi
                banyak orang.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-cursor="pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-white group-hover:animate-pulse">
                    {item.icon}
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
