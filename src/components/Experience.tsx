import React from "react";
import {
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Briefcase,
  ExternalLink, // Impor ikon baru
} from "lucide-react";

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

  // Pengalaman kerja dengan tambahan link sertifikat
  const experience = [
    {
      title: "Anggota Divisi Keamanan",
      company: "Latihan Dasar Kepemimpinan Mahasiswa (LDKM) FTI - UKSW",
      period: "Juli 2024",
      location: "Salatiga, Jawa Tengah",
      description:
        "Bertanggung jawab untuk menjaga keamanan dan ketertiban selama acara pelatihan kepemimpinan untuk mahasiswa Fakultas Teknologi Informasi.",
      achievements: [
        "Berkolaborasi secara efektif dalam tim dan berkoordinasi dengan divisi lain untuk menjamin keamanan serta kelancaran acara.",
      ],
      // Gunakan path relatif dari folder public
      certificateUrl: "/Adi Setyo Wenang_Panitia_LDKM2.pdf",
    },
    {
      title: "Fasilitator",
      company: "Orientasi Mahasiswa Baru (OMB) UKSW",
      period: "Agustus 2023",
      location: "Salatiga, Jawa Tengah",
      description:
        "Bertindak sebagai mentor dan penanggung jawab bagi kelompok mahasiswa baru selama masa orientasi universitas untuk membantu proses adaptasi dan memperkenalkan lingkungan akademik.",
      achievements: [
        "Membimbing mahasiswa baru melalui sesi mentoring, penyampaian informasi, dan memimpin aktivitas kelompok.",
      ],
      // Gunakan path relatif dari folder public
      certificateUrl: "/Adi Setyo Wenang_Fasilitator_OMB.pdf",
    },
  ];

  // Sertifikasi dengan path yang disesuaikan
  const certifications = [
    {
      name: "Machine Learning with Python",
      issuer: "Cognitive Class",
      date: "2024",
      icon: <Award className="w-5 h-5" />,
      // Gunakan path relatif dari folder public
      certificateUrl: "/Sertif Machine Learning with Python.pdf",
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
                Pengalaman Kepanitiaan / Kegiatan
              </h3>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
                  >
                    <div className="flex-grow">
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
                        {exp.achievements.map(
                          (achievement, achievementIndex) => (
                            <div
                              key={achievementIndex}
                              className="flex items-start"
                            >
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-300 text-sm">
                                {achievement}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* === TOMBOL SERTIFIKAT DITAMBAHKAN DI SINI === */}
                    {exp.certificateUrl && (
                      <div className="mt-5">
                        <a
                          href={exp.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-semibold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 px-4 py-2 rounded-lg transition-colors duration-300"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Lihat Sertifikat
                        </a>
                      </div>
                    )}
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
                      </h4>
                      <p className="text-pink-300 text-sm mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-gray-400 text-xs mb-2">{cert.date}</p>
                      {/* === LINK SERTIFIKAT DIPERBARUI DI SINI === */}
                      {cert.certificateUrl && (
                        <a
                          href={cert.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-purple-300 hover:underline"
                        >
                          <ExternalLink className="w-4 h-4 mr-1.5" />
                          Lihat Sertifikat
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-6 p-5 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 border border-purple-500/30 rounded-xl">
                <h4 className="text-white font-semibold mb-3">
                  Sedang Belajar
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">
                      Mendalami pengembangan aplikasi mobile cross-platform
                      dengan Flutter.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">
                      Eksplorasi konsep Kecerdasan Buatan (AI) dan Machine
                      Learning untuk implementasi praktis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
