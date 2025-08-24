import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const handleDownloadResume = () => {
    // Update this path to match your actual resume file name
    window.open('/resume_dhruv_ (1).pdf', '_blank');
  };

  const handleEmailClick = () => {
    // Try mailto first, fallback to copying email
    const email = 'ddhruv166@gmail.com';
    const mailtoLink = `mailto:${email}`;
    
    // Try to open email client
    window.location.href = mailtoLink;
    
    // Also copy email to clipboard as backup
    navigator.clipboard.writeText(email).then(() => {
      alert('Email copied to clipboard: ' + email);
    }).catch(() => {
      // Fallback if clipboard API fails
      prompt('Copy this email address:', email);
    });
  };

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/dhruv-990', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://linkedin.com/in/dhruv-dwivedi-222626215', label: 'LinkedIn' },
    { icon: <FiMail />, href: '#', onClick: handleEmailClick, label: 'Email' }
  ];

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hi, I'm <span className="gradient-text">Dhruv Dwivedi</span>
            </motion.h1>
            
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Aspiring Software Engineer | Cloud & DevOps Enthusiast
            </motion.p>
            
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              B.Tech Computer Science Engineering student at UPES Dehradun with a passion for 
              building scalable web applications and exploring cloud technologies.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <button className="btn btn-primary" onClick={handleDownloadResume}>
                <FiDownload />
                Download Resume
              </button>
              
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                    aria-label={link.label}
                    onClick={link.onClick}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="image-container">
              <div className="profile-image">
                <div className="image-placeholder">
                  <span>DD</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
