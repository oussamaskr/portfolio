import React, { useState } from 'react';
import "../ContactMe/contact.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    // Clear messages when user starts typing
    if (errorMsg || successMsg) {
      setErrorMsg('');
      setSuccessMsg('');
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || formData.name.length < 3) {
      setErrorMsg("Name must have at least 3 characters");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      setErrorMsg("Please enter a valid email address");
      return false;
    }

    if (!formData.message || formData.message.length < 10) {
      setErrorMsg("Message should be at least 10 characters long");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!validateForm()) {
      setTimeout(() => setErrorMsg(''), 4000);
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace with your EmailJS service details
      await emailjs.send(
        'service_71ylnix',
        'template_ul1vh39',
        formData,
        'MtU8m7yqVp5wByyeW'
      );

      setSuccessMsg("Message sent successfully!");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setErrorMsg("Failed to send message. Please try again later.");
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSuccessMsg('');
        setErrorMsg('');
      }, 4000);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Let's <span>Connect</span>
        </motion.h2>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="contact-subtitle">Reach Me Directly</h3>
            
            <div className="info-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:your.email@example.com">sakhrioussama94@gmail.com</a>
              </div>
            </div>
            
            <div className="info-item">
              <FaPhone className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <a href="tel:+1234567890">0778 30 40 22</a>
              </div>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
                <span className="social-label">LinkedIn</span>
              </a>
              <a href="https://github.com/oussamaskr" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
                <span className="social-label">GitHub</span>
              </a>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <h2>Contact Form</h2>

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="What's the subject?"
                value={formData.subject}
                onChange={handleChange}
              />           
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Write your message here..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>      
            </div>

            <AnimatePresence mode="wait">
              {errorMsg && (
                <motion.p
                  key="error"
                  className="error-msg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {errorMsg}
                </motion.p>
              )}
              {successMsg && (
                <motion.p
                  key="success"
                  className="success-msg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  {successMsg}
                </motion.p>
              )}
            </AnimatePresence>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;