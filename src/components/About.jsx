import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function About() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Create initial stars
    const initialStars = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5,
    }));
    setStars(initialStars);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-black text-gray-300 flex items-center justify-center px-8 md:px-20 py-16 pt-24 md:pt-16 relative overflow-hidden"
    >
      {/* Animated Star Background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.3, star.opacity],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
          />
        ))}

        {/* Shooting stars */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-cyan-400"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: "30px",
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              x: [0, window.innerWidth],
              y: [0, window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 10 + 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Binary code elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400 text-xs font-mono opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          >
            {Math.random() > 0.5 ? "1010" : "0101"}
          </motion.div>
        ))}

        {/* Floating circles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-cyan-400 opacity-20"
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-6xl relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-cyan-400 uppercase tracking-widest"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg leading-relaxed text-gray-300"
          >
            Hello! I'm{" "}
            <span className="text-cyan-400 font-bold">Kallul Gogoi</span>, a
            passionate{" "}
            <span className="text-cyan-300 font-semibold">CSE student</span> at
            NIT Silchar. I love building{" "}
            <span className="text-cyan-300">tech solutions</span> with modern
            web technologies, from robotics-inspired UI to full-stack apps.
            Always curious, always innovating ⚡.
          </motion.p>

          {/* Social Media Icons */}
          <motion.div
            className="flex space-x-6 pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/kallul-gogoi-00a5152a0/"
              target="_blank"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <FaLinkedin size={28} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/kallul_gogoi33/"
              target="_blank"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              <FaInstagram size={28} />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/profile.php?id=100067160496166"
              target="_blank"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              <FaFacebook size={28} />
            </motion.a>
            <motion.a
              href="https://github.com/kallulgogoi"
              target="_blank"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub size={28} />
            </motion.a>
          </motion.div>

          {/* Futuristic glowing line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"
          />
        </motion.div>

        {/* Right Side - Photo */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center relative"
        >
          <motion.img
            src="KALLUL.jpg" // 🔹 replace with your photo path
            alt="Profile"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl border-4 border-cyan-500 shadow-[0_0_25px_#06b6d4] z-10"
          />

          {/* Glowing animated rings behind photo */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.2, 0.6],
            }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full border-2 border-cyan-500 opacity-40"
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full border-2 border-purple-500 opacity-20"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-96 h-96 md:w-[30rem] md:h-[30rem] rounded-full border-2 border-pink-500 opacity-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
