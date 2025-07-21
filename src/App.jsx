import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThreeScenes from './ThreeScenes';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const scrollIndicatorRef = useRef(null);

  // Create animated scroll indicator with canvas
  useEffect(() => {
    const canvas = scrollIndicatorRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = 4;

    let animationId;

    const drawScrollIndicator = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background
      ctx.fillStyle = 'rgba(20, 20, 20, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Progress gradient
      const width = (scrollProgress / 100) * canvas.width;
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, 'rgba(139, 92, 246, 0.9)');
      gradient.addColorStop(0.5, 'rgba(45, 212, 191, 0.9)');
      gradient.addColorStop(1, 'rgba(16, 185, 129, 0.9)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, canvas.height);

      // Pulse effect
      const time = Date.now() * 0.001;
      const pulseWidth = Math.min(50, width * 0.1);
      const pulseX = width - pulseWidth * 0.5;

      if (pulseX > 0) {
        const pulseGradient = ctx.createLinearGradient(
          pulseX - pulseWidth, 0,
          pulseX + pulseWidth, 0
        );
        pulseGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        pulseGradient.addColorStop(0.5, `rgba(255, 255, 255, ${0.3 + 0.2 * Math.sin(time * 3)})`);
        pulseGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = pulseGradient;
        ctx.fillRect(pulseX - pulseWidth, 0, pulseWidth * 2, canvas.height);
      }

      animationId = requestAnimationFrame(drawScrollIndicator);
    };

    animationId = requestAnimationFrame(drawScrollIndicator);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 4;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollProgress]);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      const totalScroll = scrollHeight - clientHeight;
      const scrollPercentage = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate gradient position
  const gradientPosition = {
    x: 50 + (mousePosition.x - 0.5) * 10,
    y: -20 + (mousePosition.y - 0.5) * 10
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased">
      {/* Three.js 3D Background */}
      <ThreeScenes scrollProgress={scrollProgress} mousePosition={mousePosition} />

      {/* Interactive background */}
      <div className="fixed top-0 h-full w-full" style={{ zIndex: 2 }}>
        <div
          className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950"
          style={{
            backgroundImage: `
              radial-gradient(
                ellipse 80% 80% at ${gradientPosition.x}% ${gradientPosition.y}%,
                rgba(120, 119, 198, 0.3),
                rgba(120, 198, 198, 0.1) 30%,
                rgba(120, 198, 132, 0.05) 60%,
                rgba(255, 255, 255, 0)
              ),
              radial-gradient(
                ellipse 40% 40% at ${100 - gradientPosition.x}% ${100 - gradientPosition.y}%,
                rgba(98, 119, 198, 0.15),
                rgba(255, 255, 255, 0) 60%
              )
            `
          }}
        />

        {/* Animated particles */}
        <div className="stars-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 95}%`,
                left: `${Math.random() * 95}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Custom scroll progress indicator */}
      <canvas
        ref={scrollIndicatorRef}
        className="fixed top-0 left-0 z-50 w-full h-1"
      />

      {/* Floating scroll percentage pill */}
      <div
        className="fixed right-6 bottom-6 z-50 h-8 px-3 bg-neutral-900/80 text-sm flex items-center justify-center rounded-full border border-cyan-500/30 backdrop-blur-md transition-all duration-300 text-cyan-400 font-mono shadow-lg shadow-cyan-900/20 hover:scale-110 hover:border-cyan-400/50 group"
        style={{
          opacity: scrollProgress > 2 ? 0.9 : 0,
          transform: `translateY(${scrollProgress > 2 ? '0' : '10px'})`
        }}
      >
        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 animate-pulse group-hover:bg-white" />
        {Math.round(scrollProgress)}%
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;