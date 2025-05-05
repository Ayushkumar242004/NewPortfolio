import React from "react";
import ScrambleText from "./ScrambleText";

export default function SideNav() {
  return (
    <aside 
      className="sidebar relative overflow-hidden"
      data-sidebar
      style={{
        background: 'radial-gradient(circle at center, #0a0a1a 0%, #000000 100%)',
        color: '#fff',
        fontFamily: "'Courier New', monospace",
        borderRight: '1px solid rgba(0, 255, 255, 0.2)'
      }}
    >
      {/* Binary code floating in background */}
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

      {/* Scanlines overlay */}
      <div style={{
        position: 'absolute',
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

      <div 
        className="sidebar-info p-6"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <figure 
          className="avatar-box relative group"
          style={{
            width: 'fit-content',
            margin: '0 auto'
          }}
        >
          <div 
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
              filter: 'blur(15px)',
              zIndex: -1
            }}
          />
          {/* <img
            src="pic2.jpg"
            className="rounded-xl border-2 border-cyan-400 group-hover:border-pink-500 transition-all duration-500 w-20 h-20 object-cover"
            alt="Ayush Kumar"
            style={{
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
              filter: 'sepia(0.3) hue-rotate(160deg) contrast(1.1)'
            }}
          /> */}
		  	<img
						src="ayush.png "
						className="shake rounded-xl"
						alt="Ayush Kumar"
						width="80"
					/>
        </figure>

        <div 
          className="info-content mt-4 text-center"
          style={{
            position: 'relative',
            zIndex: 1
          }}
        >
          <ScrambleText 
            className="name block text-2xl font-bold mb-2"
            title="Ayush Kumar"
            style={{
              background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
              textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
              fontFamily: "'Orbitron', sans-serif"
            }}
          >
            Ayush Kumar
          </ScrambleText>
          <div className="flex gap-2 flex-wrap justify-center">
            <p 
              className="title text-sm opacity-80"
              style={{
                background: 'linear-gradient(90deg, #00ffff, #ffff00)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block',
                fontFamily: "'Share Tech Mono', monospace"
              }}
            >
              ML Enthusiast & Web Developer
            </p>
          </div>
        </div>
      </div>

      <div 
        className="sidebar-info_more p-6"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <div 
          className="separator my-4"
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #00ffff, transparent)',
            opacity: 0.5
          }}
        />

        <ul className="contacts-list space-y-4">
          <li className="contact-item flex items-start gap-4">
            <div 
              className="icon-box text-xl p-2 rounded-full"
              style={{
                background: 'rgba(0, 255, 255, 0.1)',
                border: '1px solid rgba(0, 255, 255, 0.3)',
                color: '#00ffff',
                minWidth: '40px',
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p 
                className="contact-title text-xs uppercase tracking-wider"
                style={{
                  color: '#00ffff',
                  opacity: 0.8
                }}
              >
                Email
              </p>

              <a 
                href="mailto:ayukumar242004@gmail.com" 
                className="contact-link block mt-1 text-sm hover:text-cyan-300 transition-colors duration-300"
                style={{
                  color: '#ffffff',
                  wordBreak: 'break-word'
                }}
              >
                ayukumar242004@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item flex items-start gap-4">
            <div 
              className="icon-box text-xl p-2 rounded-full"
              style={{
                background: 'rgba(0, 255, 255, 0.1)',
                border: '1px solid rgba(0, 255, 255, 0.3)',
                color: '#00ffff',
                minWidth: '40px',
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p 
                className="contact-title text-xs uppercase tracking-wider"
                style={{
                  color: '#00ffff',
                  opacity: 0.8
                }}
              >
                Location
              </p>

              <address 
                className="mt-1 text-sm not-italic"
                style={{
                  color: '#ffffff'
                }}
              >
                Karnataka, India
              </address>
            </div>
          </li>
        </ul>

        <div 
          className="separator my-4"
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #00ffff, transparent)',
            opacity: 0.5
          }}
        />

        <ul 
          className="social-list flex justify-center gap-4 mt-6"
          style={{
            position: 'relative',
            zIndex: 1
          }}
        >
          <li className="social-item">
            <a 
              href="https://www.linkedin.com/in/ayush-kumar-5a2ab4299/" 
              className="social-link text-2xl p-2 rounded-full hover:text-cyan-400 transition-colors duration-300"
              style={{
                color: '#00ffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: 'rgba(0, 255, 255, 0.1)',
                border: '1px solid rgba(0, 255, 255, 0.3)'
              }}
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a 
              href="https://github.com/Ayushkumar242004" 
              className="social-link text-2xl p-2 rounded-full hover:text-cyan-400 transition-colors duration-300"
              style={{
                color: '#00ffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: 'rgba(0, 255, 255, 0.1)',
                border: '1px solid rgba(0, 255, 255, 0.3)'
              }}
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
        </ul>
      </div>

      <style jsx global>{`
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
        
        .shake:hover {
          animation: shake 0.5s;
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
          20%, 40%, 60%, 80% { transform: translateX(2px); }
        }
      `}</style>
    </aside>
  );
}