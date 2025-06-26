import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Code2, Zap, Target } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import ResumeDownload from '@/components/ResumeDownload';

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-800">
      
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6 font-mono">
              Perumal S
            </h1>
            
            <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-8 h-16 flex items-center justify-center font-mono">
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  2000,
                  'MERN Stack Specialist',
                  2000,
                  'Problem Solver',
                  2000,
                  'Final-Year CSE Student',
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: 'inline-block' }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-mono">
              Building scalable web applications with the MERN stack, solving complex problems with 
              <span className="text-blue-600 dark:text-green-400 font-semibold"> 300+ LeetCode solutions</span>, 
              and continuously learning cutting-edge technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <ResumeDownload />
            
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code2 className="w-5 h-5" />
              View Projects
            </motion.button>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center gap-6 mb-12"
          >
            <a
              href="https://github.com/perumal-hacker"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-green-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/perumal-s-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="mailto:perumal.infonet@gmail.com"
              className="p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-green-400 transition-colors" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-12 font-mono"
          >
            <MapPin className="w-4 h-4" />
            <span>Tamil Nadu, India</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-green-400 mb-2 font-mono">300+</div>
              <div className="text-gray-600 dark:text-gray-400 font-mono">LeetCode Problems</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-blue-400 mb-2 font-mono">20+</div>
              <div className="text-gray-600 dark:text-gray-400 font-mono">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-purple-400 mb-2 font-mono">3+</div>
              <div className="text-gray-600 dark:text-gray-400 font-mono">Years Coding</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-green-400 transition-colors group"
            >
              <span className="text-sm font-medium font-mono">Scroll to explore</span>
              <ArrowDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
