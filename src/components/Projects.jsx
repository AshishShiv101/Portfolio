import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Floating animation for the image
  const floatingAnimation = {
    y: [0, -12, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <motion.section
      id="projects"
      className="py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Section title with improved animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-gray-200 via-slate-300 to-gray-200 bg-clip-text text-transparent">
            Proj
          </span>
          <span className="bg-gradient-to-r from-green-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            ects
          </span>
        </h1>
        <motion.div
          className="mx-auto w-32 h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        />
        <motion.p
          className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Explore my recent work and personal projects
        </motion.p>
      </motion.div>

      {/* Projects grid with enhanced animations */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto px-6"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="mb-16 flex flex-col lg:flex-row gap-10 rounded-3xl border border-slate-700/30 p-8 relative overflow-hidden backdrop-blur-sm shadow-xl transition-all duration-300 hover:border-green-500/30 hover:shadow-green-500/10"
          >
            {/* Animated glow effect when hovered */}
            {hoveredIndex === index && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-cyan-500/5 to-blue-500/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}

            {/* Project image with floating animation */}
            <motion.div
              className="w-full lg:w-1/3 flex justify-center items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                animate={hoveredIndex === index ? floatingAnimation : {}}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-2xl blur-md transform scale-105" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-56 h-56 object-cover rounded-2xl border border-slate-600/50 relative z-10 shadow-lg"
                />
              </motion.div>
            </motion.div>

            {/* Project details with animated elements */}
            <div className="w-full lg:w-2/3 flex flex-col justify-center">
              <motion.h2
                className="text-2xl font-bold mb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent hover:from-green-300 hover:to-cyan-300 transition-all duration-300"
                >
                  {project.title}
                </a>
              </motion.h2>

              <motion.p
                className="text-slate-300 mb-6 leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {project.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(16, 185, 129, 0.2)",
                    }}
                    className="text-xs rounded-full px-4 py-2 font-medium border border-green-500/20 text-green-300 backdrop-blur-sm transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div
                className="mt-6 flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ zIndex: 10 }} // Ensure clickable
                  onClick={() => console.log(`Navigating to ${project.link}`)} // Debug
                  className="px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-green-500/20 to-cyan-500/20 hover:from-green-500/30 hover:to-cyan-500/30 border border-green-500/30 text-green-300 flex items-center justify-center transition-all duration-300"
                  aria-label={`View ${project.title} project`}
                >
                  View Project
                </motion.a>

                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ zIndex: 10 }} // Ensure clickable
                    onClick={() => console.log(`Navigating to ${project.github}`)} // Debug
                    className="px-5 py-2 rounded-full text-sm font-medium border border-slate-600/50 hover:border-slate-500/50 text-slate-300 flex items-center justify-center transition-all duration-300"
                    aria-label={`View source code for ${project.title}`}
                  >
                    View Code
                  </motion.a>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;