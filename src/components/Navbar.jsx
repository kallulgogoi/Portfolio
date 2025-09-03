import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// Star component for the background
const Star = ({ size, top, left, delay }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        width: size,
        height: size,
        top: `${top}%`,
        left: `${left}%`,
      }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [stars, setStars] = useState([]);

  // Generate random stars
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 20; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 3 + 1, // Random size between 1-4px
          top: Math.random() * 100,
          left: Math.random() * 100,
          delay: Math.random() * 5, // Random delay up to 5 seconds
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50 overflow-hidden"
    >
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 border-b"
        animate={{
          boxShadow: [
            "0 0 5px rgba(103, 232, 249, 0.3)",
            "0 0 10px rgba(103, 232, 249, 0.5)",
            "0 0 15px rgba(103, 232, 249, 0.7)",
            "0 0 20px rgba(103, 232, 249, 0.5)",
            "0 0 5px rgba(103, 232, 249, 0.3)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Starry background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <Star
            key={star.id}
            size={star.size}
            top={star.top}
            left={star.left}
            delay={star.delay}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative z-10">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="text-cyan-400 font-extrabold text-2xl tracking-widest cursor-pointer"
        >
          <span className="text-gray-200"></span>KG
          <span className="text-gray-200"></span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              className="text-gray-300 hover:text-cyan-400 uppercase tracking-wide relative group"
              whileHover={{ scale: 1.1 }}
            >
              {item.name}
              {/* underline effect */}
              <motion.span
                className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-cyan-400 group-hover:w-full"
                layoutId="underline"
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <X className="text-cyan-400 w-7 h-7" />
            ) : (
              <Menu className="text-cyan-400 w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center bg-black/95 px-4 pb-4 relative z-10"
        >
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              whileHover={{ scale: 1.1 }}
              className="text-gray-300 py-2 text-lg hover:text-cyan-400 uppercase tracking-wide"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
