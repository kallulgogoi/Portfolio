import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-gray-300 flex flex-col items-center px-8 md:px-20 py-16 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-500/10"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              scale: 0,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [0, Math.random() * 0.8 + 0.2, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-grid-small-cyan-500/30"></div>
        </div>

        {/* Glowing orbs */}
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

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-cyan-400 uppercase tracking-widest mb-16 relative z-10"
      >
        <span className="text-purple-400">&lt;</span>
        Contact Me
        <span className="text-purple-400">/&gt;</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl relative z-10">
        {/* Left Side - Info */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">
              Let's Connect 🤝
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              I'm always open to exciting projects, collaboration, or just a
              friendly chat about tech. Feel free to reach out!
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-black/50 border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
            >
              <div className="p-3 bg-cyan-500/10 rounded-full">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-cyan-300">kallulgogoinits@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-black/50 border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
            >
              <div className="p-3 bg-cyan-500/10 rounded-full">
                <MapPin className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-cyan-300">Sadiya,Tinsukia, Assam, India</p>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-semibold text-cyan-300 mb-4">
              Follow Me
            </h4>
            <div className="flex gap-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/kallulgogoi",
                  color: "hover:text-gray-300",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/kallul-gogoi-00a5152a0/",
                  color: "hover:text-blue-400",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/kallul_gogoi33/",
                  color: "hover:text-cyan-400",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 bg-black/50 border border-cyan-500/20 rounded-full text-gray-400 ${social.color} transition-all`}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20"></div>
          <form
            onSubmit={handleSubmit}
            className="relative bg-black/80 border border-cyan-500/30 rounded-2xl p-8 shadow-lg space-y-6 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-cyan-300 mb-6">
              Send a Message
            </h3>

            <div className="space-y-4">
              <div className="relative">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl bg-black/50 border border-cyan-500/20 focus:border-cyan-500 focus:outline-none text-gray-200 placeholder-gray-500"
                  required
                />
              </div>

              <div className="relative">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-4 rounded-xl bg-black/50 border border-cyan-500/20 focus:border-cyan-500 focus:outline-none text-gray-200 placeholder-gray-500"
                  required
                />
              </div>

              <div className="relative">
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full p-4 rounded-xl bg-black/50 border border-cyan-500/20 focus:border-cyan-500 focus:outline-none text-gray-200 placeholder-gray-500"
                  required
                />
              </div>
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 25px rgba(6, 182, 212, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl flex items-center justify-center gap-2"
            >
              Send Message <Send className="w-5 h-5" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
