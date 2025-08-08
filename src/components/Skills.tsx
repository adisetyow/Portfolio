import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Bahasa Pemrograman",
      skills: [
        { name: "JavaScript/TypeScript", level: 35 },
        { name: "Python", level: 35 },
        { name: "Java", level: 30 },
        { name: "C++", level: 25 },
        { name: "SQL", level: 45 },
      ],
    },
    {
      title: "Pengembangan Frontend",
      skills: [
        { name: "React.js", level: 58 },
        { name: "Vue.js", level: 45 },
        { name: "Flutter", level: 35 },
        { name: "HTML/CSS", level: 62 },
        { name: "Tailwind CSS", level: 55 },
        { name: "Desain Responsif", level: 50 },
      ],
    },
    {
      title: "Pengembangan Backend",
      skills: [
        { name: "Node.js", level: 52 },
        { name: "Express.js", level: 50 },
        { name: "Laravel", level: 68 },
        { name: "Django", level: 15 },
        { name: "REST APIs", level: 45 },
        { name: "GraphQL", level: 10 },
      ],
    },
    {
      title: "Alat & Teknologi",
      skills: [
        { name: "Git/GitHub", level: 58 },
        { name: "Docker", level: 45 },
        { name: "AWS", level: 20 },
        { name: "MongoDB", level: 50 },
        { name: "PostgreSQL", level: 42 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Keterampilan{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Teknis
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Gambaran menyeluruh mengenai keahlian teknis dan tingkat penguasaan
            saya
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105 animate-slide-in-up group"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              data-cursor="pointer"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-purple-300 transition-colors duration-300">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-purple-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out animate-skill-bar hover:animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Teknologi Tambahan */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Teknologi Tambahan
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Arsitektur Microservices",
              "Machine Learning",
              "Struktur Data",
              "Algoritma",
              "Perancangan Sistem",
              "Pengujian (Testing)",
              "Linux",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-full text-gray-300 hover:border-purple-400 hover:text-white transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
