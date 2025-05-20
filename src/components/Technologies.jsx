import { RiReactjsLine } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb, SiJavascript } from "react-icons/si";
import { FaPython, FaNodeJs, FaApple } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const hoverEffect = {
  scale: 1.1,
  transition: { duration: 0.3, ease: "easeOut" },
};

const Technologies = () => {
  const technologies = [
    { icon: <RiReactjsLine className="text-6xl" />, color: "text-cyan-400", name: "React", duration: 2.5 },
    { icon: <IoLogoFirebase className="text-6xl" />, color: "text-orange-500", name: "Firebase", duration: 3 },
    { icon: <SiMongodb className="text-6xl" />, color: "text-green-600", name: "MongoDB", duration: 2 },
    { icon: <FaPython className="text-6xl" />, color: "text-yellow-400", name: "Python", duration: 6 },
    { icon: <FaNodeJs className="text-6xl" />, color: "text-green-500", name: "Node.js", duration: 5 },
    { icon: <FaApple className="text-6xl" />, color: "text-gray-200", name: "iOS", duration: 4 },
    { icon: <SiJavascript className="text-6xl" />, color: "text-yellow-300", name: "JavaScript", duration: 3.5 },
  ];

  return (
    <div id="tech" className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-gray-300 via-slate-200 to-gray-300 bg-clip-text text-transparent">
            Techn
          </span>
          <span className="bg-gradient-to-r from-green-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            ologies
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          The tools and technologies I work with
        </p>
      </motion.div>

      <div className="flex flex-col items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-4 gap-6 max-w-4xl"
        >
          {technologies.slice(0, 4).map((tech, index) => (
            <motion.div
              key={index}
              variants={iconVariants(tech.duration)}
              initial="initial"
              animate="animate"
              whileHover={hoverEffect}
              className="flex flex-col items-center"
            >
              <div className={`rounded-2xl border border-opacity-20 p-6 mb-2 bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg ${tech.color}`}>
                {tech.icon}
              </div>
              <span className="text-gray-300 font-medium text-sm mt-2">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 gap-6 max-w-3xl mt-6"
        >
          {technologies.slice(4).map((tech, index) => (
            <motion.div
              key={index + 4}
              variants={iconVariants(tech.duration)}
              initial="initial"
              animate="animate"
              whileHover={hoverEffect}
              className="flex flex-col items-center"
            >
              <div className={`rounded-2xl border border-opacity-20 p-6 mb-2 bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg ${tech.color}`}>
                {tech.icon}
              </div>
              <span className="text-gray-300 font-medium text-sm mt-2">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-400 text-sm">
          And many more tools in my developer toolkit
        </p>
      </motion.div>
    </div>
  );
};

export default Technologies;