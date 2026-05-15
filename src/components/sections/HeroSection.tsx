import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/Perumal_Resume.pdf';
    link.download = 'Perumal_S_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0a]"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-blue-500/20 dark:bg-blue-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/15 dark:bg-purple-500/10 blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md text-sm text-gray-600 dark:text-gray-300 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Available for full-time opportunities
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
          style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.04em' }}
        >
          Perumal S
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl font-medium mb-6"
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Full Stack Developer
          </span>
          <span className="text-gray-400 dark:text-gray-600 mx-2">|</span>
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            MERN Stack
          </span>
          <span className="text-gray-400 dark:text-gray-600 mx-2">|</span>
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Java Full Stack
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building scalable, production-grade applications with modern full-stack
          architectures. Specialized in React, Node.js, Java, and Spring Boot.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-3 justify-center mb-10"
        >
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium text-sm hover:opacity-90 transition-all shadow-lg shadow-gray-900/10 dark:shadow-white/10"
          >
            Get in touch
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={downloadResume}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 dark:border-white/15 bg-white/60 dark:bg-white/5 backdrop-blur-md text-gray-900 dark:text-white font-medium text-sm hover:bg-white dark:hover:bg-white/10 transition-all"
          >
            <Download className="w-4 h-4" />
            Resume
          </button>
          <a
            href="https://github.com/perumal-hacker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 dark:border-white/15 bg-white/60 dark:bg-white/5 backdrop-blur-md text-gray-900 dark:text-white font-medium text-sm hover:bg-white dark:hover:bg-white/10 transition-all"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/perumal-s-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 dark:border-white/15 bg-white/60 dark:bg-white/5 backdrop-blur-md text-gray-900 dark:text-white font-medium text-sm hover:bg-white dark:hover:bg-white/10 transition-all"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </motion.div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500 dark:text-gray-500 font-mono"
        >
          <span className="flex items-center gap-1.5"><Sparkles className="w-3 h-3" /> 400+ LeetCode</span>
          <span>•</span>
          <span>CGPA 8.5</span>
          <span>•</span>
          <span>React · Node · Java · Spring Boot</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
