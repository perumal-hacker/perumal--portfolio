
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Zap } from 'lucide-react';

const NowBuildingWidget: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);
  
  const projects = [
    "Advanced MERN Stack E-commerce Platform",
    "Real-time Chat Application with WebSocket",
    "AI-powered Code Review Tool",
    "Distributed System Architecture",
    "Advanced Database Optimization Techniques"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject(prev => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 right-6 z-40 max-w-sm"
    >
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-lg">
        <div className="flex items-center gap-2 mb-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Code className="w-4 h-4 text-blue-600 dark:text-green-400" />
          </motion.div>
          <span className="text-sm font-semibold text-gray-900 dark:text-white font-mono">
            Now Building
          </span>
          <Zap className="w-3 h-3 text-yellow-500" />
        </div>
        <motion.p
          key={currentProject}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-xs text-gray-600 dark:text-gray-400 font-mono leading-relaxed"
        >
          {projects[currentProject]}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default NowBuildingWidget;
