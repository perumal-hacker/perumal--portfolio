
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Smartphone } from 'lucide-react';

const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, JavaScript, HTML5, CSS3, Tailwind CSS'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Node.js, Express.js, RESTful APIs'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'MongoDB, Mongoose, SQL'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first, Cross-browser compatibility'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-glow" />
              <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center">
                  <Code className="w-32 h-32 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Passionate Full-Stack Developer
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a Computer Science Engineering student with a strong foundation in full-stack web development, 
              particularly with the MERN stack. My journey in programming began with a curiosity about how things work, 
              and has evolved into a passion for solving complex problems through elegant code.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Through hands-on projects and hackathons, I've developed expertise in building scalable web applications, 
              implementing secure authentication systems, and creating intuitive user interfaces. I'm always eager to 
              learn new technologies and contribute to innovative software solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="glass glass-dark p-6 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300"
                >
                  <item.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
