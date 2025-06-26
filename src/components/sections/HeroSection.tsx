
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Download, ArrowDown, Code, Terminal, ExternalLink } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [showTerminal, setShowTerminal] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTerminal(false);
    }, 5000); // Show for 5 seconds as requested

    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/perumal-hacker', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/perumal-s-dev', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:perumal.infonet@gmail.com', label: 'Email' }
  ];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/lovable-uploads/Perumal_Resume.pdf';
    link.download = 'Perumal Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-800">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating code elements with enhanced styling */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-blue-500/30 dark:text-green-500/30 text-xs md:text-sm font-semibold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {['const', 'function', '{}', '[]', '=>', 'async', 'await', 'return', 'class', 'import', 'export', 'useState'][i]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Enhanced Terminal-style introduction */}
          <AnimatePresence>
            {showTerminal && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.8 }}
                className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-xl p-6 font-mono text-left max-w-3xl mx-auto mb-8 shadow-2xl"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">~/perumal-portfolio</span>
                </div>
                <div className="space-y-3 text-sm">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-blue-600 dark:text-green-400"
                  >
                    $ whoami
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-gray-800 dark:text-white"
                  >
                    Perumal S - Programmer and Full Stack Developer
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-blue-600 dark:text-green-400"
                  >
                    $ echo $EXPERTISE
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="text-gray-800 dark:text-white"
                  >
                    MERN Stack | DSA | Problem Solving | 300+ LeetCode
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="text-blue-600 dark:text-green-400"
                  >
                    $ status
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                    className="text-green-600 dark:text-green-400"
                  >
                    ● Active - Building scalable solutions
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced tagline that appears after terminal disappears */}
          <AnimatePresence>
            {!showTerminal && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto mb-8"
              >
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-mono leading-relaxed">
                  Final-year Computer Science Engineering student building scalable software and solving real-world problems.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced main heading with better animation */}
          <div className="space-y-6">
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-mono"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
              }}
            >
              Perumal S
            </motion.h1>
            
            <div className="h-20 md:h-16">
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  2000,
                  'MERN Stack Specialist',
                  2000,
                  'DSA Expert',
                  2000,
                  'Problem Solver',
                  2000,
                  'Software Architect',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 font-mono"
                repeat={Infinity}
              />
            </div>
          </div>

          {/* Enhanced professional badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div 
              className="px-4 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-blue-200 dark:border-green-500/30 text-blue-600 dark:text-green-400 rounded-lg text-sm font-mono flex items-center gap-2 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Code className="w-4 h-4" />
              MERN Stack
            </motion.div>
            <motion.div 
              className="px-4 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-purple-200 dark:border-blue-500/30 text-purple-600 dark:text-blue-400 rounded-lg text-sm font-mono flex items-center gap-2 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Terminal className="w-4 h-4" />
              300+ LeetCode
            </motion.div>
            <motion.div 
              className="px-4 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-indigo-200 dark:border-purple-500/30 text-indigo-600 dark:text-purple-400 rounded-lg text-sm font-mono shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              DSA Expert
            </motion.div>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-green-600 dark:to-blue-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 hover:from-blue-700 hover:to-purple-700 dark:hover:from-green-700 dark:hover:to-blue-700 font-mono shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ArrowDown className="w-5 h-5" />
            </motion.button>
            
            <motion.a
              href="https://leetcode.com/u/perumalhacks/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-orange-500 dark:border-yellow-500 text-orange-600 dark:text-yellow-400 hover:bg-orange-500 hover:text-white dark:hover:bg-yellow-500 dark:hover:text-black rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 font-mono backdrop-blur-sm shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Terminal className="w-5 h-5" />
              LeetCode Profile
              <ExternalLink className="w-4 h-4" />
            </motion.a>
            
            <motion.button
              onClick={downloadResume}
              className="px-8 py-4 border-2 border-blue-500 dark:border-green-500 text-blue-600 dark:text-green-400 hover:bg-blue-500 hover:text-white dark:hover:bg-green-500 dark:hover:text-black rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 font-mono backdrop-blur-sm shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-green-500/50 transition-all duration-300 group shadow-lg"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-green-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-blue-500 dark:border-green-500 rounded-full flex justify-center shadow-lg">
            <div className="w-1 h-2 bg-blue-500 dark:bg-green-500 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
