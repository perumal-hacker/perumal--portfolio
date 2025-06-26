
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection: React.FC = () => {
  const handleResumeDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Perumal_S_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 dark:bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Perumal S
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 font-mono"
            >
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  2000,
                  'MERN Stack Expert',
                  2000,
                  'Problem Solver',
                  2000,
                  'Tech Innovator',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block"
              />
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-mono"
          >
            Computer Science Engineering student passionate about creating innovative web solutions. 
            Specialized in <span className="text-blue-600 dark:text-green-400 font-semibold">MERN Stack</span> development 
            with expertise in modern JavaScript frameworks and problem-solving.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={handleResumeDownload}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-green-600 dark:to-blue-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 dark:hover:from-green-700 dark:hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-mono font-medium text-lg"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </button>
            
            <a
              href="#contact"
              className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-green-500 transition-all duration-300 shadow-lg hover:shadow-xl font-mono font-medium text-lg"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://github.com/perumal-hacker"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-full hover:border-blue-500 dark:hover:border-green-500/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-green-400 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/perumal-s-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-full hover:border-blue-500 dark:hover:border-blue-500/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://leetcode.com/u/perumalhacks/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-full hover:border-orange-500 dark:hover:border-orange-500/50 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <ExternalLink className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
