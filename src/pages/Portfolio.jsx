import React, { useState, useEffect } from "react";
import { Projects } from "../assets/Projects";

export default function Portfolio({ sheetHandler }) {
  const [isSelected, setIsSelected] = useState("All");
  
  useEffect(() => {
    // Matrix rain effect
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.15';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;
    
    const fontSize = 16;
    let columns = canvas.width / fontSize;
    let rainDrops = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = canvas.width / fontSize;
      rainDrops = Array.from({ length: columns }).fill(1);
    };
    
    resizeCanvas();
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      ctx.fillStyle = '#0f0';
      ctx.font = fontSize + 'px monospace';
  
      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
  
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };
    
    const matrixInterval = setInterval(draw, 30);
    window.addEventListener('resize', resizeCanvas);
  
    return () => {
      clearInterval(matrixInterval);
      window.removeEventListener('resize', resizeCanvas);
      document.body.removeChild(canvas);
    };
  }, []);

  const filterProjects =
    isSelected === "All"
      ? Projects
      : Projects.filter((project) => project.categories.includes(isSelected));

  return (
    <article className="about active" data-page="portfolio"
      style={{
        background: 'radial-gradient(circle at center, #0a0a1a 0%, #000000 100%)',
        color: '#fff',
        fontFamily: "'Courier New', monospace",
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Scanlines overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '100% 2px',
        zIndex: 0,
        pointerEvents: 'none',
        animation: 'scanline 8s linear infinite'
      }} />
      
      {/* Neon border */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #ff00ff, #00ffff, #ff00ff)',
        zIndex: 100,
        boxShadow: '0 0 10px #00ffff, 0 0 20px #00ffff',
        animation: 'borderGlow 3s linear infinite'
      }} />

      {/* Floating binary code */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <span 
            key={i}
            className="text-green-400 absolute"
            style={{
              fontSize: `${Math.random() * 12 + 8}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatUp ${Math.random() * 10 + 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </span>
        ))}
      </div>

      <header>
        <h2 
          className="h2 article-title"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block',
            textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
            animation: 'flicker 3s infinite alternate'
          }}
        >
          Portfolio
        </h2>
      </header>

      <section className="projects mt-8">
        <ul 
          className="filter-list flex flex-wrap gap-4 mb-8"
          style={{
            borderBottom: '1px solid rgba(0, 255, 255, 0.3)',
            paddingBottom: '20px'
          }}
        >
          {["All", "Web Development", "AI & ML", "UI/UX Design", "Cryptography & Security"].map((category) => (
            <li className="filter-item" key={category}>
              <button
                className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                  isSelected === category 
                    ? "bg-cyan-500 bg-opacity-20 border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-500/20"
                    : "border-gray-600 hover:border-cyan-400 hover:text-cyan-400"
                }`}
                onClick={() => setIsSelected(category)}
                style={{
                  fontFamily: "'Share Tech Mono', monospace"
                }}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-6">
          {filterProjects.map((project) => (
            <div
              key={project.title}
              onClick={() => sheetHandler(project)}
              className="relative overflow-hidden rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-500 group"
              style={{
                background: 'rgba(20, 20, 30, 0.7)',
                backdropFilter: 'blur(10px)',
                height: '300px',
                cursor: 'pointer'
              }}
            >
              {/* Project glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <div className="p-6 relative z-10 h-full flex flex-col">
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    color: '#00ffff',
                    textShadow: '0 0 10px rgba(0, 255, 255, 0.3)'
                  }}
                >
                  {project.title}
                </h3>
                <p 
                  className="text-gray-300 mb-4 line-clamp-3 flex-grow"
                  style={{
                    fontFamily: "'Courier New', monospace"
                  }}
                >
                  {project.description ||
                    "Synkerr is a dynamic social media platform designed to connect users with shared interests and passions."}
                </p>
                
                {/* Project images with hover effects */}
                <div className="relative mt-auto">
                  <img
                    src={project.img[0]}
                    alt=""
                    className="absolute bottom-[-40px] h-[180px] rounded-lg shadow-[0_10px_50px_-12px_rgba(0,0,0,0.85)] left-8 group-hover:rotate-[-3deg] transition-transform group-hover:scale-[1.05] group-hover:translate-x-[-10px] w-[60%] object-cover bg-top border border-gray-700"
                    style={{
                      filter: 'sepia(0.3) hue-rotate(160deg) contrast(1.1)'
                    }}
                  />
                  <img
                    src={project.img[1] || project.img[0]}
                    alt=""
                    className="absolute bottom-[-40px] h-[140px] rounded-lg shadow-[0_10px_50px_-12px_rgba(0,0,0,0.85)] right-8 group-hover:rotate-[3deg] transition-transform group-hover:scale-[1.05] group-hover:translate-x-[10px] border border-gray-700"
                    style={{
                      filter: 'sepia(0.3) hue-rotate(200deg) contrast(1.1)'
                    }}
                  />
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span 
                  className="text-cyan-400 font-bold text-lg"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    textShadow: '0 0 10px #00ffff'
                  }}
                >
                  VIEW DETAILS
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx global>{`
        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            opacity: 1;
            text-shadow: 0 0 5px #0ff;
          }
          20%, 24%, 55% {
            opacity: 0.5;
            text-shadow: none;
          }
        }
        
        @keyframes floatUp {
          0% {
            transform: translateY(100px);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100px);
            opacity: 0;
          }
        }
        
        @keyframes scanline {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 100%;
          }
        }
        
        @keyframes borderGlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        body {
          background-color: #000;
          overflow-x: hidden;
        }
      `}</style>
    </article>
  );
}