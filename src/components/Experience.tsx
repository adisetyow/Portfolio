import React from "react";
import { Calendar, MapPin, Award, BookOpen, Briefcase } from "lucide-react";

const Experience = () => {
  // Data Pendidikan disesuaikan dengan yang Anda berikan
  const education = [
    {
      institution: "Universitas Kristen Satya Wacana",
      degree: "S1 Teknik Informatika",
      specialization: "Fakultas Teknologi Informasi",
      period: "2022 - Sekarang",
      location: "Salatiga, Indonesia",
      description:
        "Fokus pada pengembangan perangkat lunak, struktur data, dan kecerdasan buatan. Aktif terlibat dalam proyek-proyek akademis dan pengembangan aplikasi mandiri.",
      achievements: [
        "Mempertahankan IPK 3.62 / 4.00",
        "Mengembangkan beberapa proyek full-stack sebagai bagian dari kurikulum",
        "Aktif dalam kelompok studi pengembangan web dan mobile",
      ],
    },
    {
      institution: "SMA Negeri 1 Tengaran",
      degree: "Jurusan MIPA",
      specialization: "Matematika & Ilmu Pengetahuan Alam",
      period: "2019 - 2022",
      location: "Kab. Semarang, Indonesia",
      description:
        "Memberikan dasar yang kuat dalam matematika dan sains yang mendukung studi saya di bidang Teknik Informatika.",
    },
  ];

  // Pengalaman kerja dibuat relevan dengan proyek Anda
  const experience = [
    {
      title: "Full-Stack Developer (Proyek Aplikasi Tiket Kereta)",
      company: "Proyek Akademik",
      period: "Juni 2025 - Juli 2025",
      location: "Remote",
      description:
        "Merancang dan membangun aplikasi pemesanan tiket kereta api dari awal hingga akhir menggunakan arsitektur microservices untuk memastikan skalabilitas dan kemudahan pemeliharaan.",
      achievements: [
        "Mengimplementasikan backend dengan Node.js dan frontend dengan React.js",
        "Merancang skema database MySQL dan mengintegrasikannya dengan layanan backend",
        "Berhasil membuat sistem autentikasi dan manajemen pemesanan pengguna",
      ],
    },
    {
      title: "Mobile App Developer (Proyek Aplikasi Tunas Mandiri)",
      company: "Proyek Pribadi",
      period: "Jan 2025 - Sekarang",
      location: "Remote",
      description:
        "Mengembangkan aplikasi mobile untuk komunitas pemuda desa menggunakan Flutter, dengan fokus pada pengalaman pengguna yang bersih dan fungsionalitas dasar.",
      achievements: [
        "Membangun fitur login dan registrasi pengguna menggunakan Firebase Authentication",
        "Merancang dan mengimplementasikan halaman dashboard yang informatif",
        "Memastikan desain aplikasi responsif untuk berbagai ukuran layar perangkat mobile",
      ],
    },
    {
      title: "Laravel Developer (Proyek Sistem Inventaris Desa)",
      company: "Proyek Pribadi (Dalam Pengembangan)",
      period: "Mei 2025 - Sekarang",
      location: "Remote",
      description:
        "Sedang dalam proses pengembangan sistem manajemen inventaris untuk membantu administrasi Desa Karangduren. Proyek ini bertujuan untuk mendigitalisasi pencatatan aset desa.",
      achievements: [
        "Membangun struktur dasar aplikasi menggunakan framework Laravel",
        "Merancang model dan migrasi database untuk manajemen aset",
        "Mengembangkan modul dasar untuk operasi CRUD (Create, Read, Update, Delete)",
      ],
    },
  ];

  // Sertifikasi dibuat relevan dengan keahlian Anda
  const certifications = [
    {
      name: "Machine Learning with Python",
      issuer: "Cognitive Class",
      date: "2024",
      icon: <Award className="w-5 h-5" />,
      certificateUrl:
        "https://drive.google.com/file/d/1YgPPVLmlyYrgfc80T2uC_-1HnnlcIhJT/view?usp=sharing",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pengalaman &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Pendidikan
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Perjalanan akademis dan pengalaman profesional saya dalam dunia
            pengembangan perangkat lunak.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Kolom Pengalaman & Pendidikan */}
          <div className="lg:col-span-2 space-y-12">
            {/* Pendidikan */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <BookOpen className="w-8 h-8 mr-4 text-purple-400" />
                Pendidikan
              </h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-purple-300 font-semibold mb-1">
                          {edu.institution}
                        </p>
                        <p className="text-gray-400 text-sm mb-2">
                          {edu.specialization}
                        </p>
                      </div>
                      <div className="md:text-right mt-2 md:mt-0">
                        <div className="flex items-center text-gray-400 mb-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="space-y-2">
                        {edu.achievements.map(
                          (achievement, achievementIndex) => (
                            <div
                              key={achievementIndex}
                              className="flex items-start"
                            >
                              <div className="w-2 h-2 bg-purple-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-300 text-sm">
                                {achievement}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Pengalaman Kerja */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Briefcase className="w-8 h-8 mr-4 text-cyan-400" />
                Pengalaman Kerja
              </h3>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">
                          {exp.title}
                        </h4>
                        <p className="text-cyan-300 font-semibold mb-2">
                          {exp.company}
                        </p>
                      </div>
                      <div className="md:text-right mt-2 md:mt-0">
                        <div className="flex items-center text-gray-400 mb-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div
                          key={achievementIndex}
                          className="flex items-start"
                        >
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Kolom Sertifikasi */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Award className="w-8 h-8 mr-4 text-pink-400" />
              Sertifikasi
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-sm p-5 rounded-xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="p-2 bg-gradient-to-br from-pink-600 to-purple-600 rounded-lg text-white mr-4 flex-shrink-0">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold leading-tight mb-1">
                        {cert.name}
                        {cert.certificateUrl && (
                          <a
                            href={cert.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-sm text-purple-400 hover:underline"
                          >
                            <p></p>(Lihat Sertifikat)
                          </a>
                        )}
                      </h4>

                      <p className="text-pink-300 text-sm mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-gray-400 text-xs">{cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-6 p-5 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 border border-purple-500/30 rounded-xl">
                <h4 className="text-white font-semibold mb-2">
                  Sedang Belajar
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  Manajemen State Lanjutan di React & Flutter
                </p>
                <p className="text-gray-400 text-xs">
                  Target Selesai: Kuartal 4 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
