import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ScrambleText from "./ScrambleText";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activePath, setActivePath] = useState("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navItems = [
    {
      path: "/",
      name: (
        <div className="flex items-center gap-2">
          <ion-icon name="bug-outline"></ion-icon>
          <ScrambleText>Home</ScrambleText>
        </div>
      ),
    },
    {
      path: "/about",
      name: (
        <div className="flex items-center gap-2">
          <ion-icon name="person-circle-outline"></ion-icon>
          <ScrambleText>About</ScrambleText>
        </div>
      ),
    },
    {
      path: "/portfolio",
      name: (
        <div className="flex items-center gap-2">
          <ion-icon name="grid-outline"></ion-icon>
          <ScrambleText>Portfolio</ScrambleText>
        </div>
      ),
    },
    {
      path: "/contact",
      name: (
        <div className="flex items-center gap-2">
          <ion-icon name="mail-outline"></ion-icon>
          <ScrambleText>Contact</ScrambleText>
        </div>
      ),
    },
  ];

  return (
    <>
      <nav
        className={`fixed bottom-[30px] left-0 w-full transition-transform duration-300 px-4 z-[10] min-h-[62px] lg:h-[62px] md:h-[62px] ${
          show ? "translate-y-0" : "translate-y-[calc(100%+30px)]"
        }`}
      >
        {/* Cyberpunk glow effect */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-20"
          style={{
            background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
            filter: 'blur(20px)',
            zIndex: -1
          }}
        />
        
        <div 
          className="navblur w-full max-w-[800px] mx-auto transition-all duration-200 rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(10, 10, 20, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 255, 255, 0.3)',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)'
          }}
        >
          {/* Mobile menu */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isMobileMenuOpen ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div 
              className="flex flex-col text-right p-8 text-2xl gap-6"
              style={{
                background: 'linear-gradient(to bottom, rgba(0, 20, 30, 0.9), rgba(10, 0, 20, 0.9))'
              }}
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`${
                    activePath === item.path 
                      ? "text-cyan-400" 
                      : "text-gray-400 hover:text-cyan-300"
                  } transition-all duration-300 flex items-center justify-end gap-3`}
                  onClick={() => {
                    setActivePath(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    textShadow: activePath === item.path ? '0 0 10px #0ff' : 'none'
                  }}
                >
                  <span className="text-cyan-400">
                    {item.name.props.children[0]}
                  </span>
                  <span>{item.name.props.children[1]}</span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Main nav content */}
          <div 
            className="text-white px-6 h-[60px] overflow-hidden rounded-2xl flex items-center justify-between"
            style={{
              borderBottom: '1px solid rgba(0, 255, 255, 0.2)'
            }}
          >
            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-4 relative h-full items-center">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`${
                    activePath === item.path 
                      ? "text-cyan-400" 
                      : "text-gray-400 hover:text-cyan-300"
                  } transition-all duration-300 h-full flex items-center relative px-4`}
                  onClick={() => setActivePath(item.path)}
                  style={{
                    fontFamily: "'Share Tech Mono', monospace"
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">
                      {item.name.props.children[0]}
                    </span>
                    <span>{item.name.props.children[1]}</span>
                  </div>
                  {activePath === item.path && (
                    <div 
                      className="absolute bottom-0 left-0 w-full h-0.5 transition-transform duration-300"
                      style={{
                        background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
                        boxShadow: '0 0 10px #00ffff'
                      }}
                    />
                  )}
                </NavLink>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed bottom-0 left-0 w-full h-screen bg-black bg-opacity-70 backdrop-blur-sm flex flex-col items-center justify-center transition-opacity duration-700 z-[9]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Binary code floating in overlay */}
          {[...Array(20)].map((_, i) => (
            <span 
              key={i}
              className="text-green-400 absolute opacity-20"
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
      )}

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
        
        body {
          background-color: #000;
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
};

export default Navbar;