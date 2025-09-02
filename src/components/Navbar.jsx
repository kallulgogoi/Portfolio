import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // for mobile menu toggle

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#project" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md border-b border-cyan-500/40 shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
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
          className="md:hidden flex flex-col items-center bg-black/95 px-4 pb-4"
        >
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              whileHover={{ scale: 1.1 }}
              className="text-gray-300 py-2 text-lg hover:text-cyan-400 uppercase tracking-wide"
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
