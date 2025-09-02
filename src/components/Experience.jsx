import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const experiences = [
  {
    role: "Junior Moderator",
    org: "Coding Club, NIT Silchar",
    duration: "2024 - Present",
    desc: "Contributing as a junior moderator, managing events, coding sessions, and helping peers enhance their coding skills.",
    icon: "👨‍💻",
  },
  {
    role: "Junior UI/UX Developer",
    org: "Google Developer Groups Club, NIT Silchar",
    duration: "2024 - Present",
    desc: "Designing and prototyping modern UI/UX solutions, collaborating with developers to build impactful projects.",
    icon: "🎨",
  },
  {
    role: "Web Wing Member",
    org: "Computer Science Society, NIT Silchar",
    duration: "2024 - Present",
    desc: "Developing web-based solutions and contributing to society-led projects, enhancing technical exposure and collaboration.",
    icon: "🌐",
  },
];

const certificates = [
  "https://res.cloudinary.com/dgechlqls/image/upload/v1756837128/jugwo4oy7nip9brlkv7f.jpg",
  "https://res.cloudinary.com/dgechlqls/image/upload/v1756837271/txzymyjudslzzrg21qum.png",
  "https://dummyimage.com/600x400/f43f5e/ffffff&text=Certificate+3",
  "https://dummyimage.com/600x400/f59e0b/ffffff&text=Certificate+4",
];

// Animated Binary Rain
const BinaryRain = () => {
  return (
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
  );
};

// Floating Tech Icons
const FloatingTechIcons = () => {
  const icons = ["🚀", "💻", "🎨", "🌐", "🔧", "📱", "⚡", "🔍", "📊", "🛠️"];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-20"
          initial={{
            y: Math.random() * 100,
            x: Math.random() * 100,
            rotate: 0,
          }}
          animate={{
            y: [Math.random() * 100, Math.random() * 100],
            x: [Math.random() * 100, Math.random() * 100],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
          style={{
            top: `${Math.random() * 20}%`,
            left: `${Math.random() * 100}%`,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

// Circuit Board Pattern
const CircuitBoard = () => {
  return (
    <div className="absolute inset-0 opacity-10">
      {/* Horizontal lines */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute h-px bg-cyan-400"
          style={{
            top: `${(i + 1) * 10}%`,
            left: "5%",
            width: "90%",
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Vertical lines */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-px bg-cyan-400"
          style={{
            left: `${(i + 1) * 10}%`,
            top: "5%",
            height: "90%",
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Connection points */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute w-2 h-2 rounded-full bg-cyan-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

// Pulsing Orbs
const PulsingOrbs = () => {
  return (
    <>
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
      <motion.div
        className="absolute top-1/4 right-1/4 w-48 h-48 bg-pink-500/5 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 12, repeat: Infinity, delay: 1 }}
      />
    </>
  );
};

// Animated Grid Background
const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {/* Main grid */}
      <div className="absolute inset-0 bg-grid-small-cyan-500/30"></div>

      {/* Animated grid lines */}
      <motion.div
        className="absolute inset-0 bg-grid-small-cyan-500/20"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.02, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Moving gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default function Experience() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

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
        <AnimatedGrid />
        <BinaryRain />
        <FloatingTechIcons />
        <CircuitBoard />
        <PulsingOrbs />
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
        Experience
        <span className="text-purple-400">/&gt;</span>
      </motion.h2>

      {/* Experience Cards */}
      <div className="flex flex-col space-y-8 w-full max-w-3xl relative z-10">
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
              <span className="text-3xl">{exp.icon}</span>
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
        className="relative w-full max-w-3xl flex items-center justify-center z-10 px-4"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        {/* Prev Button */}
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-0 text-cyan-400 text-2xl md:text-3xl p-2 rounded-full bg-black/70 border border-cyan-500/40 backdrop-blur-sm z-20"
        >
          ❮
        </motion.button>

        {/* Image */}
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-xl border border-cyan-500/40 shadow-[0_0_15px_#06b6d4] w-full max-w-md"
        >
          <img
            src={certificates[current]}
            alt={`Certificate ${current + 1}`}
            className="w-full h-48 md:h-64 object-cover"
          />

          {/* Glow effect */}
          <div className="absolute inset-0 bg-cyan-500/10 blur-xl -z-10"></div>
        </motion.div>

        {/* Next Button */}
        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-0 text-cyan-400 text-2xl md:text-3xl p-2 rounded-full bg-black/70 border border-cyan-500/40 backdrop-blur-sm z-20"
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
          />
        ))}
      </div>
    </section>
  );
}
