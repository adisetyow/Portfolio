import React from "react";
import { ExternalLink, Github } from "lucide-react";
import portfolioImg from "./assets/img/porto.png";
import inventarisImg from "./assets/img/inventaris-desa.png";
import figmaImg from "./assets/img/figma-olahraga.png";
import mobileTmImg from "./assets/img/mobile-tm.png";
import tiketKeretaImg from "./assets/img/tiket-kereta.png";

const Projects = () => {
  const projects = [
    {
      title: "Aplikasi Pemesanan Tiket Kereta Api",
      description:
        "Aplikasi full-stack berbasis web untuk pemesanan tiket kereta api dengan arsitektur microservices.",
      image: tiketKeretaImg,
      technologies: ["React.js", "Node.js", "Express.js", "MySQL"],
      github: "https://github.com/adisetyow/BE_FE-Kereta-Api.git",
      demo: "",
      featured: true,
    },
    {
      title: "Aplikasi Mobile Tunas Mandiri",
      description:
        "Aplikasi mobile berbasis Flutter untuk komunitas pemuda desa Tunas Mandiri. Mendukung fitur login dan tampilan dashboard.",
      image: mobileTmImg,
      technologies: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/adisetyow/Flutter-Login.git",
      demo: "",
      featured: true,
    },
    {
      title: "Website Portofolio",
      description:
        "Website portofolio pribadi yang dibangun untuk menampilkan keahlian dan proyek yang telah dikerjakan.",
      image: portfolioImg,
      technologies: ["React.js", "Tailwind CSS", "Vite"],
      github: "https://github.com/adisetyow/Portofolio.git",
      demo: "",
      featured: false,
    },
    {
      title: "Sistem Manajemen Inventaris Desa",
      description:
        "Sistem untuk mengelola data inventaris di Desa Karangduren untuk meningkatkan efisiensi. (Masih dalam tahap pengembangan).",
      image: inventarisImg,
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      github: "", // Isi dengan link GitHub jika ada
      demo: "",
      featured: false,
    },
    {
      title: "Desain UI/UX Aplikasi Pencarian Tim Olahraga",
      description:
        "Merancang UI/UX aplikasi untuk pencarian tim, penjadwalan sparing, dan pemesanan lapangan di Figma.",
      image: figmaImg,
      technologies: ["Figma", "User Flow", "Prototyping"],
      github: "",
      demo: "https://www.figma.com/proto/h9eLco6MUO28C8jn6PEOoZ/Design-System?node-id=2190-13958&t=Ww4fOTSP70LvWokB-1&scaling=scale-down&content-scaling=fixed&page-id=2190%3A1005&starting-point-node-id=2190%3A13958&show-proto-sidebar=1",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proyek{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Saya
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Beberapa proyek yang telah saya kembangkan sebagai bagian dari
            pembelajaran dan kontribusi dalam pengembangan teknologi.
          </p>
        </div>

        {/* Proyek Unggulan */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* ✅ Kode diubah agar gambar tidak error jika kosong */}
              {project.image && (
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200 text-white"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Kode
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 rounded-lg transition-all duration-200 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proyek Lainnya */}
        {otherProjects.length > 0 && (
          <>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Proyek Lainnya
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* ✅ Kode diubah agar gambar tidak error jika kosong */}
                  {project.image && (
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-cyan-600/20 border border-cyan-500/30 rounded text-xs text-cyan-300"
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs text-gray-500">
                          +{project.technologies.length - 3} lainnya
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-3 mt-auto pt-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          <span className="text-sm">Kode</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          <span className="text-sm">Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
