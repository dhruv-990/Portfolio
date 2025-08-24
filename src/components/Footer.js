import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>© {currentYear} Dhruv Dwivedi. 2025</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/dhruv-990" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/dhruv-dwivedi-222626215" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:ddhruv166@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
