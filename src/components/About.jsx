import aboutImg from '../assets/about.jpeg';
import { ABOUT_TEXT, HERO_CONTENT } from '../constants';
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto px-4 py-16 md:py-24"
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-gradient-to-r from-gray-600 via-slate-300 to-gray-600 bg-clip-text text-transparent text-4xl md:text-5xl font-bold tracking-tight text-center mb-16"
      >
        About <span className="bg-gradient-to-r from-green-600 via-green-300 to-cyan-500 bg-clip-text text-transparent">Me</span>
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-2/5"
        >
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={aboutImg}
              alt="About me"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-3/5"
        >
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              My <span className="bg-gradient-to-r from-green-600 via-green-300 to-cyan-500 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="font-light tracking-wider text-lg leading-relaxed">
              {ABOUT_TEXT}
            </p>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;