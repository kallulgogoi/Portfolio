import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const education = [
  {
    title: "Higher Secondary",
    stream: "Science Stream (PCM)",
    institute: "Sadiya College",
    duration: "July 2022 - Jan 2024",
    desc: "Completed my higher secondary education with 92% marks in Science stream with Physics, Chemistry, and Mathematics.",
    score: "92%",
  },
  {
    title: "CURRENT",
    stream: "Bachelor of Technology - BTech",
    institute: "NIT Silchar",
    duration: "Aug 2024 - Present",
    desc: "I am a 2nd year B.Tech student of Computer Science and Engineering branch at NIT Silchar. I have completed my 1st year with a CGPA of 8.18.",
    score: "CGPA: 8.18",
  },
  {
    title: "Secondary School",
    stream: "General Education",
    institute: "Sadiya Govt HS School",
    duration: "Jan 2017 - Jan 2022",
    desc: "Completed my secondary education with 94.67% marks. Developed foundational knowledge in all subjects.",
    score: "94.67%",
  },
];

// Binary code rain component for background
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
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const binaryChars = '01';
    const columns = Math.floor(dimensions.width / 20);
    const drops = Array(columns).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0ea5e9';
      ctx.font = '16px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = binaryChars.charAt(Math.floor(Math.random() * binaryChars.length));
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

// Floating tech elements component
const FloatingTechElements = () => {
  const elements = Array.from({ length: 15 });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-400/30"
          initial={{ 
            opacity: 0,
            x: Math.random() * 100,
            y: Math.random() * 100,
            rotate: 0
          }}
          animate={{ 
            opacity: [0, 0.5, 0],
            y: [Math.random() * 100, Math.random() * 500],
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
          }}
        >
          {i % 5 === 0 && '< />'}
          {i % 5 === 1 && '{ }'}
          {i % 5 === 2 && '[]'}
          {i % 5 === 3 && ';'}
          {i % 5 === 4 && '=>'}
        </motion.div>
      ))}
    </div>
  );
};

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-black text-gray-300 flex flex-col items-center px-8 md:px-20 py-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
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
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2]
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
        className="text-4xl md:text-5xl font-extrabold text-cyan-400 uppercase tracking-widest mb-16 relative z-10"
      >
        <span className="text-purple-400">&lt;</span>
        Education
        <span className="text-purple-400">/&gt;</span>
      </motion.h2>

      {/* Timeline */}
      <div className="relative w-full max-w-4xl z-10">
        {/* Glowing vertical line */}
        <div className="absolute left-5 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full shadow-[0_0_15px_#06b6d4]"></div>

        {/* Education Items */}
        <div className="flex flex-col space-y-12">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="ml-12 relative"
            >
              {/* Timeline Dot with glow effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1], 
                  opacity: [0.8, 1, 0.8],
                  boxShadow: [
                    "0 0 0 0 rgba(6, 182, 212, 0.7)",
                    "0 0 0 10px rgba(6, 182, 212, 0)",
                    "0 0 0 0 rgba(6, 182, 212, 0)"
                  ]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeOut"
                }}
                className="absolute -left-7 top-2 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_#06b6d4] z-10"
              ></motion.div>

              {/* Connection line from dot to card */}
              <div className="absolute -left-7 top-2 h-full w-0.5 bg-cyan-500/50"></div>

              {/* Tech-inspired card */}
              <motion.div
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0px 0px 25px #06b6d4",
                  y: -5
                }}
                className="p-6 rounded-2xl border border-cyan-500/40 bg-black/70 backdrop-blur-sm relative overflow-hidden"
              >
                {/* Card corner brackets */}
                <div className="absolute top-2 left-2 text-cyan-400 text-sm font-mono">&lt;</div>
                <div className="absolute top-2 right-2 text-cyan-400 text-sm font-mono">/&gt;</div>
                <div className="absolute bottom-2 left-2 text-cyan-400 text-sm font-mono">&#123;</div>
                <div className="absolute bottom-2 right-2 text-cyan-400 text-sm font-mono">&#125;</div>
                
                {/* Subtle card glow */}
                <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 blur-md -z-10"></div>
                
                <h3 className="text-xl font-bold text-cyan-300 font-mono">{edu.title}</h3>
                <p className="text-gray-400 text-sm mt-1 bg-cyan-900/20 inline-block px-2 py-1 rounded-md">{edu.stream}</p>
                <p className="mt-2 font-semibold text-cyan-200">{edu.institute}</p>
                <p className="text-sm text-gray-400 mt-1 font-mono">{edu.duration}</p>
                <p className="mt-4 text-gray-300 leading-relaxed">{edu.desc}</p>
                <motion.p 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-3 text-cyan-400 font-bold text-lg font-mono bg-cyan-900/30 inline-block px-3 py-1 rounded-md"
                >
                  {edu.score}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}