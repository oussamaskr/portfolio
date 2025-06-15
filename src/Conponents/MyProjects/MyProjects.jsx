import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import your actual project images
import adventureImage from "../../assets/poject images/club adventure.jpg"
import ecommerceImage from "../../assets/poject images/E-commerce.jpg"
import dashboardImage from "../../assets/poject images/Admin-Dashboard.webp"
import RealEstate from "../../assets/poject images/real-estate.jpg"
import clinic from "../../assets/poject images/clinic-LandingPage.webp"
import recipe from "../../assets/poject images/Capture d’écran 2025-05-29 102157.jpg"
import perfumeStore from "../../assets/poject images/perfume store.jpg"
import hyundaipage from "../../assets/poject images/Hyundai.webp"
import "../MyProjects/myprojects.css";

const MyProjects = () => {
const projects = [

    {
title: "Hyundai Page",
description: "A modern and responsive web page showcasing Hyundai vehicles, features for car enthusiasts buyers.",

    tags: ["React", "Tailwind", "Framer Motion","React Router"],
    github: "#",
    liveDemo: "https://hyundaidz.netlify.app/",
    image: hyundaipage,

  },
  {
    title: "E-Commerce Platform",
    description: "An online fashion store with product listings, cart functionality, and responsive design.",
    tags: ["React", "React Hooks", "Material UI", "Axios","React Router"],
    github: "#",
    liveDemo: "https://fashion-hub-zhcq.vercel.app/",
    image: ecommerceImage,

  },
  {
    title: "Recipe Application",
    description: "Interactive recipe finder with search functionality and animated transitions.",
    tags: ["React", "Tailwind CSS", "Redux", "Framer Motion","React Router"],
    github: "#",
    liveDemo: "https://recipebook94.netlify.app/",
    image: recipe,

  },
  {
    title: "Real Estate Platform",
    description: "Modern property listing platform with advanced search and interactive UI.",
    tags: ["React","React Hooks" , "Material UI", "Framer Motion", "Axios","React Router"],
    github: "#",
    liveDemo: "https://estate-beta-vert.vercel.app/",
    image: RealEstate,

  },
  {
    title: "Adventure Club",
    description: "Outdoor activity booking platform with immersive animations and engaging UI.",
    tags: ["React", "CSS3", "Framer Motion", "React Router"],
    github: "#",
    liveDemo: "https://club-adventure-git-main-oussamaskrs-projects.vercel.app/",
    image: adventureImage,

  },
  {
    title: "Admin Dashboard",
    description: "Comprehensive analytics dashboard with data visualization and management tools.",
    tags: ["React", "Chart.js", "Framer Motion","React Router"],
    github: "#",
    liveDemo: "https://oussamaskr.github.io/dashboard",
    image: dashboardImage,

  },
  {
    title: "Healthcare Clinic",
    description: "Modern medical website with appointment scheduling and responsive design.",
    tags: ["React", "CSS3", "Framer Motion"],
    github: "#",
    liveDemo: "https://oussamaskr.github.io/clinic/",
    image: clinic,

  },
    {
    title: "Perfume Store",
    description: "Modern medical website with appointment scheduling and responsive design.",
    tags: ["React", "Tailwind", "Framer Motion","React Router"],
    github: "#",
    liveDemo: "https://alnoorperfume.netlify.app/",
    image: perfumeStore,

  }
];

  return (
    <section className="projects-section" id="projects">
  
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          My <span>Projects</span>
        </motion.h2>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }}
          className="projects-grid"
        >
          {projects.map((project, index) => (
            <SwiperSlide className='swiper-slide' key={index}>
              <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy"
                  />
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                        <FaGithub />
                      </a>
                    )}
                    {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MyProjects;