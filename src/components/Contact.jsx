import { CONTACT } from "../constants";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Section title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-12"
      >
        <span className="bg-gradient-to-r from-gray-400 via-slate-300 to-gray-400 bg-clip-text text-transparent">
          Get in
        </span>
        <span className="bg-gradient-to-r from-green-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
          Touch
        </span>
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mt-4" />
      </motion.h1>

      {/* Contact card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-lg mx-auto p-8 bg-slate-800/30 backdrop-blur-md rounded-2xl border border-slate-700/50 shadow-xl hover:shadow-green-500/10 transition-all duration-300"
      >
        {/* Contact details */}
        <div className="space-y-6 text-center">
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 text-slate-300 hover:text-green-400 transition-colors">
            <FaMapMarkerAlt className="text-xl" />
            <p>{CONTACT.address}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 text-slate-300 hover:text-green-400 transition-colors">
            <FaPhone className="text-xl" />
            <a href={`tel:${CONTACT.phoneNo}`} className="hover:underline">
              {CONTACT.phoneNo}
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 text-slate-300 hover:text-green-400 transition-colors">
            <FaEnvelope className="text-xl" />
            <a href={`mailto:${CONTACT.email}`} className="hover:underline">
              {CONTACT.email}
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-6 mt-8">
            <motion.a
              href="https://www.linkedin.com/in/ashish-s-a5273a22b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full border border-blue-500/30 text-blue-400 hover:text-blue-300 hover:border-blue-500/50 transition-all duration-300"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </motion.a>

            <motion.a
              href="https://github.com/AshishShiv101"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600/20 to-cyan-600/20 rounded-full border border-green-500/30 text-green-400 hover:text-green-300 hover:border-green-500/50 transition-all duration-300"
            >
              <FaGithub className="text-xl" />
              GitHub
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 