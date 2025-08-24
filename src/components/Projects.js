import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode, FiMonitor, FiTool } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Learning Path Automation Tool",
      description: "AI-powered tool that recommends personalized learning paths using GitHub repositories and YouTube tutorials based on user input. Built with Python, Gemini API, and YouTube API.",
      image: "/project-placeholder-1.jpg",
      technologies: ["Python", "Gemini API", "YouTube API", "GitHub API"],
      category: "AI/ML",
      links: {
        github: "https://github.com/dhruv-990/Learner_AIagent",
        demo: "#"
      },
      features: [
        "Personalized learning recommendations",
        "GitHub repository analysis",
        "YouTube tutorial integration",
        "User preference tracking"
      ]
    },
    {
      id: 2,
      title: "CI/CD Dashboard Viewer",
      description: "Live dashboard for visualizing CI/CD pipelines with real-time monitoring. Integrated with GitHub Actions and Docker for seamless deployment workflows.",
      image: "/project-placeholder-2.jpg",
      technologies: ["React", "GitHub Actions", "Docker", "Node.js"],
      category: "DevOps",
      links: {
        github: "https://github.com/dhruv-990/ci-cd-dashboard",
        demo: "https://ci-cd-dash.netlify.app"
      },
      features: [
        "Real-time pipeline monitoring",
        "GitHub Actions integration",
        "Docker containerization",
        "Responsive dashboard design"
      ]
    },
    {
      id: 3,
      title: "Site Sentry - Browser Plugin",
      description: "Chrome extension for monitoring user browsing patterns using local storage and Chrome APIs. Provides insights into website usage and productivity tracking.",
      image: "/project-placeholder-3.jpg",
      technologies: ["JavaScript", "Chrome APIs", "Local Storage", "HTML/CSS"],
      category: "Browser Extension",
      links: {
        github: "https://github.com/dhruv-990/site-sentry_project",
        demo: "#"
      },
      features: [
        "Browsing pattern analysis",
        "Local data storage",
        "Privacy-focused design",
        "Real-time tracking"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'AI/ML': return <FiCode />;
      case 'DevOps': return <FiTool />;
      case 'Browser Extension': return <FiMonitor />;
      case 'Full Stack': return <FiCode />;
      default: return <FiCode />;
    }
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="projects-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A showcase of my technical projects spanning AI/ML, DevOps, and full-stack development
        </motion.p>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <span className="project-icon">{getCategoryIcon(project.category)}</span>
                </div>
                <div className="project-category">
                  <span>{project.category}</span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.links.github !== "#" && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub />
                      View Code
                    </motion.a>
                  )}
                  {project.links.demo !== "#" && (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Want to see more?</h3>
          <p>Check out my GitHub for additional projects and contributions</p>
          <motion.a
            href="https://github.com/dhruv-990"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub />
            Visit GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
