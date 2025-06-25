
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Download, ArrowDown, Code, Terminal } from 'lucide-react';

const HeroSection: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/perumal-hacker', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/perumal-s-dev', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:perumal.infonet@gmail.com', label: 'Email' }
  ];

  const quotes = [
    "Turning ideas into scalable, full-stack applications.",
    "Talk is cheap, show me the code.",
    "Building the future, one line at a time."
  ];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated background grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating code elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-green-500/20 text-xs md:text-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {['const', 'function', '{}', '[]', '=>', 'async', 'await', 'return'][i]}
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
          {/* Terminal-style introduction */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-900 border border-gray-700 rounded-lg p-6 font-mono text-left max-w-2xl mx-auto mb-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm">~/portfolio</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="text-green-400">$ whoami</div>
              <div className="text-white">Perumal S - Full Stack Developer</div>
              <div className="text-green-400">$ echo $EXPERTISE</div>
              <div className="text-white">MERN Stack | DSA | Problem Solving | 300+ LeetCode</div>
            </div>
          </motion.div>

          {/* Main heading */}
          <div className="space-y-6">
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-mono"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
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
                  'Problem Solver',
                  2000,
                  'DSA Expert',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                className="text-2xl md:text-4xl font-semibold text-gray-300 font-mono"
                repeat={Infinity}
              />
            </div>
          </div>

          {/* Professional badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="px-4 py-2 bg-gray-900 border border-green-500/30 text-green-400 rounded-lg text-sm font-mono flex items-center gap-2">
              <Code className="w-4 h-4" />
              MERN Stack
            </div>
            <div className="px-4 py-2 bg-gray-900 border border-blue-500/30 text-blue-400 rounded-lg text-sm font-mono flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              300+ LeetCode
            </div>
            <div className="px-4 py-2 bg-gray-900 border border-purple-500/30 text-purple-400 rounded-lg text-sm font-mono">
              DSA Expert
            </div>
          </motion.div>

          {/* Rotating quotes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-4xl mx-auto"
          >
            <TypeAnimation
              sequence={quotes.flatMap(quote => [quote, 3000])}
              wrapper="p"
              speed={50}
              className="text-lg md:text-xl text-gray-400 italic font-mono"
              repeat={Infinity}
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 hover:from-green-700 hover:to-blue-700 font-mono"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ArrowDown className="w-5 h-5" />
            </motion.button>
            
            <motion.a
              href="/resume.pdf"
              download
              className="px-8 py-4 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 font-mono"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
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
                className="p-4 rounded-lg bg-gray-900 border border-gray-700 hover:border-green-500/50 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-green-500 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-green-500 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
