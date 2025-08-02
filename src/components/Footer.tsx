import React from "react";
import { Heart, Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Adi Setyo Wenang
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Mahasiswa Teknik Informatika yang bersemangat menciptakan solusi
              perangkat lunak inovatif dan mengeksplorasi teknologi terkini.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Menu Cepat</h4>
            <ul className="space-y-2">
              {[
                { name: "Beranda", href: "#home" },
                { name: "Tentang Saya", href: "#about" },
                { name: "Keterampilan", href: "#skills" },
                { name: "Proyek", href: "#projects" },
                { name: "Pengalaman", href: "#experience" },
                { name: "Kontak", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() =>
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Current Status */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Status Saat Ini
            </h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-gray-400">Tersedia untuk magang</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                <span className="text-gray-400">Sedang menempuh studi</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <span className="text-gray-400">Terbuka untuk kolaborasi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Dibuat oleh</span>
              <Heart className="w-4 h-4 mx-2 text-red-500" />
              <span>Adi Setyo Wenang</span>
            </div>

            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Adi Setyo Wenang. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
