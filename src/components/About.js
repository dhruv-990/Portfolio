import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Passionate about <span className="gradient-text">Technology & Innovation</span></h3>
            <p>I'm a dedicated Computer Science Engineering student at UPES Dehradun with a strong foundation in software development and cloud technologies.</p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
