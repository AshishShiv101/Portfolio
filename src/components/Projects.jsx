import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Top");
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ["Top", "Web", "AI/ML"];
  const filteredProjects = PROJECTS.filter(project => project.category === activeCategory);

  const scrollLeft = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => (prev < filteredProjects.length - 1 ? prev + 1 : prev));
  };

  const isValidUrl = (url) => {
    return typeof url === 'string' && url.startsWith('http');
  };

  return (
    <motion.section
      id="projects"
      className="py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-10"
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

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setCurrentIndex(0);
            }}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === category
              ? "bg-gradient-to-r from-green-500/30 to-cyan-500/30 text-green-300 border-green-400"
              : "bg-transparent text-slate-400 border-slate-600 hover:border-green-400 hover:text-green-300"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Scroll Arrows */}
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center">
        <button
          onClick={scrollLeft}
          className="absolute left-4 sm:left-12 z-10 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-green-300 shadow-md"
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Single Card View */}
        <div className="w-full px-6 sm:px-24">
          {filteredProjects.length > 0 && (
            <motion.div
              key={currentIndex}
              className="mx-auto max-w-md md:max-w-xl w-full h-[500px] bg-slate-800 border border-slate-700/30 rounded-3xl p-6 relative overflow-hidden shadow-xl flex flex-col"
              whileHover={{ scale: 1.02 }}
              onMouseEnter={() => setHoveredIndex(currentIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Background hover effect */}
              {hoveredIndex === currentIndex && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-cyan-500/5 to-blue-500/5 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              {/* Image */}
              <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-2xl bg-slate-900/50">
                <img
                  src={filteredProjects[currentIndex].image}
                  alt={filteredProjects[currentIndex].title}
                  className="w-full h-full object-cover object-center absolute inset-0 z-10 rounded-2xl border border-slate-600/50"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "";
                    e.target.style.display = "none";
                    const fallback = e.target.nextElementSibling;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div className="absolute inset-0 hidden items-center justify-center bg-slate-700/50 rounded-2xl border border-slate-600/50 z-10">
                  <div className="text-slate-400 text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-slate-600/50 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-xs">Image unavailable</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent break-words">
                  {isValidUrl(filteredProjects[currentIndex].link) ? (
                    <a href={filteredProjects[currentIndex].link} target="_blank" rel="noopener noreferrer">
                      {filteredProjects[currentIndex].title}
                    </a>
                  ) : (
                    <span>{filteredProjects[currentIndex].title}</span>
                  )}
                </h2>

                <div className="h-16 mb-4">
                  <p className="text-slate-300 text-sm leading-relaxed break-words overflow-hidden">
                    {filteredProjects[currentIndex].description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {filteredProjects[currentIndex].technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs rounded-full px-3 py-1 font-medium border border-green-500/20 text-green-300 backdrop-blur-sm whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  {isValidUrl(filteredProjects[currentIndex].link) ? (
                    <a
                      href={filteredProjects[currentIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 rounded-full text-xs font-medium bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 text-green-300 hover:from-green-500/30 hover:to-cyan-500/30 transition-all"
                    >
                      View Project
                    </a>
                  ) : (
                    <span
                      className="inline-block px-4 py-2 rounded-full text-xs font-medium bg-slate-700/50 border border-slate-600/50 text-slate-400 cursor-not-allowed"
                      title="Project link unavailable"
                    >
                      View Project
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-4 sm:right-12 z-10 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-green-300 shadow-md"
          disabled={currentIndex === filteredProjects.length - 1}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {filteredProjects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex
              ? "bg-green-400 scale-125"
              : "bg-slate-600"
              }`}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
