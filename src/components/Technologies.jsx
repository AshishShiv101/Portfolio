import { RiReactjsLine } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

import { SiMongodb } from "react-icons/si"; 
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa"; 
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease:"linear",
      repeat: Infinity,
      repeatType:"reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div id="tech" className=" pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{duration:1.5}}
      
        className="my-20 text-center text-4xl">
        <span className="bg-gradient-to-r from-gray-600 via-slate-300 to-gray-600 bg-clip-text text-4xl tracking-tight text-transparent">
          Techn
        </span>
        <span className="bg-gradient-to-r from-green-600 via-green-300 to-cyan-500 bg-clip-text text-4xl tracking-tight text-transparent">
          ologies
        </span>
      </motion.h1>
      <motion.div whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 p-4">
          <IoLogoFirebase className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 p-4">
          <FaPython className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"  className="rounded-2xl border-4 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
