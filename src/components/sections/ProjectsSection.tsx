import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Smartphone } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Face Recognition Attendance System',
      description: 'Advanced attendance management system using OpenCV and Python for real-time face recognition. Features automated attendance tracking, employee database management, and comprehensive reporting dashboard.',
      technologies: ['Python', 'OpenCV', 'NumPy', 'Pandas', 'SQLite', 'Tkinter'],
      github: 'https://github.com/perumal-hacker/Face_recogntion_attendence',
      demo: null,
      gradient: 'from-emerald-500 to-teal-600',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800&h=400',
      category: 'AI/ML',
      highlights: ['Face Recognition', 'Real-time Processing', 'Database Integration']
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with JWT authentication, payment integration, and comprehensive admin dashboard. Features 50+ product listings and dynamic shopping cart.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Stripe API'],
      github: 'https://github.com/perumal-hacker/ecommerce-app',
      demo: null,
      gradient: 'from-blue-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800&h=400',
      category: 'Full-Stack',
      highlights: ['JWT Auth', 'Payment Gateway', 'Admin Dashboard']
    },
    {
      title: 'Real-Time Chat Application',
      description: 'MERN stack messaging platform with socket.io integration, real-time messaging, chat history persistence, and responsive design across all devices.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js', 'CSS3'],
      github: 'https://github.com/perumal-hacker/mern-chat',
      demo: null,
      gradient: 'from-green-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800&h=400',
      category: 'Real-Time',
      highlights: ['WebSocket', 'Real-time Messaging', 'Chat History']
    },
    {
      title: 'User Management System',
      description: 'Comprehensive CRUD application with RESTful API design, supporting 100+ user records with advanced filtering, search, and data validation.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Tailwind'],
      github: 'https://github.com/perumal-hacker/crud-app',
      demo: null,
      gradient: 'from-orange-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=400',
      category: 'Backend',
      highlights: ['RESTful API', 'Data Validation', 'Advanced Search']
    },
    {
      title: 'Chrome Theme Extension',
      description: 'Browser extension with CSS injection capabilities for dynamic theme switching. Features dark/light mode toggle across websites with local storage.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Chrome APIs', 'LocalStorage'],
      github: 'https://github.com/perumal-hacker/chrome-theme-toggle',
      demo: null,
      gradient: 'from-purple-500 to-pink-600',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800&h=400',
      category: 'Extension',
      highlights: ['Browser API', 'CSS Injection', 'Theme Switching']
    },
    {
      title: 'Classic Snake Game',
      description: 'JavaScript implementation of the classic Snake game with smooth animations, local storage for high scores, and responsive canvas design.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Canvas API', 'LocalStorage'],
      github: 'https://github.com/perumal-hacker/snake-game',
      demo: null,
      gradient: 'from-yellow-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&q=80&w=800&h=400',
      category: 'Game',
      highlights: ['Canvas Animation', 'High Score System', 'Responsive Design']
    }
  ];

  const getTechIcon = (tech: string) => {
    const icons: { [key: string]: string } = {
      'React': '⚛️',
      'Node.js': '💚',
      'MongoDB': '🍃',
      'JavaScript': '🟨',
      'TypeScript': '💙',
      'Express.js': '🚀',
      'Socket.io': '🔌',
      'JWT': '🔐',
      'Stripe API': '💳',
      'REST API': '🌐',
      'Chrome APIs': '🌍',
      'Canvas API': '🎨',
      'HTML5': '📄',
      'CSS3': '🎨',
      'Tailwind': '💨',
      'LocalStorage': '💾',
      'Python': '🐍',
      'OpenCV': '👁️',
      'NumPy': '🔢',
      'Pandas': '🐼',
      'SQLite': '🗄️',
      'Tkinter': '🖼️'
    };
    return icons[tech] || '⚙️';
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6 font-mono">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-green-400 dark:to-purple-400 mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-mono">
            Showcasing technical expertise through real-world applications and innovative solutions
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
              className="group relative h-full"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-green-500/50 h-full flex flex-col transition-all duration-300 shadow-lg">
                {/* Project gradient header */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />
                
                {/* Category badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-mono">
                    {project.category}
                  </span>
                </div>
                
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 via-white/50 dark:via-gray-900/50 to-transparent" />
                </div>
                
                <div className="relative z-10 p-6 flex flex-col flex-1">
                  {/* Title and Description */}
                  <div className="mb-4 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-green-400 transition-colors font-mono">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm font-mono mb-4">
                      {project.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2 py-1 text-xs bg-blue-100 dark:bg-green-500/20 text-blue-600 dark:text-green-400 rounded border border-blue-200 dark:border-green-500/30 font-mono"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 font-mono">Tech Stack:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-xs font-mono"
                        >
                          <span>{getTechIcon(tech)}</span>
                          <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-blue-500 dark:hover:border-green-500/50 rounded-lg transition-all duration-300 font-mono text-sm flex-1 justify-center"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-green-600 dark:to-blue-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 dark:hover:from-green-700 dark:hover:to-blue-700 transition-all duration-300 font-mono text-sm flex-1 justify-center"
                      >
                        Demo
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 dark:from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-green-600 dark:to-blue-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 dark:hover:from-green-700 dark:hover:to-blue-700 transition-all duration-300 font-mono font-medium text-lg"
          >
            <Github className="w-5 h-5" />
            Explore More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
