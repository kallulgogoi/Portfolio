import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Skill categories with icons
const skills = {
  "Programming Languages": [
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
  ],
  "Web Development": [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Framer Motion",
      icon: "https://www.ejable.com/wp-content/uploads/2022/04/Framer-Motion-1200x1159.webp",
    },
  ],
  "Design Tools": [
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Canva",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    },
  ],
};

// Particle Network Background
const ParticleNetwork = () => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const particles = useRef([]);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const { width, height } = canvasRef.current.getBoundingClientRect();
        setDimensions({ width, height });

        // Reset particles on resize
        particles.current = [];
        initParticles();
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const initParticles = () => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const count = 80;
    for (let i = 0; i < count; i++) {
      particles.current.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        size: Math.random() * 2 + 1,
        color: `rgba(6, 182, 212, ${Math.random() * 0.3 + 0.1})`,
      });
    }

    animateParticles();
  };

  const animateParticles = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear canvas
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);

    // Update and draw particles
    particles.current.forEach((particle) => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Bounce off edges
      if (particle.x < 0 || particle.x > dimensions.width)
        particle.speedX *= -1;
      if (particle.y < 0 || particle.y > dimensions.height)
        particle.speedY *= -1;

      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Draw connections
      particles.current.forEach((otherParticle) => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(6, 182, 212, ${0.2 * (1 - distance / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
        }
      });
    });

    animationFrameId.current = requestAnimationFrame(animateParticles);
  };

  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      initParticles();
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
    />
  );
};

// Floating tech elements component
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

// Animations
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const skillItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

export default function Skills() {
  const [cfData, setCfData] = useState(null);
  const [lcData, setLcData] = useState(null);

  const codeforcesUser = "KALLUL";
  const leetcodeUser = "KALLUL";

  // Fetch Codeforces data
  useEffect(() => {
    fetch(`https://codeforces.com/api/user.info?handles=${codeforcesUser}`)
      .then((res) => res.json())
      .then((data) => setCfData(data.result[0]))
      .catch((err) => console.error(err));

    fetch(`https://leetcode-stats-api.herokuapp.com/${leetcodeUser}`)
      .then((res) => res.json())
      .then((data) => setLcData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-gray-300 flex flex-col items-center justify-center px-8 md:px-20 py-16 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <ParticleNetwork />
        <FloatingTechElements />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-small-cyan-500/10"></div>

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

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-cyan-400 uppercase tracking-widest mb-12 relative z-10"
      >
        <span className="text-purple-400">&lt;</span>
        Skills
        <span className="text-purple-400">/&gt;</span>
      </motion.h2>

      {/* Skills Categories */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl relative z-10">
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div
            key={category}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px #06b6d4",
              y: -5,
            }}
            className="p-6 rounded-2xl border border-cyan-500/40 bg-black/70 backdrop-blur-sm relative overflow-hidden"
          >
            {/* Card corner brackets */}
            <div className="absolute top-2 left-2 text-cyan-400 text-sm font-mono">
              &lt;
            </div>
            <div className="absolute top-2 right-2 text-cyan-400 text-sm font-mono">
              /&gt;
            </div>

            {/* Subtle card glow */}
            <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 blur-md -z-10"></div>

            <h3 className="text-xl font-bold text-cyan-300 mb-4 font-mono">
              {category}
            </h3>
            <ul className="space-y-3">
              {items.map((skill, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={skillItemVariants}
                  viewport={{ once: true }}
                  whileHover={{
                    x: 10,
                    color: "#06b6d4",
                    scale: 1.05,
                  }}
                  className="text-gray-300 flex items-center gap-3 p-2 rounded-lg hover:bg-cyan-900/20 transition-colors"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-cyan-900/30 rounded-md p-1">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-5 h-5 object-contain filter brightness-125"
                    />
                  </div>
                  <span>{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Coding Profiles Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 w-full max-w-4xl relative z-10"
      >
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center uppercase tracking-widest font-mono">
          <span className="text-purple-400">&lt;</span>
          Coding Profiles
          <span className="text-purple-400">/&gt;</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Codeforces Card */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px #06b6d4",
              y: -5,
            }}
            className="p-6 rounded-2xl border border-cyan-500/40 bg-black/70 backdrop-blur-sm relative overflow-hidden"
          >
            {/* Card corner brackets */}
            <div className="absolute top-2 left-2 text-cyan-400 text-sm font-mono">
              &#123;
            </div>
            <div className="absolute top-2 right-2 text-cyan-400 text-sm font-mono">
              &#125;
            </div>

            {/* Subtle card glow */}
            <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 blur-md -z-10"></div>

            <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
              <img
                src="https://store-images.s-microsoft.com/image/apps.48094.14504742535903781.aedbca21-113a-48f4-b001-4204e73b22fc.503f883f-8339-4dc5-8609-81713a59281f"
                alt="Codeforces"
                className="w-6 h-6"
              />
              Codeforces
            </h3>
            {cfData ? (
              <div className="space-y-2">
                <p>
                  Rating:{" "}
                  <span className="text-cyan-400 font-mono">
                    {cfData.rating}
                  </span>
                </p>
                <p>
                  Max Rating:{" "}
                  <span className="text-cyan-400 font-mono">
                    {cfData.maxRating}
                  </span>
                </p>
                <p>
                  Rank:{" "}
                  <span className="text-cyan-400 font-mono">{cfData.rank}</span>
                </p>
                <p>
                  Max Rank:{" "}
                  <span className="text-cyan-400 font-mono">
                    {cfData.maxRank}
                  </span>
                </p>
              </div>
            ) : (
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-gray-500"
              >
                Loading Codeforces data...
              </motion.p>
            )}
          </motion.div>

          {/* LeetCode Card */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px #06b6d4",
              y: -5,
            }}
            className="p-6 rounded-2xl border border-cyan-500/40 bg-black/70 backdrop-blur-sm relative overflow-hidden"
          >
            {/* Card corner brackets */}
            <div className="absolute top-2 left-2 text-cyan-400 text-sm font-mono">
              [
            </div>
            <div className="absolute top-2 right-2 text-cyan-400 text-sm font-mono">
              ]
            </div>

            {/* Subtle card glow */}
            <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 blur-md -z-10"></div>

            <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg"
                alt="LeetCode"
                className="w-6 h-6"
              />
              LeetCode
            </h3>
            {lcData ? (
              <div className="space-y-2">
                <p>
                  Total Solved:{" "}
                  <span className="text-cyan-400 font-mono">
                    {lcData.totalSolved}
                  </span>
                </p>
                <p>
                  Easy:{" "}
                  <span className="text-green-400 font-mono">
                    {lcData.easySolved}
                  </span>
                </p>
                <p>
                  Medium:{" "}
                  <span className="text-yellow-400 font-mono">
                    {lcData.mediumSolved}
                  </span>
                </p>
                <p>
                  Hard:{" "}
                  <span className="text-red-400 font-mono">
                    {lcData.hardSolved}
                  </span>
                </p>
              </div>
            ) : (
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-gray-500"
              >
                Loading LeetCode data...
              </motion.p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
