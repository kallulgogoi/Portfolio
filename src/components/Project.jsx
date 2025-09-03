import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website with interactive animations and dark mode functionality.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    image:
      "https://res.cloudinary.com/dgechlqls/image/upload/v1756844789/gjcdzhcjwqe0f017igsy.png",
    liveLink: "#",
    githubLink: "#",
    category: "Portfolio",
  },
  {
    title: "Expense Tracker",
    description:
      "A financial management application that helps users track their expenses with visualization charts and budgeting tools.",
    technologies: ["React", "Rechart", "Node.js", "MongoDB", "Express.Js"],
    image:
      "https://res.cloudinary.com/dgechlqls/image/upload/v1756844922/fvus2yfkuxgcxfevebk3.png",
    liveLink: "https://expense-tracker-pi-rust-77.vercel.app/home",
    githubLink: "https://github.com/kallulgogoi/Expense-tracker.git",
    category: "Finance",
  },
  {
    title: "AI Chatbot",
    description:
      "An intelligent chatbot implementation with natural language processing capabilities and contextual responses.",
    technologies: ["Gemmini Api", "React.JS", "TailWind CSS", "APIs"],
    image:
      "https://res.cloudinary.com/dgechlqls/image/upload/v1756844844/terpkq07wngoaf17aczg.png",
    liveLink: "https://chatbot-eight-ashy-68.vercel.app/",
    githubLink: "https://github.com/kallulgogoi/Chatbot.git",
    category: "AI",
  },
  {
    title: "Image to Link Converter",
    description:
      "A cloud-based application that converts images to shareable links using Cloudinary API with drag and drop functionality.",
    technologies: ["JavaScript", "Cloudinary API", "HTML5", "CSS3"],
    image:
      "https://res.cloudinary.com/dgechlqls/image/upload/v1756845095/pz57f5nbtdlzpqqlfhnq.png",
    liveLink: "https://linkfyurl.netlify.app/",
    githubLink: "https://github.com/kallulgogoi/Photo_to_URL.git",
    category: "Cloud",
  },
  {
    title: "Valentine's Day App UI",
    description:
      "A valentine's Day theme App UI which i created for GDGC NIT Silchar.It was given to me as a task in prototype planery 5.0(The UI/UX workshop of GDGC NIT Silchar) ",
    technologies: ["Figma", "Prototyping", "UI/UX"],
    image:
      "https://res.cloudinary.com/dgechlqls/image/upload/v1756884706/wponrmj50tzv2vvfzefg.png",
    liveLink:
      "https://www.figma.com/proto/7EzIisIb84OApu8h6UoQYf/Valentine_app_GDGC_Project-_Main_File--Copy-?node-id=89-84&p=f&t=mC6SYFKOFO2IfQZF-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    githubLink:
      "https://www.figma.com/design/7EzIisIb84OApu8h6UoQYf/Valentine_app_GDGC_Project-_Main_File--Copy-?node-id=0-1&t=mHzJTtMIkePXtqhU-1",
    category: "Figma",
  },
];

// Binary Rain Background
const BinaryRain = () => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const { width, height } = canvasRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const binaryChars = "01";
    const columns = Math.floor(dimensions.width / 20);
    const drops = Array(columns).fill(1);

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0ea5e9";
      ctx.font = "16px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = binaryChars.charAt(
          Math.floor(Math.random() * binaryChars.length)
        );
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
    />
  );
};

// Floating Tech Elements
const FloatingTechElements = () => {
  const elements = Array.from({ length: 15 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-400/20"
          initial={{
            opacity: 0,
            x: Math.random() * 100,
            y: Math.random() * 100,
            rotate: 0,
          }}
          animate={{
            opacity: [0, 0.3, 0],
            y: [Math.random() * 100, Math.random() * 500],
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
          }}
        >
          {i % 7 === 0 && "{ }"}
          {i % 7 === 1 && "< />"}
          {i % 7 === 2 && "() =>"}
          {i % 7 === 3 && "import"}
          {i % 7 === 4 && "const"}
          {i % 7 === 5 && "function"}
          {i % 7 === 6 && "return"}
        </motion.div>
      ))}
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project, index }) => {
  const [showCode, setShowCode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative bg-black/70 backdrop-blur-sm rounded-2xl border border-cyan-500/40 overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
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

      {/* Project Image */}
      <div className="h-48 overflow-hidden relative">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute top-3 left-3 px-2 py-1 bg-cyan-500/20 backdrop-blur-sm rounded-md text-cyan-300 text-xs font-mono border border-cyan-500/30">
          {project.category}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-cyan-300 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-full bg-cyan-900/30 text-cyan-300 border border-cyan-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={project.liveLink}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 text-center py-2 px-4 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors"
          >
            Live Demo
          </motion.a>
          <motion.a
            href={project.githubLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 text-center py-2 px-4 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 transition-colors"
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-gray-300 flex flex-col items-center px-4 md:px-8 lg:px-20 py-16 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <BinaryRain />
        <FloatingTechElements />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-small-cyan-500/20"></div>

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

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-cyan-400 uppercase tracking-widest mb-12 md:mb-16 relative z-10 text-center"
      >
        <span className="text-purple-400">&lt;</span>
        Projects
        <span className="text-purple-400">/&gt;</span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl relative z-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 text-center relative z-10"
      >
        <p className="text-gray-400 mb-6">
          Interested in seeing more of my work?
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #06b6d4" }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-3 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors font-medium"
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </section>
  );
}
