import { EXPERIENCES } from '../constants/index';
import { motion } from "framer-motion";

const Experience = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Faster stagger for mobile
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Reduced Y movement for mobile
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="exp" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Section title with gradient animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-8 sm:mb-12 lg:mb-16 text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
          <span className="bg-gradient-to-r from-gray-400 via-slate-300 to-gray-400 bg-clip-text text-transparent">
            Exper
          </span>
          <span className="bg-gradient-to-r from-green-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
            ience
          </span>
        </h2>
        <div className="mx-auto w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mt-4" />
      </motion.div>

      {/* Timeline container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mx-auto max-w-6xl relative"
      >
        {/* Vertical timeline line - Mobile: left side, Desktop: center */}
        <div className="absolute left-6 sm:left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-500/30 via-teal-400/30 to-cyan-500/30" />

        {/* Experience items */}
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`relative mb-8 sm:mb-12 lg:mb-16 ${
              // Mobile: all items align left, Desktop: alternating
              'flex flex-col lg:flex-row' +
              (index % 2 === 0 ? '' : ' lg:flex-row-reverse')
              }`}
          >
            {/* Timeline dot */}
            <div
              className="absolute left-4 sm:left-6 lg:left-1/2 transform lg:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 z-10"
              style={{ top: "1.5rem" }}
            />

            {/* Mobile layout: stacked vertically */}
            <div className="lg:hidden ml-12 sm:ml-16">
              {/* Content card */}
              <div className="group p-4 sm:p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300 shadow-lg hover:shadow-green-500/10 mb-4">
                {/* Year badge */}
                <div className="inline-block text-xs font-semibold px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r from-green-600/20 to-cyan-600/20 text-green-400 mb-3">
                  {experience.year}
                </div>

                {/* Role and company */}
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                  {experience.role}
                </h3>
                <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
                  {experience.company}
                </h4>

                {/* Description */}
                <p className="mb-4 sm:mb-6 text-slate-300 leading-relaxed text-sm sm:text-base">
                  {experience.description}
                </p>

                {/* Technology tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs rounded-full px-2 sm:px-3 py-1 font-medium bg-gradient-to-r from-green-900/40 to-cyan-900/40 border border-green-500/20 text-green-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image for mobile */}
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <img
                    src={experience.image}
                    alt={experience.company}
                    className="relative w-40 h-40 sm:w-48 sm:h-48 object-contain rounded-xl sm:rounded-2xl shadow-xl border-2 border-slate-700/50 group-hover:border-green-500/30 transition-all duration-300"
                  />
                </motion.div>
              </div>
            </div>

            {/* Desktop layout: side by side */}
            <div className={`hidden lg:flex flex-1 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
              <div className="group p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300 shadow-lg hover:shadow-green-500/10 w-full">
                {/* Year badge */}
                <div className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-green-600/20 to-cyan-600/20 text-green-400 mb-3">
                  {experience.year}
                </div>

                {/* Role and company */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                  {experience.role}
                </h3>
                <h4 className="text-lg font-medium mb-4 bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
                  {experience.company}
                </h4>

                {/* Description */}
                <p className="mb-6 text-slate-300 leading-relaxed">
                  {experience.description}
                </p>

                {/* Technology tags */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs rounded-full px-3 py-1 font-medium bg-gradient-to-r from-green-900/40 to-cyan-900/40 border border-green-500/20 text-green-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop image area */}
            <div className="hidden lg:flex flex-1 items-center justify-center py-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <img
                  src={experience.image}
                  alt={experience.company}
                  className="relative w-60 h-60 object-contain rounded-2xl shadow-xl border-2 border-slate-700/50 group-hover:border-green-500/30 transition-all duration-300"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;