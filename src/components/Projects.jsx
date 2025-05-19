import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Section title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-12"
      >
        <span className="bg-gradient-to-r from-gray-400 via-slate-300 to-gray-400 bg-clip-text text-transparent">
          Proj
        </span>
        <span className="bg-gradient-to-r from-green-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
          ects
        </span>
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mt-4" />
      </motion.h1>

      {/* Projects grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="mb-12 flex flex-col lg:flex-row gap-8 bg-slate-800/30 backdrop-blur-md rounded-2xl border border-slate-700/50 p-6 shadow-lg hover:shadow-green-500/10 transition-all duration-300"
          >
            {/* Project image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full lg:w-1/3 flex justify-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-48 h-48 object-cover rounded-xl border-2 border-slate-700/50 group-hover:border-green-500/30 transition-all duration-300"
              />
            </motion.div>

            {/* Project details */}
            <div className="w-full lg:w-2/3 flex flex-col justify-center">
              <h6 className="text-xl font-semibold mb-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent hover:underline transition-colors"
                >
                  {project.title}
                </a>
              </h6>
              <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs rounded-full px-3 py-1 font-medium bg-gradient-to-r from-green-900/40 to-cyan-900/40 border border-green-500/20 text-green-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;