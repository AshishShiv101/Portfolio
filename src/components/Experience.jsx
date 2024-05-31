import { EXPERIENCES } from '../constants/index';
import { motion } from "framer-motion"

const Experience = () => {
  return (
    <div id='exp' className='pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{duration: 0.5}}
        className='bg-gradient-to-r from-gray-600 via-slate-300 to-gray-600 bg-clip-text text-4xl tracking-tight text-transparent my-20 text-center text-4xl'>Exper<span className="bg-gradient-to-r from-green-600 via-green-300 to-cyan-500 bg-clip-text text-4xl tracking-tight text-transparent">
          ience
        </span></motion.h1>
      <div className='mx-auto max-w-4xl'>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-col lg:flex-row lg:justify-between">
            <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{duration: 1}}
              className="lg:w-1/4 flex-shrink-0 text-center lg:text-left">
              <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
            </motion.div>
            <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{duration: 1}} className="lg:w-3/4 lg:pl-8">
              <h6 className='mb-2 font-semibold'>
                {experience.role} - <span className='text-sm text-green-600'>{experience.company}</span>
              </h6>
              <p className='mb-4 text-neutral-400'>
                {experience.description}
              </p>
              <div>
                {experience.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className='mr-2 mt-2 inline-block rounded bg-gradient-to-r from-green-600 via-green-300 to-cyan-500 bg-clip-text text-4xl tracking-tight text-transparent px-2 py-1 text-sm font-medium '>{tech}</span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
