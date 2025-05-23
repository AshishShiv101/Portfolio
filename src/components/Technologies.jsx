import { RiReactjsLine } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb, SiJavascript } from "react-icons/si";
import { FaPython, FaNodeJs, FaApple } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -5 },
  animate: {
    y: [5, -5],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const hoverEffect = {
  scale: 1.05, // Reduced for mobile
  transition: { duration: 0.3, ease: "easeOut" },
};

const Technologies = () => {
  const technologies = [
    { icon: <RiReactjsLine className="text-3xl sm:text-4xl lg:text-6xl" />, color: "text-cyan-400", name: "React", duration: 2.5 },
    { icon: <IoLogoFirebase className="text-3xl sm:text-4xl lg:text-6xl" />, color: "text-orange-500", name: "Firebase", duration: 3 },
    { icon: <SiMongodb className="text-3xl sm:text-4xl lg:text-6xl" />, color: "text-green-600", name: "MongoDB", duration: 2 },
    { icon: <FaPython className="text-3xl sm:text-4xl lg:text-6xl" />, color: "text-yellow-400", name: "Python", duration: 6 },
    { icon: <FaNodeJs className="text-3xl sm:text-4xl lg:text-6xl" />, color: "text-green-500", name: "Node.js", duration: 5 },
    { icon: <FaApple className="text-3xl sm:text-4xl lg:text-6xl" />, color: "text-gray-200", name: "iOS", duration: 4 },
    { icon: <SiJavascript className="text-3xl sm:text-4xl lg:text-6xl" />, color: "text-yellow-300", name: "JavaScript", duration: 3.5 },
  ];

  return (
    <div id="tech" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16 lg:mb-20"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
          <span className="bg-gradient-to-r from-gray-300 via-slate-200 to-gray-300 bg-clip-text text-transparent">
            Techn
          </span>
          <span className="bg-gradient-to-r from-green-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            ologies
          </span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-xl sm:max-w-2xl mx-auto px-4">
          The tools and technologies I work with
        </p>
      </motion.div>

      <div className="flex flex-col items-center">
        {/* First row - 4 technologies for desktop, 2x2 grid for mobile */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-sm sm:max-w-2xl lg:max-w-4xl w-full"
        >
          {technologies.slice(0, 4).map((tech, index) => (
            <motion.div
              key={index}
              variants={iconVariants(tech.duration)}
              initial="initial"
              animate="animate"
              whileHover={hoverEffect}
              whileTap={{ scale: 0.95 }} // Added tap effect for mobile
              className="flex flex-col items-center"
            >
              <div className={`rounded-lg sm:rounded-xl lg:rounded-2xl border border-opacity-20 p-3 sm:p-4 lg:p-6 mb-2 bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg ${tech.color} w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center`}>
                {tech.icon}
              </div>
              <span className="text-gray-300 font-medium text-xs sm:text-sm mt-1 sm:mt-2 text-center">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Second row - 3 technologies */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-xs sm:max-w-lg lg:max-w-3xl w-full mt-4 sm:mt-5 lg:mt-6"
        >
          {technologies.slice(4).map((tech, index) => (
            <motion.div
              key={index + 4}
              variants={iconVariants(tech.duration)}
              initial="initial"
              animate="animate"
              whileHover={hoverEffect}
              whileTap={{ scale: 0.95 }} // Added tap effect for mobile
              className="flex flex-col items-center"
            >
              <div className={`rounded-lg sm:rounded-xl lg:rounded-2xl border border-opacity-20 p-3 sm:p-4 lg:p-6 mb-2 bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg ${tech.color} w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center`}>
                {tech.icon}
              </div>
              <span className="text-gray-300 font-medium text-xs sm:text-sm mt-1 sm:mt-2 text-center">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-8 sm:mt-12 lg:mt-16 text-center px-4"
      >
        <p className="text-gray-400 text-xs sm:text-sm">
          And many more tools in my developer toolkit
        </p>
      </motion.div>
    </div>
  );
};

export default Technologies;