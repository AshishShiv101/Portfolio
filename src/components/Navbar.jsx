import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='m-8 flex flex-shrink-0 items-center'>
        <img src={logo} className='h-30 w-36' alt='Logo' />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl lg:hidden'>
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:flex lg:items-center lg:justify-center lg:gap-4 lg:text-1xl`}
      >
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-transparent p-4 w-full`}>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={900}
            className='block text-white py-2 px-4 mx-4 hover:bg-green-500 hover:bg-opacity-25 cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-600 hover:via-green-300 hover:to-cyan-500'
            onClick={() => setIsOpen(false)}
          >
            About Me
          </ScrollLink>
          <ScrollLink
            to="tech"
            spy={true}
            smooth={true}
            duration={900}
            className='block text-white py-2 px-4 mx-4 hover:bg-green-500 hover:bg-opacity-25 cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-600 hover:via-green-300 hover:to-cyan-500'
            onClick={() => setIsOpen(false)}
          >
            Technologies
          </ScrollLink>
          <ScrollLink
            to="exp"
            spy={true}
            smooth={true}
            duration={900}
            className='block text-white py-2 px-4 mx-4 hover:bg-green-500 hover:bg-opacity-25 cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-600 hover:via-green-300 hover:to-cyan-500'
            onClick={() => setIsOpen(false)}
          >
            Experience
          </ScrollLink>
        
        </div>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          duration={900}
          className='hidden lg:inline m-4 p-2 lg:bg-transparent lg:text-current lg:hover:text-transparent lg:hover:bg-clip-text lg:hover:bg-gradient-to-r lg:hover:from-green-600 lg:hover:via-green-300 lg:hover:to-cyan-500 cursor-pointer'
        >
          About Me
        </ScrollLink>
        <ScrollLink
          to="tech"
          spy={true}
          smooth={true}
          duration={900}
          className='hidden lg:inline m-4 p-2 lg:bg-transparent lg:text-current lg:hover:text-transparent lg:hover:bg-clip-text lg:hover:bg-gradient-to-r lg:hover:from-green-600 lg:hover:via-green-300 lg:hover:to-cyan-500 cursor-pointer'
        >
          Technologies
        </ScrollLink>
        <ScrollLink
          to="exp"
          spy={true}
          smooth={true}
          duration={900}
          className='hidden lg:inline m-4 p-2 lg:bg-transparent lg:text-current lg:hover:text-transparent lg:hover:bg-clip-text lg:hover:bg-gradient-to-r lg:hover:from-green-600 lg:hover:via-green-300 lg:hover:to-cyan-500 cursor-pointer'
        >
          Experience
        </ScrollLink>
       
      </div>
    </nav>
  );
};

export default Navbar;
