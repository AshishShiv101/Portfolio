import React from 'react';
import { HERO_CONTENT } from '../constants';
import profile from '../assets/Profile.jpg';
import { motion } from "framer-motion";
import { FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  // Animation variants
  const fadeIn = (direction, delay) => ({
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.8,
        delay,
      },
    },
  });

  return (
    <section id="hero" className="min-h-screen flex items-center py-20 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-32 left-10 w-64 h-64 rounded-full bg-green-500/5 filter blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-cyan-500/5 filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text content column */}
          <motion.div
            className="lg:w-1/2 z-10 mb-12 lg:mb-0"
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            {/* Name with underline decoration */}
            <div className="relative mb-6">
              <motion.div
                variants={fadeIn('up', 0)}
                className="mb-2"
              >
                <span className="text-sm uppercase tracking-widest font-medium text-slate-400">Welcome to my portfolio</span>
              </motion.div>

              <motion.h1
                variants={fadeIn('up', 0.1)}
                className="text-5xl lg:text-6xl font-bold mb-2"
              >
                <span className="bg-gradient-to-r from-gray-200 via-slate-300 to-gray-200 bg-clip-text text-transparent">
                  Ashish Shiv
                </span>
              </motion.h1>

              <motion.div
                variants={fadeIn('up', 0.2)}
                className="h-1 w-20 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full"
              />
            </div>

            {/* Role with animated typing effect */}
            <motion.div
              variants={fadeIn('up', 0.3)}
              className="mb-8"
            >
              <div className="flex items-center">
                <h2 className="text-3xl lg:text-4xl font-semibold">
                  <span className="bg-gradient-to-r from-green-500 via-green-300 to-cyan-500 bg-clip-text text-transparent inline-block">
                    Engineer
                  </span>
                </h2>
                <div className="w-2 h-8 ml-2 bg-green-500 animate-pulse rounded" />
              </div>
            </motion.div>

            {/* Bio paragraph */}
            <motion.p
              variants={fadeIn('up', 0.4)}
              className="text-lg text-slate-300 max-w-xl mb-10 leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* CTA Section */}
            <motion.div
              variants={fadeIn('up', 0.5)}
              className="flex flex-wrap gap-4"
            >
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-green-600 to-cyan-600 text-white font-medium transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 flex items-center gap-2"
              >
                Explore
                <FaArrowDown className="animate-bounce" />
              </ScrollLink>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/AshishShiv101"
                  target="https://github.com/AshishShiv101"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-slate-700 hover:border-green-500/50 text-slate-300 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ashish-shiv/"
                  target="https://www.linkedin.com/in/ashish-shiv/"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-slate-700 hover:border-green-500/50 text-slate-300 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Image column */}
          <motion.div
            className="lg:w-1/2 flex justify-center lg:justify-end z-10"
            initial="hidden"
            animate="visible"
            variants={fadeIn('left', 0.2)}
          >
            <div className="relative">
              {/* Decorative frame */}
              <motion.div
                className="absolute -inset-4 rounded-xl bg-gradient-to-r from-green-500/20 via-cyan-500/20 to-green-500/20 blur-md"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [0.98, 1.01, 0.98],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />

              {/* Profile image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative"
              >
                <img
                  src={profile}
                  alt="Ashish Shiv"
                  className="rounded-xl shadow-2xl w-full max-w-md object-cover border-2 border-slate-700/50"
                  style={{ maxHeight: "70vh" }}
                />

                {/* Experience badge */}
                <div className="absolute -bottom-5 -left-5 lg:-left-10 bg-slate-800/90 backdrop-blur-sm p-4 rounded-xl border border-green-500/30 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
                      1+
                    </div>
                    <div className="text-xs text-slate-300 font-medium">
                      Years<br />Experience
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
    
    </section>
  );
};

export default Hero;