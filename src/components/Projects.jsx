import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"

const projects = () => {
  return (
    <div className='pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{duration:0.5}}className='bg-gradient-to-r from-gray-600 via-slate-300 to-gray-600 bg-clip-text text-4xl tracking-tight text-transparent my-20 text-center text-4xl'>Proj<span className="bg-gradient-to-r from-green-600 via-green-300 to-cyan-500 bg-clip-text text-4xl tracking-tight text-transparent">
          ects
        </span></motion.h1>
          <div>{PROJECTS.map((project,index)=>(
              <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
              <motion.div
              whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{duration:1}}
                className='w-full lg:w-1/4'>
                      <img
                          src={project.image}
                          alt={project.title}
                          height={150}
                          width={150}
                          className='mb-6 rounded'
                      />
                  </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{duration:1}}
                className='w-full max-w-xl lg:w-3/4'>
                      <h6 className='mb-2 font-semibold'>{project.title}</h6>
                      <p className='mb-4 text-neutral-400'>{project.description}</p>
                      {project.technologies.map((tech, index) => (
                          <span key={index} className='mr-2 rounded bg-gradient-to-r from-green-600 via-green-300 to-cyan-500 bg-clip-text text-4xl tracking-tight text-transparent px-2 py-1 text-sm font-medium'>{tech}</span>
                      ))}
                  </motion.div>
              </div>
          ))}
          </div>
    </div>
  )
}

export default projects