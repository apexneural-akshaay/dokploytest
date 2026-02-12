import React, { useState, useEffect } from 'react'

export default function App() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="spiderman-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Permanent+Marker&family=Bebas+Neue&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
        }

        .spiderman-container {
          background: #000;
          color: #fff;
          font-family: 'Bebas Neue', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Hero Section */
        .hero {
          height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(135deg, #0a0e27 0%, #1a0f1f 50%, #2d1b1b 100%);
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(37, 99, 235, 0.15) 0%, transparent 50%);
          animation: pulse 8s ease-in-out infinite;
        }

        .hero::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.5;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          transform: translateY(${isVisible ? '0' : '50px'});
          opacity: ${isVisible ? '1' : '0'};
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-title {
          font-family: 'Bangers', cursive;
          font-size: clamp(4rem, 15vw, 12rem);
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #dc2626 0%, #ef4444 25%, #3b82f6 75%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 80px rgba(220, 38, 38, 0.5);
          animation: titleGlow 3s ease-in-out infinite;
          position: relative;
          display: inline-block;
        }

        .hero-title::after {
          content: 'SPIDER-MAN';
          position: absolute;
          left: 3px;
          top: 3px;
          z-index: -1;
          background: linear-gradient(135deg, rgba(220, 38, 38, 0.3) 0%, rgba(37, 99, 235, 0.3) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes titleGlow {
          0%, 100% { text-shadow: 0 0 80px rgba(220, 38, 38, 0.5), 0 0 120px rgba(37, 99, 235, 0.3); }
          50% { text-shadow: 0 0 120px rgba(220, 38, 38, 0.8), 0 0 160px rgba(37, 99, 235, 0.5); }
        }

        .hero-subtitle {
          font-family: 'Permanent Marker', cursive;
          font-size: clamp(1.2rem, 3vw, 2rem);
          color: #ef4444;
          margin-bottom: 2rem;
          animation: fadeInUp 1s ease-out 0.3s both;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-image {
          position: absolute;
          width: 600px;
          height: 600px;
          background: url('https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&q=80') center/cover;
          border-radius: 50%;
          border: 8px solid #dc2626;
          box-shadow: 
            0 0 100px rgba(220, 38, 38, 0.6),
            0 0 200px rgba(37, 99, 235, 0.4),
            inset 0 0 100px rgba(0, 0, 0, 0.5);
          animation: heroFloat 6s ease-in-out infinite;
          opacity: 0.3;
          filter: brightness(1.2) contrast(1.3);
        }

        @keyframes heroFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }

        .web-decoration {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          opacity: 0.1;
        }

        .web-line {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ef4444, transparent);
          transform-origin: center;
          animation: webPulse 4s ease-in-out infinite;
        }

        .web-line:nth-child(1) { top: 20%; left: 0; width: 100%; animation-delay: 0s; }
        .web-line:nth-child(2) { top: 40%; left: 0; width: 100%; animation-delay: 1s; }
        .web-line:nth-child(3) { top: 60%; left: 0; width: 100%; animation-delay: 2s; }
        .web-line:nth-child(4) { top: 80%; left: 0; width: 100%; animation-delay: 3s; }

        @keyframes webPulse {
          0%, 100% { opacity: 0.1; transform: scaleX(1); }
          50% { opacity: 0.3; transform: scaleX(1.05); }
        }

        /* Comic Panels Section */
        .comic-section {
          padding: 8rem 2rem;
          background: #0f0f0f;
          position: relative;
        }

        .comic-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(to bottom, #000, transparent);
        }

        .section-title {
          font-family: 'Bangers', cursive;
          font-size: clamp(3rem, 8vw, 6rem);
          text-align: center;
          margin-bottom: 4rem;
          background: linear-gradient(135deg, #dc2626, #ef4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          position: relative;
          display: inline-block;
          width: 100%;
        }

        .section-title::before,
        .section-title::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 200px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #dc2626, transparent);
        }

        .section-title::before { left: 0; }
        .section-title::after { right: 0; }

        .comic-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .comic-panel {
          background: #1a1a1a;
          border: 6px solid #dc2626;
          padding: 2rem;
          position: relative;
          transform: rotate(-1deg);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .comic-panel:nth-child(even) {
          transform: rotate(1deg);
        }

        .comic-panel:hover {
          transform: rotate(0deg) scale(1.05);
          border-color: #3b82f6;
          box-shadow: 0 20px 60px rgba(220, 38, 38, 0.4);
          z-index: 10;
        }

        .comic-panel::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(37, 99, 235, 0.1));
          opacity: 0;
          transition: opacity 0.4s;
        }

        .comic-panel:hover::before {
          opacity: 1;
        }

        .panel-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border: 3px solid #000;
          margin-bottom: 1rem;
          filter: contrast(1.2) saturate(1.3);
          transition: transform 0.4s;
        }

        .comic-panel:hover .panel-image {
          transform: scale(1.1);
        }

        .panel-title {
          font-family: 'Permanent Marker', cursive;
          font-size: 1.8rem;
          color: #ef4444;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }

        .panel-text {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #ccc;
        }

        /* Powers Grid */
        .powers-section {
          padding: 8rem 2rem;
          background: linear-gradient(180deg, #0f0f0f 0%, #1a0f1f 100%);
          position: relative;
        }

        .powers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .power-card {
          background: rgba(26, 26, 26, 0.8);
          border: 3px solid #dc2626;
          padding: 2rem;
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s;
          backdrop-filter: blur(10px);
        }

        .power-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(220, 38, 38, 0.1), transparent);
          transform: rotate(45deg);
          transition: all 0.6s;
        }

        .power-card:hover::before {
          left: 100%;
        }

        .power-card:hover {
          transform: translateY(-10px);
          border-color: #3b82f6;
          box-shadow: 0 30px 60px rgba(37, 99, 235, 0.3);
        }

        .power-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          display: block;
        }

        .power-name {
          font-family: 'Permanent Marker', cursive;
          font-size: 1.6rem;
          color: #ef4444;
          margin-bottom: 0.5rem;
        }

        .power-desc {
          color: #aaa;
          line-height: 1.6;
        }

        /* Gallery Section */
        .gallery-section {
          padding: 8rem 2rem;
          background: #000;
          position: relative;
          overflow: hidden;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
          max-width: 1600px;
          margin: 0 auto;
        }

        .gallery-item {
          position: relative;
          aspect-ratio: 1;
          overflow: hidden;
          border: 4px solid #dc2626;
          cursor: pointer;
          transition: all 0.4s;
        }

        .gallery-item:hover {
          border-color: #3b82f6;
          transform: scale(1.05);
          z-index: 10;
          box-shadow: 0 20px 60px rgba(220, 38, 38, 0.6);
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.8) contrast(1.2);
          transition: all 0.4s;
        }

        .gallery-item:hover .gallery-img {
          filter: brightness(1.1) contrast(1.3);
          transform: scale(1.1);
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
          padding: 1.5rem;
          transform: translateY(100%);
          transition: transform 0.4s;
        }

        .gallery-item:hover .gallery-overlay {
          transform: translateY(0);
        }

        .gallery-title {
          font-family: 'Permanent Marker', cursive;
          color: #ef4444;
          font-size: 1.3rem;
        }

        /* CTA Section */
        .cta-section {
          padding: 8rem 2rem;
          background: linear-gradient(135deg, #1a0f1f 0%, #0a0e27 100%);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(220, 38, 38, 0.2), transparent 70%);
          transform: translate(-50%, -50%);
          animation: ctaPulse 4s ease-in-out infinite;
        }

        @keyframes ctaPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.6; }
        }

        .cta-title {
          font-family: 'Bangers', cursive;
          font-size: clamp(2.5rem, 6vw, 5rem);
          margin-bottom: 2rem;
          background: linear-gradient(135deg, #dc2626, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-buttons {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        .cta-button {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.5rem;
          padding: 1.2rem 3rem;
          border: 3px solid #dc2626;
          background: transparent;
          color: #fff;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.4s;
          letter-spacing: 0.1em;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, #dc2626, transparent);
          transition: left 0.6s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          border-color: #3b82f6;
          box-shadow: 0 0 30px rgba(220, 38, 38, 0.6);
          transform: translateY(-5px);
        }

        .cta-button.primary {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          border-color: #dc2626;
        }

        .cta-button.primary:hover {
          background: linear-gradient(135deg, #ef4444, #dc2626);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-image {
            width: 400px;
            height: 400px;
          }

          .comic-grid,
          .powers-grid,
          .gallery-grid {
            grid-template-columns: 1fr;
          }

          .section-title::before,
          .section-title::after {
            display: none;
          }
        }

        /* Scroll Progress */
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 4px;
          background: linear-gradient(90deg, #dc2626, #3b82f6);
          z-index: 1000;
          transition: width 0.1s;
        }
      `}</style>

      {/* Scroll Progress */}
      <div
        className="scroll-progress"
        style={{
          width: `${
            typeof document !== 'undefined' && typeof window !== 'undefined'
              ? (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
              : 0
          }%`,
        }}
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="web-decoration">
          <div className="web-line"></div>
          <div className="web-line"></div>
          <div className="web-line"></div>
          <div className="web-line"></div>
        </div>
        <div className="hero-image"></div>
        <div className="hero-content">
          <h1 className="hero-title">SPIDER-MAN</h1>
          <p className="hero-subtitle">Your Friendly Neighborhood Hero</p>
        </div>
      </section>

      {/* Comic Panels */}
      <section className="comic-section">
        <h2 className="section-title">The Amazing Story</h2>
        <div className="comic-grid">
          <div className="comic-panel">
            <img
              src="https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=800&q=80"
              alt="Spider-Man Origin"
              className="panel-image"
            />
            <h3 className="panel-title">The Origin</h3>
            <p className="panel-text">
              Bitten by a radioactive spider, Peter Parker gained incredible abilities and learned that with great
              power comes great responsibility.
            </p>
          </div>

          <div className="comic-panel">
            <img
              src="https://images.unsplash.com/photo-1635863138275-d9b33299680b?w=800&q=80"
              alt="Web Slinger"
              className="panel-image"
            />
            <h3 className="panel-title">Web-Slinger</h3>
            <p className="panel-text">
              Swinging through New York City, Spider-Man protects the innocent with his incredible web-shooting
              abilities and acrobatic prowess.
            </p>
          </div>

          <div className="comic-panel">
            <img
              src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&q=80"
              alt="The Hero"
              className="panel-image"
            />
            <h3 className="panel-title">The Protector</h3>
            <p className="panel-text">
              Fighting crime and facing villains, Spider-Man never backs down from protecting those who cannot
              protect themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Powers Section */}
      <section className="powers-section">
        <h2 className="section-title">Superhuman Powers</h2>
        <div className="powers-grid">
          <div className="power-card">
            <span className="power-icon">🕷️</span>
            <h3 className="power-name">Spider-Sense</h3>
            <p className="power-desc">
              Precognitive ability that alerts Spider-Man to danger before it happens, allowing him to react with
              superhuman reflexes.
            </p>
          </div>

          <div className="power-card">
            <span className="power-icon">💪</span>
            <h3 className="power-name">Super Strength</h3>
            <p className="power-desc">
              Can lift approximately 10 tons and perform incredible feats of strength that far exceed normal human
              capabilities.
            </p>
          </div>

          <div className="power-card">
            <span className="power-icon">🕸️</span>
            <h3 className="power-name">Web-Shooting</h3>
            <p className="power-desc">
              Creates incredibly strong synthetic webbing that can support massive weight and swing across city
              skylines.
            </p>
          </div>

          <div className="power-card">
            <span className="power-icon">🧗</span>
            <h3 className="power-name">Wall-Crawling</h3>
            <p className="power-desc">
              Adheres to virtually any surface, allowing him to scale buildings and stick to walls with ease.
            </p>
          </div>

          <div className="power-card">
            <span className="power-icon">⚡</span>
            <h3 className="power-name">Enhanced Agility</h3>
            <p className="power-desc">
              Possesses superhuman agility, coordination, and equilibrium that allows for incredible acrobatic
              maneuvers.
            </p>
          </div>

          <div className="power-card">
            <span className="power-icon">🏃</span>
            <h3 className="power-name">Super Speed</h3>
            <p className="power-desc">
              Enhanced speed and reflexes that allow him to dodge bullets and move faster than the human eye can
              follow.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2 className="section-title">Hero Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1611604548018-d56bbd85d681?w=800&q=80"
              alt="Spider-Man Action"
              className="gallery-img"
            />
            <div className="gallery-overlay">
              <p className="gallery-title">In Action</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&q=80"
              alt="City Guardian"
              className="gallery-img"
            />
            <div className="gallery-overlay">
              <p className="gallery-title">City Guardian</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=800&q=80"
              alt="Web Swinging"
              className="gallery-img"
            />
            <div className="gallery-overlay">
              <p className="gallery-title">Web Swinging</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&q=80"
              alt="Night Patrol"
              className="gallery-img"
            />
            <div className="gallery-overlay">
              <p className="gallery-title">Night Patrol</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="cta-title">Join The Web-Slinger</h2>
        <div className="cta-buttons">
          <button className="cta-button primary">Explore Comics</button>
          <button className="cta-button">Watch Movies</button>
          <button className="cta-button">Play Games</button>
        </div>
      </section>
    </div>
  )
}
