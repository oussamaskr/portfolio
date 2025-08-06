import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from "../../assets/logo/logoo.png"
import "../NavBar/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Update active link based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) observer.observe(element);
      
      });
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, { threshold: 0.15});
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        
      });
      setActiveLink(sectionId);
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Skills', section: 'skills' },
    { name: 'Projects', section: 'projects' },
    { name: 'Contact', section: 'contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="nav-container">
        {/* Logo */}
        <a 
          href="#home" 
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <img src={logo} width="200" alt="Logo" />
        </a>

        {/* Navigation */}
        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.section);
              }}
              className={`nav-link ${activeLink === item.section ? 'active' : ''}`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="menu-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;