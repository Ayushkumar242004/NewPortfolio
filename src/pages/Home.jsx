import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import LikeButton from "../components/LikeButton";
import OrbitingImages from "../components/OrbitingImages";
import TerminalComponent from "./TerminalComponent";
import Resume from "../components/homeComponents/Resume";
import Skills from "../components/homeComponents/Skills";
import Quotes from "../components/homeComponents/Quotes";
import Projects from "../components/homeComponents/Projects";
import Library from "../components/homeComponents/Library";
import Showcase from "../components/homeComponents/Showcase";

export default function Home() {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const gridRef = useRef(null);

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

  return (
    <article 
      className="active relative overflow-hidden" 
      id="homearticle"
      style={{
        background: 'radial-gradient(circle at center, #0a0a1a 0%, #000000 100%)',
        color: '#fff',
        fontFamily: "'Courier New', monospace"
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
      
      <div
        style={{ 
          gridAutoFlow: "dense", 
          position: "relative",
          borderBottom: '1px solid rgba(0, 255, 255, 0.3)',
          boxShadow: '0 10px 30px rgba(0, 255, 255, 0.1)'
        }}
        className="homebox p-6 pb-0 relative overflow-hidden sm:p-8 lg:p-[30px] bg-black bg-opacity-50 backdrop-blur-sm"
      >
        {/* Binary floating text */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          zIndex: -1,
          opacity: 0.3
        }}>
          {[...Array(20)].map((_, i) => (
            <span 
              key={i}
              style={{
                position: 'absolute',
                color: '#0f0',
                fontSize: `${Math.random() * 10 + 8}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `floatUp ${Math.random() * 10 + 5}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.1
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </span>
          ))}
        </div>
        
        <header ref={headerRef}>
          <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl" style={{
            textShadow: '0 0 5px #0ff',
            fontFamily: "'Share Tech Mono', monospace"
          }}>
            <p className="italic text-lg sm:text-xl md:text-2xl opacity-75" style={{
              animation: 'flicker 4s linear infinite'
            }}>
              > Hey there I am
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl mt-2 neon-text" style={{
              fontFamily: "'Orbitron', sans-serif",
              background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block'
            }}>
              Ayush Kumar <span style={{color: '#0ff'}}>// :)</span>
            </p>
          </h2>
        </header>

        <section className="about-text mb-0 pb-0">
          <p className="flex gap-1 sm:gap-2 text-xl sm:text-2xl md:text-3xl items-center" style={{
            textShadow: '0 0 10px currentColor'
          }}>
            <p className="text-red-400 font-semibold" style={{
              animation: 'glowRed 2s ease-in-out infinite alternate'
            }}>I Design ,</p>
            <p className="text-yellow-400" style={{
              animation: 'glowYellow 2s ease-in-out infinite alternate 0.5s'
            }}>Code & </p>
            <p className="text-green-400" style={{
              animation: 'glowGreen 2s ease-in-out infinite alternate 1s'
            }}>Create</p>
          </p>
          <p className="mt-1 sm:mt-2 text-lg sm:text-xl md:text-2xl relative top-[-10px] md:top-[-20px] font-medium opacity-75" style={{
            fontFamily: "'Courier New', monospace",
            textShadow: '0 0 5px #0ff'
          }}>
            Robust , scalable & modern software systems
          </p>
        </section>

        <img
          style={{
            mixBlendMode: "hard-light",
            maskImage: "linear-gradient(to right , transparent, black)",
            filter: 'hue-rotate(180deg) contrast(1.5)'
          }}
          src="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?resize=1200,800"
          alt="Code"
          className="hidden lg:block absolute z-[30] right-0 top-0 h-[130%] grayscale opacity-60"
        />
        
        {/* Animated circuit lines */}
        <svg 
          width="100%" 
          height="100%" 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
            opacity: 0.3
          }}
        >
          <path 
            d="M0,50 Q100,100 200,50 T400,50 T600,50 T800,50" 
            stroke="#0ff" 
            strokeWidth="1" 
            fill="none"
            strokeDasharray="10 5"
          />
          <path 
            d="M50,100 Q150,150 250,100 T450,100 T650,100 T850,100" 
            stroke="#f0f" 
            strokeWidth="1" 
            fill="none"
            strokeDasharray="15 5"
          />
        </svg>
      </div>

      <div 
        className="bentogrid h-full w-full grid mt-6 gap-6"
        ref={gridRef}
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <div 
          className="github homebox flex items-center cursor-pointer bg-black bg-opacity-50 backdrop-blur-sm hover:bg-opacity-70 transition-all duration-300"
          data-color="#0ff"
          style={{
            border: '1px solid rgba(0, 255, 255, 0.3)',
            boxShadow: 'inset 0 0 10px rgba(0, 255, 255, 0.2)'
          }}
        >
          <a
            href="https://github.com/Ayushkumar242004"
            className="flex w-full h-full justify-center items-center"
          >
            <img
              className="cursor-pointer hover:scale-105 transition-transform duration-300"
              src="https://streak-stats.demolab.com/?user=Ayushkumar242004&theme=rising-sun&hide_border=true&background=00000000"
              alt="GitHub Streak Stats"
            />
          </a>
        </div>

        <div 
          className="showcase homebox relative overflow-hidden bg-black bg-opacity-50 backdrop-blur-sm hover:bg-opacity-70 transition-all duration-300"
          data-color="#f0f"
          style={{
            border: '1px solid rgba(255, 0, 255, 0.3)',
            boxShadow: 'inset 0 0 10px rgba(255, 0, 255, 0.2)'
          }}
        >
          <p 
            className="text-white p-4 lg:text-2xl md:text-2xl text-xl"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              textShadow: '0 0 10px #f0f'
            }}
          >
            Liked the <br /> Portfolio ?
          </p>

          <div className="text-white w-full mt-[30px] flex justify-center items-center gap-4">
            <LikeButton />
          </div>
          
          {/* Floating hearts */}
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              style={{
                position: 'absolute',
                color: `hsl(${Math.random() * 60 + 300}, 100%, 70%)`,
                fontSize: `${Math.random() * 20 + 10}px`,
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                animation: `floatUp ${Math.random() * 10 + 5}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0,
                zIndex: -1
              }}
            >
              ♥
            </div>
          ))}
        </div>
        
        <div 
          className="home-social-media lg:flex md:flex grid grid-rows-2 grid-cols-2 flex-wrap gap-4 text-white md:gap-4"
          style={{
            position: 'relative'
          }}
        >
          <div
            onClick={() => window.open("https://github.com/Ayushkumar242004", "_blank")}
            className="homebox flex-1 flex items-center justify-center p-4 md:w-1/4 bg-black bg-opacity-50 backdrop-blur-sm hover:bg-opacity-70 transition-all duration-300"
            data-color="#0f0"
            style={{
              border: '1px solid rgba(0, 255, 0, 0.3)',
              boxShadow: 'inset 0 0 10px rgba(0, 255, 0, 0.2)'
            }}
          >
            <div className="flex items-center gap-2">
              <ion-icon name="logo-linkedin" style={{ color: '#0af' }}></ion-icon>
              <a 
                href="https://www.linkedin.com/in/ayush-kumar-5a2ab4299/" 
                className="hover:text-cyan-300 transition-colors duration-300"
              >
                Linked In
              </a>
            </div>
          </div>
          
          <div
            className="homebox flex-1 flex items-center justify-center p-4 md:w-1/4 bg-black bg-opacity-50 backdrop-blur-sm hover:bg-opacity-70 transition-all duration-300"
            data-color="#ff0"
            style={{
              border: '1px solid rgba(255, 255, 0, 0.3)',
              boxShadow: 'inset 0 0 10px rgba(255, 255, 0, 0.2)'
            }}
          >
            <div className="flex items-center gap-2">
              <ion-icon name="logo-github" style={{ color: '#f0f' }}></ion-icon>
              <a 
                href="https://github.com/Ayushkumar242004" 
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        <Resume />
        <Skills />
        <Quotes />
        <Projects />
        <Library />
        <Showcase />
      </div>
      
      {/* Global styles */}
      <style jsx global>{`
        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            opacity: 0.75;
            text-shadow: 0 0 5px #0ff;
          }
          20%, 24%, 55% {
            opacity: 0.2;
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
            backgroundPosition: 0 0;
          }
          100% {
            backgroundPosition: 0 100%;
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
        
        @keyframes glowRed {
          from {
            text-shadow: 0 0 5px #f00, 0 0 10px #f00;
          }
          to {
            text-shadow: 0 0 10px #f00, 0 0 20px #f00, 0 0 30px #f00;
          }
        }
        
        @keyframes glowYellow {
          from {
            text-shadow: 0 0 5px #ff0, 0 0 10px #ff0;
          }
          to {
            text-shadow: 0 0 10px #ff0, 0 0 20px #ff0, 0 0 30px #ff0;
          }
        }
        
        @keyframes glowGreen {
          from {
            text-shadow: 0 0 5px #0f0, 0 0 10px #0f0;
          }
          to {
            text-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 30px #0f0;
          }
        }
        
        .neon-text {
          animation: flicker 1.5s infinite alternate;
        }
        
        .homebox {
          transition: all 0.3s ease;
          border-radius: 5px;
        }
        
        body {
          background-color: #000;
          overflow-x: hidden;
        }
      `}</style>
    </article>
  );
}