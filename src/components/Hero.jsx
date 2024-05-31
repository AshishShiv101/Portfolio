import React from 'react';
import { HERO_CONTENT } from '../constants';
import profile from '../assets/Profile.jpeg';
import { motion } from "framer-motion"
const container = (delay) => ({
  hidden: {
    x: -100, opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className='lg:mb-35'>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{duration:1.5}}
        className='flex flex-wrap lg:flex-nowrap'>
        <div className='w-full lg:w-1/2 lg:pl-8'>
          <div className='pr-10 flex flex-col items-center lg:items-start'>
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='bg-gradient-to-r from-gray-600 via-slate-300 to-gray-600 bg-clip-text text-4xl tracking-tight text-transparent pb-16 text-3xl font-thin tracking-tight lg:mt-16 lg:text-5xl'>
              Ashish Shiv
            </motion.h1>
            <motion.span
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='bg-gradient-to-r from-green-600 via-green-300 to-cyan-500 bg-clip-text text-4xl tracking-tight text-transparent'>
              Engineer
            </motion.span>
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='my-2 max-w-xl py-6 font-light tracking-tighter'>
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:flex lg:justify-end lg:items-center'>
          <motion.img
              initial={{x:100,opacity:0}}
            animate={{ x: 0, opacity: 1 }}
            transition={{duration: 1, delay:1.2}}
            src={profile}
            alt='Profile'
            className='rounded-lg max-w-full h-auto lg:max-w-xs lg:h-4/5 lg:mr-5'
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
