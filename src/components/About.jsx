import aboutImg from '../assets/about.jpeg';
import { HERO_CONTENT } from '../constants';
import { motion } from "framer-motion"

const About = () => {
  return (
    <div id='about' className='s pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{duration:0.5}} className="bg-gradient-to-r from-gray-600 via-slate-300 to-gray-600 bg-clip-text text-4xl tracking-tight text-transparent my-20 text-center text-4xl">
        About <span className='bg-gradient-to-r from-green-600 via-green-300 to-cyan-500 bg-clip-text text-4xl tracking-tight text-transparent'>Me</span>
      </motion.h1>
      <div className="flex flex-wrap lg:flex-nowrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:flex lg:justify-start">
          <img src={aboutImg} alt="about" className='rounded-lg max-w-full h-auto lg:max-w-md' />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{duration:0.5}}
          className="w-full lg:w-1/2 lg:pl-8">
          <div className='pr-10 flex flex-col items-center lg:items-start'>
            <p className='my-2 max-w-xl py-6 font-light tracking-wider'>
              {HERO_CONTENT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
