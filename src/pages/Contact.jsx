import React, { useEffect } from "react";

export default function Contact() {
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
      className="contact active" 
      data-page="contact"
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
          Contact
        </h2>
      </header>

     {/* ... (keep all your existing code until the mapbox section) ... */}

<section 
  className="mapbox mt-8 mb-12"
  data-mapbox
  style={{
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
    border: '1px solid rgba(0, 255, 255, 0.5)'
  }}
>
  <figure style={{ margin: 0 }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231366.58479482666!2d74.93395850624634!3d12.905359533802308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c37bf488f%3A0x827bbc7a74fcfe64!2sMangaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1721065588811!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ 
        border: 'none',
        filter: `
          grayscale(100%) 
          contrast(120%) 
          brightness(0.6)
          hue-rotate(180deg)
        `,
        backgroundColor: '#0a0a1a'
      }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </figure>
</section>

{/* ... (keep the rest of your existing code) ... */}

      <section 
        className="contact-form bg-black bg-opacity-50 backdrop-blur-sm p-8 rounded-lg"
        style={{
          border: '1px solid rgba(0, 255, 255, 0.3)',
          boxShadow: 'inset 0 0 15px rgba(0, 255, 255, 0.2)'
        }}
      >
        <h3 
          className="h3 form-title mb-6"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            color: '#00ffff',
            textShadow: '0 0 10px #00ffff'
          }}
        >
          Contact Form
        </h3>

        <form action="#" className="form" data-form>
          <div className="input-wrapper grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative">
              <input
                type="text"
                name="fullname"
                className="form-input w-full bg-transparent border-b-2 border-cyan-400 focus:border-pink-500 text-white py-2 px-1 outline-none transition-all duration-300"
                placeholder="Full name"
                required
                data-form-input
                style={{
                  fontFamily: "'Courier New', monospace"
                }}
              />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-pink-500 transition-all duration-500"></div>
            </div>
            
            <div className="relative">
              <input
                type="email"
                name="email"
                className="form-input w-full bg-transparent border-b-2 border-cyan-400 focus:border-pink-500 text-white py-2 px-1 outline-none transition-all duration-300"
                placeholder="Email address"
                required
                data-form-input
                style={{
                  fontFamily: "'Courier New', monospace"
                }}
              />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-pink-500 transition-all duration-500"></div>
            </div>
          </div>

          <div className="relative mb-8">
            <textarea
              name="message"
              className="form-input w-full bg-transparent border-2 border-cyan-400 focus:border-pink-500 text-white py-3 px-4 outline-none transition-all duration-300 rounded-lg"
              placeholder="Your Message"
              rows="5"
              required
              data-form-input
              style={{
                fontFamily: "'Courier New', monospace",
                resize: 'none'
              }}
            ></textarea>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-pink-500 transition-all duration-500"></div>
          </div>

          <button 
            className="form-btn relative overflow-hidden px-6 py-3 rounded-lg border-2 border-cyan-400 text-cyan-400 font-bold uppercase tracking-wider hover:text-white hover:border-pink-500 hover:bg-pink-500 transition-all duration-300 group"
            type="submit" 
            disabled 
            data-form-btn
            style={{
              fontFamily: "'Orbitron', sans-serif"
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <ion-icon name="paper-plane" className="text-lg"></ion-icon>
              <span>Send Message</span>
            </span>
            <span className="absolute inset-0 bg-cyan-400 opacity-10 group-hover:bg-pink-500 group-hover:opacity-20 transition-all duration-300"></span>
          </button>
        </form>
      </section>

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
        
        .form-input:focus + div {
          width: 100%;
        }
        
        body {
          background-color: #000;
          overflow-x: hidden;
        }
      `}</style>
    </article>
  );
}