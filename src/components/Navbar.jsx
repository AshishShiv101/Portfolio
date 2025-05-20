import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Navigation items for easier management
  const navItems = [
    { to: 'about', label: 'About Me' },
    { to: 'tech', label: 'Technologies' },
    { to: 'exp', label: 'Experience' }
  ];

  // Handle scroll event for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const name = "Ashish Shiv";

  return (
    <>
      {/* Spacer div to prevent content from being hidden under the navbar */}
      <div className="h-14"></div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'py-3 bg-slate-900/90 backdrop-blur-md shadow-lg shadow-slate-900/20'
          : 'py-6 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Enhanced Animated Name */}
            <div className="flex-shrink-0 relative">
              {/* Main name container */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                whileHover={{ scale: 1.05 }}
                className="relative text-2xl font-bold cursor-pointer"
              >
                {/* Simple animated name with gradient */}
                <span className="bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent font-bold">
                  Ashish Shiv
                </span>

                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
                  whileHover={{
                    height: 2,
                    boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)',
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformOrigin: 'left center', width: '100%' }}
                />

                {/* Subtle glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-cyan-500/10 to-blue-500/10 rounded-lg blur-lg opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ zIndex: -1 }}
                />
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="text-slate-300 hover:text-green-400 transition-colors duration-300 p-2"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={700}
                  onSetActive={() => setActiveSection(item.to)}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${activeSection === item.to
                    ? 'text-white'
                    : 'text-slate-300 hover:text-white'
                    }`}
                >
                  {activeSection === item.to && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-green-600/30 via-green-400/30 to-cyan-500/30 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <span className={activeSection === item.to
                    ? "bg-gradient-to-r from-green-500 via-green-300 to-cyan-500 bg-clip-text text-transparent font-semibold"
                    : ""
                  }>
                    {item.label}
                  </span>
                </ScrollLink>
              ))}

              {/* Social links */}
              <div className="flex items-center space-x-2 pl-6 ml-6 border-l border-slate-700">
                <a
                  href="https://github.com/AshishShiv101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ashish-shiv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden"
            >
              <div className="px-4 pt-2 pb-4 bg-slate-800/95 backdrop-blur-md space-y-1 shadow-lg shadow-slate-900/20">
                {navItems.map((item) => (
                  <ScrollLink
                    key={item.to}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                    onSetActive={() => setActiveSection(item.to)}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 ${activeSection === item.to
                      ? 'bg-gradient-to-r from-green-600/20 via-green-400/20 to-cyan-500/20 text-white'
                      : 'text-slate-300 hover:bg-slate-700/50'
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className={activeSection === item.to
                      ? "bg-gradient-to-r from-green-500 via-green-300 to-cyan-500 bg-clip-text text-transparent font-semibold"
                      : ""
                    }>
                      {item.label}
                    </span>
                  </ScrollLink>
                ))}

                {/* Mobile social links */}
                <div className="flex items-center space-x-4 px-4 py-3 border-t border-slate-700/50 mt-2">
                  <a
                    href="https://github.com/AshishShiv101"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-white transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ashish-shiv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-white transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;