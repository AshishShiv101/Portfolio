import { EXPERIENCES } from '../constants/index';
import { motion } from "framer-motion";

const Experience = () => {
  // Animation variants for staggered animations
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

  return (
    <section id="exp" className="py-20 relative overflow-hidden">
      {/* Section title with gradient animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-5xl font-bold mb-2">
          <span className="bg-gradient-to-r from-gray-400 via-slate-300 to-gray-400 bg-clip-text text-transparent">
            Exper
          </span>
          <span className="bg-gradient-to-r from-green-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
            ience
          </span>
        </h2>
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mt-4" />
      </motion.div>

      {/* Timeline container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-5xl relative"
      >
        {/* Vertical timeline line */}
        <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 w-px h-full bg-gradient-to-b from-green-500/30 via-teal-400/30 to-cyan-500/30 hidden lg:block" />

        {/* Experience items */}
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`flex flex-col mb-16 lg:mb-24 relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 hidden lg:block"
              style={{ top: "2rem" }} />

            {/* Content area */}
            <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
              <div className="group p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300 shadow-lg hover:shadow-green-500/10">
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

            {/* Image area */}
            <div className="flex-1 flex items-center justify-center py-6">
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