import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

// Tipe data untuk form
type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  // Menggunakan React Hook Form untuk manajemen state dan validasi
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  // Fungsi untuk mengirim email menggunakan EmailJS
  const onSubmit = async (data: FormData) => {
    const serviceId = "service_v9kd7lp"; // Ganti dengan Service ID Anda
    const templateId = "template_tvgk85f"; // Ganti dengan Template ID Anda
    const publicKey = "ThAnGZTXldiiXagu7"; // Ganti dengan Public Key Anda

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        publicKey
      );
      toast.success(
        "Pesan berhasil dikirim! Saya akan segera menghubungi Anda."
      );
      reset();
    } catch (error) {
      console.error("Gagal mengirim email:", error);
      toast.error("Terjadi kesalahan. Silakan coba lagi nanti.");
    }
  };

  // Informasi kontak Anda
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "adisetyo.w1112@gmail.com",
      link: "mailto:adisetyo.w1112@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telepon",
      value: "(+62) 857-4179-7964",
      link: "https://wa.me/6285741797964",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Lokasi",
      value: "Kabupaten Semarang, Jawa Tengah",
      link: "https://maps.app.goo.gl/kQF6ssCoaCrR3kpW9",
    },
  ];

  // Tautan media sosial Anda
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/adisetyow",
      color: "hover:text-gray-300",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/adi-setyo-73239529b/", // Ganti dengan URL LinkedIn Anda
      color: "hover:text-blue-400",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      url: "https://www.instagram.com/adisetyw_/", // Ganti dengan URL Instagram Anda
      color: "hover:text-pink-400",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      {/* Komponen Toaster untuk notifikasi */}
      <Toaster
        position="top-center"
        toastOptions={{
          className: "bg-gray-800 text-white border border-gray-700",
          success: {
            iconTheme: {
              primary: "#10B981",
              secondary: "#FFFFFF",
            },
          },
          error: {
            iconTheme: {
              primary: "#F87171",
              secondary: "#FFFFFF",
            },
          },
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hubungi{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Saya
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mari diskusikan peluang, proyek, atau sekadar terhubung. Saya selalu
            antusias untuk berkolaborasi dalam ide-ide inovatif.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informasi Kontak */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Mari Mulai Percakapan
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Saya saat ini sedang mencari peluang magang dan terbuka untuk
                diskusi proyek yang menarik. Baik Anda mencari developer yang
                bersemangat atau ingin berkolaborasi dalam sesuatu yang menarik,
                saya akan senang mendengar dari Anda.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center group">
                  <div className="p-3 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.title}</p>
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-300 transition-colors duration-200 font-medium"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-white font-semibold mb-4">
                Temukan saya di media sosial
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-800 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-gray-700`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Kontak */}
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Nama Anda{" "}
                    {errors.name && <span className="text-red-400">*</span>}
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Nama harus diisi" })}
                    className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:ring-1 transition-all duration-200 hover:bg-gray-700/70 ${
                      errors.name
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-600 focus:border-purple-500 focus:ring-purple-500"
                    }`}
                    placeholder="Nama Lengkap"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Anda{" "}
                    {errors.email && <span className="text-red-400">*</span>}
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email harus diisi",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Format email tidak valid",
                      },
                    })}
                    className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:ring-1 transition-all duration-200 hover:bg-gray-700/70 ${
                      errors.email
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-600 focus:border-purple-500 focus:ring-purple-500"
                    }`}
                    placeholder="email@contoh.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subjek{" "}
                  {errors.subject && <span className="text-red-400">*</span>}
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register("subject", { required: "Subjek harus diisi" })}
                  className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:ring-1 transition-all duration-200 hover:bg-gray-700/70 ${
                    errors.subject
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-600 focus:border-purple-500 focus:ring-purple-500"
                  }`}
                  placeholder="Tentang apa ini?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Pesan{" "}
                  {errors.message && <span className="text-red-400">*</span>}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", {
                    required: "Pesan harus diisi",
                    minLength: {
                      value: 10,
                      message: "Pesan minimal 10 karakter",
                    },
                  })}
                  className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:ring-1 transition-all duration-200 resize-none hover:bg-gray-700/70 ${
                    errors.message
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-600 focus:border-purple-500 focus:ring-purple-500"
                  }`}
                  placeholder="Ceritakan tentang proyek atau pertanyaan Anda..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 group disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Kirim Pesan
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
