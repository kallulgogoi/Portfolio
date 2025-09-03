import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Experience = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // Experience data
  const experiences = [
    {
      role: "Junior Moderator",
      org: "Coding Club, NIT Silchar",
      duration: "2025 Aug - Present",
      desc: "Contributing as a junior moderator, managing events, coding sessions, and helping peers enhance their coding skills.",
      icon: "https://media.licdn.com/dms/image/v2/C4D1BAQGWqNptbeUGig/company-background_1536_768/company-background_1536_768/0/1583013798937?e=2147483647&v=beta&t=9gCV30ULHSpjn7Rq28AXsCujJsuci_ijxDnRzh1UABk",
    },
    {
      role: "Junior UI/UX Developer",
      org: "Google Developer Groups Club, NIT Silchar",
      duration: "2025 Aug - Present",
      desc: "Designing and prototyping modern UI/UX solutions, collaborating with developers to build impactful projects.",
      icon: "https://avatars.githubusercontent.com/u/87744060?s=280&v=4",
    },
    {
      role: "Web Wing Member",
      org: "Computer Science Society, NIT Silchar",
      duration: "2025 Aug - Present",
      desc: "Developing web-based solutions and contributing to society-led projects, enhancing technical exposure and collaboration.",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxVNS3qy_vHZIfS5o-9sCuiwl1aOSPSK0kg&s",
    },
  ];

  // Certificate data
  const certificates = [
    "https://res.cloudinary.com/dgechlqls/image/upload/v1756837128/jugwo4oy7nip9brlkv7f.jpg",
    "https://res.cloudinary.com/dgechlqls/image/upload/v1756837271/txzymyjudslzzrg21qum.png",
    "https://res.cloudinary.com/dgechlqls/image/upload/v1756880437/hm5jhvziplg65fvw7up7.jpg",
    "https://res.cloudinary.com/dgechlqls/image/upload/v1756880488/k1ytccitc5kgrwaoqfry.jpg",
    "https://res.cloudinary.com/dgechlqls/image/upload/v1756880528/d8mgiprun5uudfjrjnqx.png",
    "https://res.cloudinary.com/dgechlqls/image/upload/v1756880585/vub3v9olmsojm7udz2xm.jpg",
  ];

  // Certificate titles
  const certificateTitles = [
    "React Js",
    "Computer Science Society Design Workshop",
    "ILLUMINITS Design Intern",
    "GDGC Prototype Plenary 5.0",
    "CSS ABACUS Aakruti First Prize",
    "GDGC Web Blitz 5.0",
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + certificates.length) % certificates.length
    );
  };

  // Auto-play certificates
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-gray-300 flex flex-col items-center px-4 md:px-8 lg:px-20 py-16 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-small-cyan-500/30 opacity-20"></div>

        {/* Binary Rain Animation */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-cyan-400/40 font-mono text-xs"
              initial={{
                y: -20,
                x: Math.random() * 100,
                opacity: 0,
              }}
              animate={{
                y: "100vh",
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
              }}
            >
              {Math.random() > 0.5 ? "1" : "0"}
            </motion.div>
          ))}
        </div>

        {/* Pulsing Orbs */}
        <motion.div
          className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-cyan-400 uppercase tracking-widest mb-12 md:mb-16 relative z-10 text-center"
      >
        <span className="text-purple-400">&lt;</span>
        Experience & Certifications
        <span className="text-purple-400">/&gt;</span>
      </motion.h2>

      {/* Experience Cards */}
      <div className="flex flex-col space-y-8 w-full max-w-3xl relative z-10 mb-20">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 20px #06b6d4",
            }}
            className="p-6 rounded-2xl border border-cyan-500/40 bg-black/70 backdrop-blur-sm relative overflow-hidden"
          >
            {/* Card corner brackets */}
            <div className="absolute top-3 left-3 text-cyan-400 text-sm font-mono">
              &lt;
            </div>
            <div className="absolute top-3 right-3 text-cyan-400 text-sm font-mono">
              /&gt;
            </div>

            {/* Subtle card glow */}
            <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 blur-md -z-10"></div>

            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-cyan-500/30">
                <img
                  src={exp.icon}
                  alt={exp.org}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-300">{exp.role}</h3>
                <p className="font-semibold text-gray-400">{exp.org}</p>
                <p className="text-sm text-gray-500 mt-1">{exp.duration}</p>
                <p className="mt-3 text-gray-300">{exp.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificates Section */}
      <div className="w-full relative z-10">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-cyan-400 mt-16 mb-8 uppercase tracking-widest relative z-10 text-center"
        >
          <span className="text-purple-400">[</span>
          Certifications
          <span className="text-purple-400">]</span>
        </motion.h2>

        <div
          className="relative w-full max-w-5xl mx-auto flex items-center justify-center z-10 px-4"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Prev Button */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 md:-left-4 text-cyan-400 text-3xl md:text-4xl p-2 rounded-full bg-black/70 border border-cyan-500/40 backdrop-blur-sm z-20 shadow-lg"
            aria-label="Previous certificate"
          >
            ❮
          </motion.button>

          {/* Certificate Image - Clickable for modal */}
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-xl border-2 border-cyan-500/50 shadow-[0_0_20px_#06b6d4] w-full max-w-2xl cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => setShowModal(true)}
          >
            <img
              src={certificates[current]}
              alt={`Certificate ${current + 1}`}
              className="w-full h-64 md:h-80 object-contain"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:bg-opacity-40 transition-all duration-300">
              <div className="text-white text-lg font-semibold bg-black bg-opacity-70 px-4 py-2 rounded-lg">
                Click to enlarge
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-xl -z-10"></div>
          </motion.div>

          {/* Next Button */}
          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 md:-right-4 text-cyan-400 text-3xl md:text-4xl p-2 rounded-full bg-black/70 border border-cyan-500/40 backdrop-blur-sm z-20 shadow-lg"
            aria-label="Next certificate"
          >
            ❯
          </motion.button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-6 z-10">
          {certificates.map((_, idx) => (
            <motion.div
              key={idx}
              onClick={() => setCurrent(idx)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: current === idx ? 1.2 : 1,
                backgroundColor: current === idx ? "#06b6d4" : "#374151",
              }}
              className="w-3 h-3 rounded-full cursor-pointer border border-cyan-500/40"
              aria-label={`View certificate ${idx + 1}`}
            />
          ))}
        </div>

        {/* Certificate Title */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-4 text-cyan-200 font-light text-sm md:text-base"
        >
          {certificateTitles[current]}
        </motion.p>
      </div>

      {/* Modal for enlarged certificate view */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-10 right-0 text-white text-2xl p-2 hover:text-cyan-400 transition-colors z-50"
                onClick={() => setShowModal(false)}
                aria-label="Close certificate view"
              >
                ✕
              </button>
              <img
                src={certificates[current]}
                alt={`Enlarged certificate ${current + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4 text-white">
                <p className="text-lg font-semibold">
                  {certificateTitles[current]}
                </p>
                <button
                  className="mt-3 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-md transition-colors"
                  onClick={() => {
                    // Download functionality
                    const link = document.createElement("a");
                    link.href = certificates[current];
                    link.download = `certificate-${current + 1}.jpg`;
                    link.click();
                  }}
                >
                  Download Certificate
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
