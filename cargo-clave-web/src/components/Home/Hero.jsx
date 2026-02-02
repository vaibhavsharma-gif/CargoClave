import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1 className="hero-title">
          EVOLVING <br />
          GLOBAL TRADE
        </h1>
        <p className="hero-subtitle">
          Future-ready supply chain solutions across sectors and borders.
        </p>
        <div className="hero-actions">
          <Link to="/solutions" className="btn btn-primary btn-pill hero-btn">
            Explore What We Do <ArrowRight size={20} />
          </Link>
          <Link to="/contact" className="btn btn-ghost btn-pill hero-btn">
            Request Demo
          </Link>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          /* background-image removed for video */
          background-color: var(--color-deep-navy); /* Fallback */
          display: flex;
          align-items: center;
          color: white;
          overflow: hidden;
          padding-top: 8rem;
          padding-bottom: 4rem;
        }

        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          /* Increased contrast for video readability */
          background: linear-gradient(
            to right,
            rgba(1, 19, 39, 0.95) 0%,
            rgba(1, 19, 39, 0.8) 50%,
            rgba(1, 19, 39, 0.5) 100%
          );
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          /* Padding handling moved to parent for consistent centering */
        }

        .hero-title {
          font-family: var(--font-primary);
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.05;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: var(--color-white);
          opacity: 0;
          animation: slideUp 0.8s ease forwards 0.2s;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          font-weight: 400;
          max-width: 500px;
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.9);
          opacity: 0;
          animation: slideUp 0.8s ease forwards 0.4s;
          line-height: 1.5;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          opacity: 0;
          animation: slideUp 0.8s ease forwards 0.6s;
        }

        .hero-btn {
          min-width: 180px;
          justify-content: center;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 4.5rem;
          }
          .hero-subtitle {
            font-size: 1.25rem;
          }
        }
        
        @media (min-width: 1200px) {
          .hero-title {
            font-size: 5.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
