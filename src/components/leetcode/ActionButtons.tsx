
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';

const ActionButtons: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-center space-y-4"
    >
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://leetcode.com/u/perumalhacks/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-green-600 dark:to-blue-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 dark:hover:from-green-700 dark:hover:to-blue-700 transition-all duration-300 font-medium font-mono shadow-lg"
        >
          View LeetCode Profile
          <ExternalLink className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/perumal-hacker"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-500 dark:hover:border-green-500/50 transition-all duration-300 font-medium font-mono shadow-lg"
        >
          View GitHub Profile
          <GitBranch className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  );
};

export default ActionButtons;
