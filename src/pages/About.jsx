import React, { useEffect } from "react";

export default function About() {
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

  const Experience = [
    {
      company: "Tech Mahindra",
      companyLogo: "techMah.png",
      role: "SDE Intern",
      duration: "May 2025 - July 2025",
      description:
        "Worked as an SDE Intern at Tech Mahindra, contributing innovative software solutions and optimizing existing systems to enhance performance and efficiency.",
    },
    {
      company: "QNU Labs",
      companyLogo: "qnu.png",
      role: "Web Developer",
      duration: "Nov 2024 - Apr 2025",
      description:
        "Worked as a Full Stack Web developer at QNU Labs, contributed in the devlopment of a QRNG number randomness assessment platform.",
    },
    {
      company: "HALE Labs",
      companyLogo: "hale.png",
      role: "Reseacrh Intern",
      duration: "May 2024 - June 2024",
      description:
        "Worked as an Research Intern at HALE labs, contributed in the development of heart disease prediction using Chest-X ray images.",
    },
    {
      company: "Smile Club NITK",
      companyLogo: "smile.jpeg",
      role: "Web Lead",
      duration: "Mar 2022 - Present",
      description:
        "Worked as the lead developer of the web devlopment team of the SMILE Club.",
    },
    {
      company: "Genesis",
      companyLogo: "genesis.png",
      role: "Executive Member",
      duration: "Nov 2024 - Present",
      description:
        "As a member of the dance crew GENESIS, I have participated in various dance events and competitions.",
    },
    {
      company: "E-Summit and Innovation Comitte NITK",
      companyLogo: "e-summitlogo.png",
      role: "Web Developer",
      duration: "May 2024 - July 2024",
      description:
        "Played a key role in developing the official website for E-Summit, focusing on responsive design using React.js, TailwindCSS and Aceternity UI. Contributed to marque, responsive timeline section and FAQs section.",
    },
  ];

  const Skills = [
    {
      category: (
        <p className="flex gap-2 items-center text-2xl">
          <ion-icon name="code-slash-outline"></ion-icon>{" "}
          <p className="text-lg opacity-75"> Languages</p>
        </p>
      ),
      skill: [
        { name: "Javascript", image: "javascript.svg" },
        { name: "Typescript", image: "typescript.svg" },
        { name: "C++", image: "c++.svg" },
        { name: "C", image: "c.svg" },
        { name: "Python", image: "python.svg" },
      ],
    },
    {
      category: (
        <p className="flex gap-2 items-center text-2xl">
          <ion-icon name="laptop-outline"></ion-icon>{" "}
          <p className="text-lg opacity-75">Frontend</p>
        </p>
      ),
      skill: [
        { name: "HTML", image: "html5.svg" },
        { name: "CSS", image: "css.svg" },
        { name: "Tailwind css", image: "tailwindcss.svg" },
        { name: "Shadcn-ui", image: "shadcn-ui.svg" },
        { name: "React", image: "react.svg" },
        { name: "Next.js", image: "next2.png" },
        { name: "React router", image: "reactrouter.svg" },
        { name: "Redux", image: "redux.svg" },
      ],
    },
    {
      category: (
        <p className="flex gap-2 items-center text-2xl ">
          <ion-icon name="server-outline"></ion-icon>
          <p className="text-lg opacity-75"> Backend</p>
        </p>
      ),
      skill: [
        { name: "Node.js", image: "nodejs.svg" },
        { name: "Express.js", image: "expressjs.svg" },
        { name: "Next.js", image: "nextjs_icon_dark.svg" },
        { name: "MongoDB", image: "mongodb.svg" },
        { name: "JWT", image: "jwt.svg" },
        { name: "Django", image: "django.png" },
        { name: "Docker", image: "docker.svg" },
      ],
    },
    {
      category: (
        <p className="flex gap-2 items-center text-2xl ">
          <ion-icon name="hammer-outline"></ion-icon>
          <p className="text-lg opacity-75">Tools</p>
        </p>
      ),
      skill: [
        { name: "Github", image: "github.svg" },
        { name: "NPM", image: "npm.svg" },
        { name: "VS Code", image: "vscode.svg" },
        { name: "Figma", image: "figma.svg" },
      ],
    },
  ];
  
  return (
    <article 
      className="about active" 
      data-page="about"
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
          className="h2 article-title font-extralight"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            background: 'linear-gradient(90deg, #00ffff, #ff00ff)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block',
            textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
            animation: 'flicker 3s infinite alternate'
          }}
        >
          About me
        </h2>
      </header>

      <section 
        className="about-text max-w-[600px]"
        style={{
          borderLeft: '2px solid #00ffff',
          paddingLeft: '20px',
          position: 'relative'
        }}
      >
        {/* Binary code floating */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
          {[...Array(20)].map((_, i) => (
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

        <p className="relative z-10">
          Hey I am Ayush, a passionate Full-Stack Web Developer and AI/ML Enthusiast. I design, build, and deploy seamless digital experiences with a thirst for knowledge, a drive to innovate, and a love for solving real-world problems through code.
        </p>

        <p className="relative z-10 mt-4">
          Transforming ideas into seamless digital experiences . Committed to
          crafting dynamic and innovative web & ML solutions.
        </p>
      </section>

      <section className="service mt-8">
        <h3 
          className="h3 service-title"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            color: '#00ffff',
            textShadow: '0 0 10px #00ffff'
          }}
        >
          What i Do ?
        </h3>

        <ul className="service-list">
          {[
            {
              icon: "icon-design.svg",
              title: "AI & ML",
              text: "Harnessing the power of Artificial Intelligence and Machine Learning to build intelligent systems that learn, adapt, and solve complex problems — from predictive analytics to deep learning applications using tools like TensorFlow, Keras, and XGBoost.",
              color: "#ff00ff"
            },
            {
              icon: "icon-dev.svg",
              title: "Fullstack Web development",
              text: "High-quality development of sites at the professional level.",
              color: "#00ffff"
            },
            {
              icon: "icon-dev.svg",
              title: "Blockchain",
              text: "Leveraging blockchain technology to build secure, transparent, and decentralized applications — from smart contracts to crypto-based solutions that redefine trust and data integrity in digital ecosystems.",
              color: "#ffff00"
            }
          ].map((service, index) => (
            <li 
              className="service-item bg-black bg-opacity-50 backdrop-blur-sm hover:bg-opacity-70 transition-all duration-300"
              style={{
                border: `1px solid rgba(${index === 0 ? '255, 0, 255' : index === 1 ? '0, 255, 255' : '255, 255, 0'}, 0.3)`,
                boxShadow: `inset 0 0 10px rgba(${index === 0 ? '255, 0, 255' : index === 1 ? '0, 255, 255' : '255, 255, 0'}, 0.2)`
              }}
              key={index}
            >
              <div className="service-icon-box">
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  width="40" 
                  style={{
                    filter: `drop-shadow(0 0 5px ${service.color})`
                  }}
                />
              </div>

              <div className="service-content-box">
                <h4 
                  className="h4 service-item-title"
                  style={{
                    color: service.color,
                    textShadow: `0 0 10px ${service.color}`
                  }}
                >
                  {service.title}
                </h4>

                <p className="service-item-text">
                  {service.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="timeline mt-8">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon 
              name="book-outline"
              style={{
                color: '#00ffff',
                fontSize: '24px'
              }}
            ></ion-icon>
          </div>

          <h3 
            className="h3 font-semi bold"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              color: '#00ffff',
              textShadow: '0 0 10px #00ffff'
            }}
          >
            Experience
          </h3>
        </div>

        <ol className="timeline-list">
          {Experience.map((role, index) => (
            <li 
              className="timeline-item bg-black bg-opacity-50 backdrop-blur-sm hover:bg-opacity-70 transition-all duration-300 mb-4"
              style={{
                border: '1px solid rgba(0, 255, 255, 0.3)',
                boxShadow: 'inset 0 0 10px rgba(0, 255, 255, 0.2)'
              }}
              key={index}
            >
              <div className="flex gap-4 hover:translate-x-2 duration-[200ms] cursor-pointer transition-transform p-4">
                <img
                  className="w-[50px] h-[50px] rounded-lg border border-gray-600 object-cover"
                  src={
                    role.companyLogo ||
                    "https://media.licdn.com/dms/image/D560BAQEBdmCjop6pRg/company-logo_200_200/0/1712684860643/synkerr_logo?e=2147483647&v=beta&t=WisZ2qvfrBFPW5pTlEQjPRi7ViAfhCSrtgEy5hPvPfY"
                  }
                  alt=""
                />
                <div>
                  <h4 
                    className="h4 timeline-item-title"
                    style={{
                      color: '#00ffff'
                    }}
                  >
                    <b>{role.role} </b> <br />
                    {role.company}{" "}
                  </h4>

                  <span className="text-gray-300">{role.duration}</span>

                  <p className="timeline-text">{role.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div 
        className="separator my-8"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #00ffff, transparent)',
          opacity: 0.5
        }}
      ></div>

      <section className="skill">
        <div className="title-wrapper">
          <div className="icon-box mr-4">
            <ion-icon 
              name="hammer-outline"
              style={{
                color: '#00ffff',
                fontSize: '24px'
              }}
            ></ion-icon>
          </div>

          <h3 
            className="h3 font-semibold"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              color: '#00ffff',
              textShadow: '0 0 10px #00ffff'
            }}
          >
            My Skills
          </h3>
        </div>

        <ol className="timeline-list">
          {Skills.map((skill, index) => (
            <div 
              className="mt-6 mr-8 bg-black bg-opacity-50 backdrop-blur-sm p-4 rounded-lg"
              style={{
                border: '1px solid rgba(0, 255, 255, 0.3)',
                boxShadow: 'inset 0 0 10px rgba(0, 255, 255, 0.2)'
              }}
              key={index}
            >
              <h4 
                className="skills-title font-medium overflow-hidden mb-0 p-4"
                style={{
                  color: '#00ffff',
                  textShadow: '0 0 10px #00ffff',
                  fontFamily: "'Orbitron', sans-serif"
                }}
              >
                {skill.category}
              </h4>
              <div className="grid grid-cols-6 text-white gap-1 w-auto">
                {skill.skill.map((s, i) => (
                  <div 
                    className="bg-[#2a2a2b] w-full p-5 m-0 flex flex-col items-center gap-3 justify-between hover:scale-110 hover:rotate-3 hover:z-[10] hover:border border-gray-600 duration-200 grayscale hover:grayscale-0"
                    style={{
                      transition: 'all 0.3s ease',
                      background: 'rgba(42, 42, 43, 0.7)',
                      backdropFilter: 'blur(10px)'
                    }}
                    key={i}
                  >
                    <img
                      src={s.image}
                      className="max-w-[30px] max-h-[30px]"
                      alt=""
                    />
                    <p className="text-center text-sm opacity-80">{s.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ol>
      </section>

      <div 
        className="separator my-8"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #00ffff, transparent)',
          opacity: 0.5
        }}
      ></div>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon 
              name="school-outline"
              style={{
                color: '#00ffff',
                fontSize: '24px'
              }}
            ></ion-icon>
          </div>

          <h3 
            className="h3 font-semibold"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              color: '#00ffff',
              textShadow: '0 0 10px #00ffff'
            }}
          >
            Education
          </h3>
        </div>

        <ol className="timeline-list">
          {[
            {
              logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqphjixAksZ6V1zyBb01c4KoYOjyeLg7TEUQ&s",
              title: "National Institute of technology Karnataka, Surathkal (NITK)",
              degree: "B.Tech in Information Technology",
              minor: "Minors in Machine Learning",
              duration: "2022-2026"
            },
            {
              logo: "pc.png",
              title: "PC School, Ghaziabad, UP, India",
              degree: "PCM with Computer Science",
              duration: "2018-2020"
            }
          ].map((edu, index) => (
            <li 
              className="timeline-item bg-black bg-opacity-50 backdrop-blur-sm hover:bg-opacity-70 transition-all duration-300 mb-4"
              style={{
                border: '1px solid rgba(0, 255, 255, 0.3)',
                boxShadow: 'inset 0 0 10px rgba(0, 255, 255, 0.2)'
              }}
              key={index}
            >
              <div className="flex gap-4 hover:translate-x-2 duration-[200ms] cursor-pointer transition-transform p-4">
                <img
                  className="w-[50px] h-[50px] rounded-lg border border-gray-600 object-cover"
                  src={edu.logo}
                  alt=""
                />
                <div>
                  <h4 
                    className="h4 timeline-item-title font-semibold"
                    style={{
                      color: '#00ffff'
                    }}
                  >
                    {edu.title}
                  </h4>

                  <span className="text-gray-300">{edu.degree}</span>
                  {edu.minor && <span className="text-xs block text-gray-400">{edu.minor}</span>}

                  <p className="timeline-text text-gray-300">{edu.duration}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
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