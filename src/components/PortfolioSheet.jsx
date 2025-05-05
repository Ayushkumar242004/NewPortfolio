import React, { useState } from "react";
import "../App.css";
import FetchLinkData from "./FetchLinkData";
import ZoomImg from "./ZoomImg";

export default function PortfolioSheet({ sheetOpen, setSheetOpen, sheetData }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-[20] duration-[400ms] ${
        sheetOpen
          ? "bg-[#000000cc] backdrop-blur-sm cursor-pointer"
          : "bg-[#00000000] pointer-events-none"
      }`}
      style={{
        transition: 'background-color 400ms ease, backdrop-filter 400ms ease'
      }}
    >
      {/* Matrix rain overlay */}
      {sheetOpen && (
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          {[...Array(50)].map((_, i) => (
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
      )}

      <div 
        className="w-full h-full" 
        onClick={() => setSheetOpen(false)}
      />

      <div
        className={`portfolioSheet absolute right-0 top-0 h-screen max-w-[800px] duration-[400ms] ease-in transition-all overflow-y-auto ${
          sheetOpen ? "w-full" : "w-0"
        }`}
        style={{
          background: 'radial-gradient(circle at center, #0a0a1a 0%, #000000 100%)',
          borderLeft: '1px solid rgba(0, 255, 255, 0.3)',
          boxShadow: '-10px 0 30px rgba(0, 255, 255, 0.2)'
        }}
      >
        {/* Scanlines overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '100% 2px',
            animation: 'scanline 8s linear infinite'
          }}
        />

        <header className="m-[30px] relative z-10">
          <h2 
            className="mb-[20px] flex justify-between items-center"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
              textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
              fontSize: '2rem'
            }}
          >
            {sheetData.title}
            <button
              className="modal-close-btn cursor-pointer hover:scale-[1.1] duration-200 transition-transform p-2 rounded-full"
              style={{ 
                background: 'rgba(255, 0, 255, 0.2)',
                border: '1px solid rgba(255, 0, 255, 0.5)',
                color: '#ff00ff'
              }}
              onClick={() => setSheetOpen(false)}
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </h2>

          <section 
            className="about-text mb-6"
            style={{
              fontFamily: "'Courier New', monospace",
              lineHeight: '1.6'
            }}
          >
            <p>{sheetData.description}</p>
          </section>
          
          <div className="flex flex-wrap gap-3">
            {sheetData?.tools?.map((item, index) => (
              <p 
                key={index}
                className="technologiesTag px-3 py-1 rounded-full text-sm"
                style={{
                  background: 'rgba(0, 255, 255, 0.1)',
                  border: '1px solid rgba(0, 255, 255, 0.3)',
                  color: '#00ffff',
                  fontFamily: "'Share Tech Mono', monospace"
                }}
              >
                {item}
              </p>
            ))}
          </div>
        </header>

        <section className="px-[30px] relative z-10">
          <ul 
            className="sheet-list has-scrollbar space-x-4 flex overflow-x-auto pb-4"
            style={{
              scrollbarColor: '#00ffff transparent'
            }}
          >
            {sheetData.img?.map((item, index) => (
              <div 
                key={index}
                className="sheet-item flex-shrink-0 relative group"
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}
              >
                <ZoomImg 
                  src={item} 
                  className="sheet-item h-[300px] w-auto object-cover"
                  alt="project screenshot"
                  style={{
                    border: '1px solid rgba(0, 255, 255, 0.3)',
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
                    filter: 'sepia(0.3) hue-rotate(160deg) contrast(1.1)'
                  }}
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end p-4"
                  style={{
                    pointerEvents: 'none'
                  }}
                >
                  <span 
                    className="text-cyan-400 text-sm"
                    style={{
                      fontFamily: "'Share Tech Mono', monospace"
                    }}
                  >
                    Click to zoom
                  </span>
                </div>
              </div>
            ))}
          </ul>
        </section>

        {sheetData?.links && (
          <div 
            className="m-[30px] space-y-3 relative z-10"
            style={{
              borderTop: '1px solid rgba(0, 255, 255, 0.3)',
              paddingTop: '20px'
            }}
          >
            <h1 
              className="text-white font-semibold text-lg flex items-center gap-2"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                color: '#00ffff'
              }}
            >
              <span style={{ filter: 'drop-shadow(0 0 5px #00ffff)' }}>🔗</span>
              External Links
            </h1>
            {sheetData?.links?.map((item, index) => (
              <FetchLinkData 
                key={index}
                alt="Project Link" 
                sheetOpen={sheetOpen} 
                url={item}
                style={{
                  background: 'rgba(0, 255, 255, 0.1)',
                  border: '1px solid rgba(0, 255, 255, 0.3)',
                  borderRadius: '8px',
                  padding: '12px',
                  fontFamily: "'Courier New', monospace"
                }}
              />
            ))}
          </div>
        )}
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
        
        .sheet-list::-webkit-scrollbar {
          height: 6px;
        }
        
        .sheet-list::-webkit-scrollbar-thumb {
          background-color: rgba(0, 255, 255, 0.5);
          border-radius: 3px;
        }
        
        .sheet-list::-webkit-scrollbar-track {
          background-color: rgba(0, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}