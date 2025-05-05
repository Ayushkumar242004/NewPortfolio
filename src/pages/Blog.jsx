import React, { useEffect } from "react";

export default function Blog() {
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
		<article  className="about active" 
		data-page="blog"
		style={{
		  background: 'radial-gradient(circle at center, #0a0a1a 0%, #000000 100%)',
		  color: '#fff',
		  fontFamily: "'Courier New', monospace",
		  position: 'relative',
		  overflow: 'hidden'
		}}>
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
				<h2 className="h2 article-title">Blog</h2>
			</header>

			<section className="blog-posts">
				<ul className="blog-posts-list">
					<li className="blog-post-item">
						<a href="#">
							<figure className="blog-banner-box">
								<img
									src="blog-1.jpg"
									alt="Design conferences in 2022"
									loading="lazy"
								/>
							</figure>

							<div className="blog-content">
								<div className="blog-meta">
									<p className="blog-category">Design</p>

									<span className="dot"></span>

									<time>Fab 23, 2022</time>
								</div>

								<h3 className="h3 blog-item-title">
									Design conferences in 2022
								</h3>

								<p className="blog-text">
									Veritatis et quasi architecto beatae vitae dicta sunt,
									explicabo.
								</p>
							</div>
						</a>
					</li>

					<li className="blog-post-item">
						<a href="#">
							<figure className="blog-banner-box">
								<img
									src="blog-2.jpg"
									alt="Best fonts every designer"
									loading="lazy"
								/>
							</figure>

							<div className="blog-content">
								<div className="blog-meta">
									<p className="blog-category">Design</p>

									<span className="dot"></span>

									<time>Fab 23, 2022</time>
								</div>

								<h3 className="h3 blog-item-title">
									Best fonts every designer
								</h3>

								<p className="blog-text">
									Sed ut perspiciatis, nam libero tempore, cum soluta nobis est
									eligendi.
								</p>
							</div>
						</a>
					</li>

					<li className="blog-post-item">
						<a href="#">
							<figure className="blog-banner-box">
								<img src="blog-3.jpg" alt="Design digest #80" loading="lazy" />
							</figure>

							<div className="blog-content">
								<div className="blog-meta">
									<p className="blog-category">Design</p>

									<span className="dot"></span>

									<time>Fab 23, 2022</time>
								</div>

								<h3 className="h3 blog-item-title">Design digest #80</h3>

								<p className="blog-text">
									Excepteur sint occaecat cupidatat no proident, quis nostrum
									exercitationem ullam corporis suscipit.
								</p>
							</div>
						</a>
					</li>

					<li className="blog-post-item">
						<a href="#">
							<figure className="blog-banner-box">
								<img
									src="blog-4.jpg"
									alt="UI interactions of the week"
									loading="lazy"
								/>
							</figure>

							<div className="blog-content">
								<div className="blog-meta">
									<p className="blog-category">Design</p>

									<span className="dot"></span>

									<time>Fab 23, 2022</time>
								</div>

								<h3 className="h3 blog-item-title">
									UI interactions of the week
								</h3>

								<p className="blog-text">
									Enim ad minim veniam, consectetur adipiscing elit, quis
									nostrud exercitation ullamco laboris nisi.
								</p>
							</div>
						</a>
					</li>

					<li className="blog-post-item">
						<a href="#">
							<figure className="blog-banner-box">
								<img
									src="blog-5.jpg"
									alt="The forgotten art of spacing"
									loading="lazy"
								/>
							</figure>

							<div className="blog-content">
								<div className="blog-meta">
									<p className="blog-category">Design</p>

									<span className="dot"></span>

									<time>Fab 23, 2022</time>
								</div>

								<h3 className="h3 blog-item-title">
									The forgotten art of spacing
								</h3>

								<p className="blog-text">
									Maxime placeat, sed do eiusmod tempor incididunt ut labore et
									dolore magna aliqua.
								</p>
							</div>
						</a>
					</li>

					<li className="blog-post-item">
						<a href="#">
							<figure className="blog-banner-box">
								<img src="blog-6.jpg" alt="Design digest #79" loading="lazy" />
							</figure>

							<div className="blog-content">
								<div className="blog-meta">
									<p className="blog-category">Design</p>

									<span className="dot"></span>

									<time>Fab 23, 2022</time>
								</div>

								<h3 className="h3 blog-item-title">Design digest #79</h3>

								<p className="blog-text">
									Optio cumque nihil impedit uo minus quod maxime placeat, velit
									esse cillum.
								</p>
							</div>
						</a>
					</li>
				</ul>
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
