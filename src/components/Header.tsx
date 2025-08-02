import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

// Sebaiknya, tipe data untuk navItems didefinisikan agar lebih rapi
interface NavItem {
  name: string;
  href: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang Saya", href: "#about" },
    { name: "Keterampilan", href: "#skills" },
    { name: "Proyek", href: "#projects" },
    { name: "Pengalaman", href: "#experience" }, // Diubah dari Pendidikan agar sesuai
    { name: "Kontak", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // --- FUNGSI INI DIPERBARUI ---
  const downloadResume = () => {
    const link = document.createElement("a");
    // Path menunjuk ke file di dalam folder public
    link.href = "/CV_Adi_Setyo_Wenang.pdf";
    // Nama file yang akan diunduh oleh pengguna
    link.download = "CV_Adi_Setyo_Wenang.pdf";
    link.click();
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("#home")}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Portfolio
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={downloadResume}
                className="ml-4 inline-flex items-center px-4 py-2 border border-purple-500 rounded-md text-sm font-medium text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-200"
              >
                <Download className="w-4 h-4 mr-2" />
                Unduh CV {/* Diubah */}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-purple-400 p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={downloadResume}
                className="w-full mt-2 inline-flex items-center justify-center px-4 py-2 border border-purple-500 rounded-md text-sm font-medium text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-200"
              >
                <Download className="w-4 h-4 mr-2" />
                Unduh CV {/* Diubah */}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
