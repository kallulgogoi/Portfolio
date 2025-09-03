import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', or 'error'
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceID = "service_obu5ff8";
    const templateID = "template_ar5avw4";
    const publicKey = "umfekVt5MmM2iOj32";

    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
        console.log("Email successfully sent!", result.text);
        setSubmitStatus("success");
        setFormData({ name: "", subject: "", email: "", message: "" });

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setSubmitStatus("error");

        // Auto-hide error message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-gray-300 flex flex-col items-center px-8 md:px-20 py-16 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {["🚀", "💻", "🎨", "🌐", "🔧", "📱", "⚡", "🔍", "📊", "🛠️"].map(
            (icon, i) => (
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
            )
          )}
        </div>

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

        {/* Circuit lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute h-px bg-cyan-400"
              style={{
                top: `${(i + 1) * 20}%`,
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
        </div>
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-cyan-400 uppercase tracking-widest mb-16 relative z-10 text-center"
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
              Let's Connect <span className="text-purple-400">🙌</span>
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
              className="flex items-center gap-4 p-4 rounded-xl bg-black/50 border border-cyan-500/20 hover:border-cyan-500/50 transition-all group"
            >
              <div className="p-3 bg-cyan-500/10 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                <Mail className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-cyan-300 group-hover:text-cyan-200 transition-colors">
                  kallulgogoinits@gmail.com
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-black/50 border border-cyan-500/20 hover:border-cyan-500/50 transition-all group"
            >
              <div className="p-3 bg-cyan-500/10 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                <MapPin className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-cyan-300 group-hover:text-cyan-200 transition-colors">
                  Sadiya, Tinsukia, Assam, India
                </p>
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
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/kallul-gogoi-00a5152a0/",
                  color: "hover:text-blue-400",
                  label: "LinkedIn",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/kallul_gogoi33/",
                  color: "hover:text-pink-400",
                  label: "Instagram",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 bg-black/50 border border-cyan-500/20 rounded-full text-gray-400 ${social.color} transition-all group relative`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
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
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-red-500 rounded-2xl blur opacity-30 group-hover:opacity-40 transition-opacity"></div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative bg-black/80 border border-cyan-500/30 rounded-2xl p-8 shadow-lg space-y-6 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-cyan-300 mb-6">
              Send a Message
            </h3>

            {/* Status Messages */}
            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-green-900/30 border border-green-500/50 rounded-lg text-green-400 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-400 flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>
                    Failed to send message. Please try again or email me
                    directly.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-4">
              <div className="relative">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl bg-black/50 border border-cyan-500/20 focus:border-cyan-500 focus:outline-none text-gray-200 placeholder-gray-500 transition-colors"
                  required
                  disabled={isSubmitting}
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
                  className="w-full p-4 rounded-xl bg-black/50 border border-cyan-500/20 focus:border-cyan-500 focus:outline-none text-gray-200 placeholder-gray-500 transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="relative">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full p-4 rounded-xl bg-black/50 border border-cyan-500/20 focus:border-cyan-500 focus:outline-none text-gray-200 placeholder-gray-500 transition-colors"
                  required
                  disabled={isSubmitting}
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
                  className="w-full p-4 rounded-xl bg-black/50 border border-cyan-500/20 focus:border-cyan-500 focus:outline-none text-gray-200 placeholder-gray-500 transition-colors resize-none"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <motion.button
              whileHover={
                !isSubmitting
                  ? {
                      scale: 1.05,
                      boxShadow: "0px 0px 25px rgba(6, 182, 212, 0.5)",
                    }
                  : {}
              }
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:from-cyan-500 hover:to-green-500 hover:shadow-lg hover:shadow-cyan-500/30"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
