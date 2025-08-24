import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category card">
            <h3>Languages</h3>
            <div className="skills-list">
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">Python</div>
              <div className="skill-item">C++</div>
            </div>
          </div>
          <div className="skill-category card">
            <h3>Web Development</h3>
            <div className="skills-list">
              <div className="skill-item">React.js</div>
              <div className="skill-item">Node.js</div>
              <div className="skill-item">Express.js</div>
            </div>
          </div>
          <div className="skill-category card">
            <h3>Cloud & DevOps</h3>
            <div className="skills-list">
              <div className="skill-item">AWS</div>
              <div className="skill-item">Docker</div>
              <div className="skill-item">Kubernetes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
