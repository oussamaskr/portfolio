
import './App.css'
import Header from './Conponents/Banner/Header'
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaJava,
  FaPhp,
  FaDatabase,
  

} from 'react-icons/fa';

import { FiSmartphone, FiType} from 'react-icons/fi';
import MyProjects from './Conponents/MyProjects/MyProjects';
import ContactMe from './Conponents/ContactMe/ContactMe';
import { SiTypescript } from 'react-icons/si';

function App() {
const TailwindIcon = () => (
<svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
  <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z"/>
</svg>

);

  const skills = [
    { name: 'HTML5', level: 95, icon: <FaHtml5 /> , percentage:"95%" },
    { name: 'CSS3', level: 90, icon: <FaCss3Alt></FaCss3Alt>,percentage:"90%" },
    { name: 'TailWind', level: 50, icon:  <TailwindIcon />,percentage:"70%" },
    { name: 'JavaScript', level: 85, icon: <FaJs></FaJs>,percentage:"80%" },
    { name: 'TypeScript', level: 55, icon: <SiTypescript />,percentage:"40%" },

    { name: 'React', level: 80, icon: <FaReact/> ,percentage:"75%"},
    { name: 'Java', level: 55, icon: <FaJava />,percentage:"50%" },
    { name: 'Php', level: 55, icon: <FaPhp />,percentage:"45%" },

    { name: 'Sql', level: 65, icon: <FaDatabase />,percentage:"65%" },
    { name: 'Responsive Design', level: 85, icon: <FiSmartphone></FiSmartphone>,percentage:"85%" }
  ];
  return (
    <>
    <Header></Header>



    <section className="about-section" id="about">
      <div className="container-about">
        <h2 className="section-title">About <span>Me</span></h2>
        
        <div className="about-content">
          <motion.div className="about-image"

         initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5}}
          viewport={{ once: true }}

          
           >
            {/* Replace with your image */}
            <div className="image-placeholder"></div>
          </motion.div>
          
          <div className="about-text">
            <h3 className="about-subtitle">Frontend Developer</h3>
            
            <p className="about-description">
              I'm a passionate frontend developer with expertise in React.js and modern JavaScript.
              I specialize in creating responsive, user-friendly web applications with clean,
              efficient code. With a background in design, I bring both technical skills and
              aesthetic sensibility to every project.
            </p>
            
            <div className="about-details">
              <div className="details-column">
                <p><strong>Name:</strong> Sakhri Oussama</p>
                <p><strong>Email:</strong> sakhrioussama94@gmail.com</p>
              
              </div>
              
              <div className="details-column">
                <p><strong>From:</strong> Constantine, Algeria</p>
                <p><strong>Freelance:</strong> Available</p>
                <p><strong>Languages:</strong> English, Arabic, French</p>
              </div>
            </div>
            
            <div className="about-buttons">
              <a href="#contact" className="btn btn-primary">Hire Me</a>
              <a href="/files/Sakhri oussama_cv.pdf" download className="btn btn-secondary">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>







    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">My <span>Skills</span></h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div className="skill-card" key={index}
            
            initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
         
            >
              <div style={{display:"flex",justifyContent:"space-between"}}>
              <div className="skill-header">
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>

              </div>
              <div className='percentage'>
              <h2>{skill.percentage}</h2>
              </div>
              </div>
              <div className="skill-progress">
                <motion.div 

                  initial={{scaleX:0,opacity:0 ,transformOrigin:length}}
                  whileInView={{scaleX:1, opacity:1, }}
                  transition={{ duration: 1.2, delay: 1.6}}
                  viewport={{once:true}}

                  className="progress-bar" 
                  style={{ width: `${skill.level}%` }}
                >
                  <span className="progress-value">{skill.level}%</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>







    <MyProjects></MyProjects>




     <ContactMe />     









    </>
  )
}

export default App
