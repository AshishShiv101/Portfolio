import { CONTACT } from "../constants";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

// Animation variants for the contact section
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15 // Faster for mobile
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 }, // Reduced movement for mobile
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Subtle floating animation for cards (reduced for mobile performance)
const floatingAnimation = {
  y: [0, -5, 0],
  transition: {
    duration: 8,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  }
};

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Section title with animated underline */}
      <div className="relative z-10 mb-12 sm:mb-16 lg:mb-20">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center"
        >
          <span className="bg-gradient-to-r from-gray-200 via-slate-300 to-gray-200 bg-clip-text text-transparent">
            Get in
          </span>
          <span className="bg-gradient-to-r from-green-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent ml-2 sm:ml-3">
            Touch
          </span>
        </motion.h1>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "80px", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full mx-auto mt-4 sm:w-24 lg:w-32"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-slate-400 text-center mt-4 sm:mt-6 max-w-sm sm:max-w-md mx-auto text-sm sm:text-base px-4"
        >
          Have a project in mind or looking for someone to hire? Feel free to reach out!
        </motion.p>
      </div>

      {/* Main contact content */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-center justify-center">
        {/* Contact methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full lg:w-1/2 max-w-lg"
        >
          {/* Contact card */}
          <motion.div
            animate={floatingAnimation}
            className="p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-slate-700/50 backdrop-blur-md shadow-xl hover:shadow-green-500/10 transition-all duration-300 relative overflow-hidden"
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 p-0.5 rounded-xl sm:rounded-2xl overflow-hidden">
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-transparent via-green-500/20 to-cyan-500/20 animate-pulse" />
            </div>

            <div className="relative z-10">
              <motion.h3
                variants={itemVariants}
                className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent"
              >
                Connect With Me
              </motion.h3>

              {/* Contact items */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300"
                >
                  <div className="p-2 sm:p-3 rounded-full bg-gradient-to-br from-slate-800 to-slate-700 flex-shrink-0">
                    <FaMapMarkerAlt className="text-lg sm:text-xl text-green-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm text-slate-400 mb-1">Location</h4>
                    <p className="text-sm sm:text-base text-slate-200 break-words">{CONTACT.address}</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300"
                >
                  <div className="p-2 sm:p-3 rounded-full bg-gradient-to-br from-slate-800 to-slate-700 flex-shrink-0">
                    <FaPhone className="text-lg sm:text-xl text-cyan-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm text-slate-400 mb-1">Phone</h4>
                    <a
                      href={`tel:${CONTACT.phoneNo}`}
                      className="text-sm sm:text-base text-slate-200 hover:text-cyan-400 transition-colors break-all"
                    >
                      {CONTACT.phoneNo}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300"
                >
                  <div className="p-2 sm:p-3 rounded-full bg-gradient-to-br from-slate-800 to-slate-700 flex-shrink-0">
                    <FaEnvelope className="text-lg sm:text-xl text-teal-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm text-slate-400 mb-1">Email</h4>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-sm sm:text-base text-slate-200 hover:text-teal-400 transition-colors break-all"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex flex-col items-center justify-center max-w-lg"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 lg:mb-10 text-center bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Find Me On
          </h3>

          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full">
            <motion.a
              href="https://www.linkedin.com/in/ashish-s-a5273a22b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between p-4 sm:p-5 rounded-lg sm:rounded-xl border border-blue-600/30 bg-gradient-to-r from-blue-900/10 to-blue-700/10 hover:from-blue-900/20 hover:to-blue-700/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                <div className="p-2 sm:p-3 rounded-full bg-blue-900/50 group-hover:bg-blue-800/50 transition-colors flex-shrink-0">
                  <FaLinkedin className="text-xl sm:text-2xl text-blue-400" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-slate-200 text-sm sm:text-base">LinkedIn</p>
                  <p className="text-xs sm:text-sm text-slate-400">Professional network</p>
                </div>
              </div>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                className="text-blue-400 text-lg sm:text-xl flex-shrink-0 ml-2"
              >
                →
              </motion.div>
            </motion.a>

            <motion.a
              href="https://github.com/AshishShiv101"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between p-4 sm:p-5 rounded-lg sm:rounded-xl border border-green-600/30 bg-gradient-to-r from-green-900/10 to-green-700/10 hover:from-green-900/20 hover:to-green-700/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                <div className="p-2 sm:p-3 rounded-full bg-green-900/50 group-hover:bg-green-800/50 transition-colors flex-shrink-0">
                  <FaGithub className="text-xl sm:text-2xl text-green-400" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-slate-200 text-sm sm:text-base">GitHub</p>
                  <p className="text-xs sm:text-sm text-slate-400">Code repository</p>
                </div>
              </div>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                className="text-green-400 text-lg sm:text-xl flex-shrink-0 ml-2"
              >
                →
              </motion.div>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Footer message */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-slate-500 mt-12 sm:mt-16 lg:mt-20 text-xs sm:text-sm px-4"
      >
        © {new Date().getFullYear()} - Looking forward to connecting with you
      </motion.p>
    </section>
  );
};

export default Contact;