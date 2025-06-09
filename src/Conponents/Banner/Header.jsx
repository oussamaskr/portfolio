import React from 'react'
import Navbar from '../NavBar/Navbar'
import { TypeAnimation } from 'react-type-animation';
import { domAnimation, LazyMotion, motion } from 'framer-motion';

import "./header.css"
const Header = () => {
  return (
    <>
 <section className="banner" id="home">
  <Navbar />
  <div className='overlay' aria-hidden="true" />
  
  <LazyMotion features={domAnimation}>
    <div className="banner-content">
      <motion.h1
        className="banner-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span>Sakhri Oussama</span>
      </motion.h1>
      
      <motion.h2
        className="banner-subtitle"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        <TypeAnimation
          sequence={[
            'Frontend Developer...',
            1000,
            'Software Engineer...',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ 
            fontSize: '1.75rem',
            display: 'inline-block',
            color: 'var(--success)'
          }}
          repeat={Infinity}
        />
      </motion.h2>
     
      <motion.p
        className="banner-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        I build exceptional digital experiences with modern web technologies.
      </motion.p>
      
      <motion.div
        className="banner-buttons"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <a href="#projects" className="btn btn-primary" aria-label="View my work projects">
          View My Work
        </a>
        <a href="#contact" className="btn btn-secondary" aria-label="Contact me">
          Contact Me
        </a>
      </motion.div>
    </div>

    <motion.div
      className="banner-image"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 1.2, 
        delay: 1,
        type: "spring",
        stiffness: 50
      }}
    >
      <div className="avatar-placeholder" />
    </motion.div>
  </LazyMotion>
</section>
    </>
  )
}

export default Header