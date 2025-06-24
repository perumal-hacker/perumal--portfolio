
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce App',
      description: 'Full-stack e-commerce platform with JWT authentication, 50+ product listings, and dynamic shopping cart functionality.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Stripe'],
      github: 'https://github.com/perumal-hacker/ecommerce-app',
      demo: 'https://demo-ecommerce.vercel.app',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'MERN Chat App',
      description: 'Real-time messaging application with MongoDB chat history, socket.io integration, and responsive design.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js'],
      github: 'https://github.com/perumal-hacker/mern-chat',
      demo: 'https://chat-app-demo.vercel.app',
      gradient: 'from-green-500 to-blue-600'
    },
    {
      title: 'CRUD User Management',
      description: 'Comprehensive user management system with RESTful API, supporting 100+ user records with full CRUD operations.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
      github: 'https://github.com/perumal-hacker/crud-app',
      demo: 'https://crud-demo.vercel.app',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'Chrome Extension',
      description: 'Productivity extension with CSS injection for toggling between Dark and Light modes across websites.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Chrome APIs'],
      github: 'https://github.com/perumal-hacker/chrome-theme-toggle',
      demo: null,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Snake Game',
      description: 'Classic Snake game implementation with JavaScript, featuring local storage for high scores and smooth animations.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Canvas API'],
      github: 'https://github.com/perumal-hacker/snake-game',
      demo: 'https://snake-game-demo.vercel.app',
      gradient: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            problem-solving, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl glass glass-dark p-6 h-full">
                {/* Project gradient header */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors ml-auto"
                      >
                        Demo
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more projects link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/perumal-hacker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 font-medium"
          >
            View More Projects on GitHub
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
