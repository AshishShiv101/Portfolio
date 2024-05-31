import { CONTACT } from "../constants"
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-gray-600 via-slate-300 to-gray-600 bg-clip-text text-4xl tracking-tight text-transparent my-10 text-center"
      >
        Get in <span className="bg-gradient-to-r from-green-600 via-green-300 to-cyan-500 bg-clip-text text-4xl tracking-tight text-transparent">
          Touch
        </span>
      </motion.h1>
      <div className='text-center tracking-tighter'>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          href={`mailto:${CONTACT.email}`}
          className="border-b"
        >
          {CONTACT.email}
        </motion.a>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
          href="https://www.linkedin.com/in/ashish-s-a5273a22b/"
          className='block text-white py-2 px-4 mx-4 hover:text-blue-500'
        >
          <FaLinkedin className='inline mr-2' />LinkedIn
        </motion.a>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 2.5 }}
          href="https://github.com/AshishShiv101"
          className='block text-white py-2 px-4 mx-4 hover:text-green-500'
        >
          <FaGithub className='inline mr-2' />GitHub
        </motion.a>
      </div>
    </div>
  )
}

export default Contact
