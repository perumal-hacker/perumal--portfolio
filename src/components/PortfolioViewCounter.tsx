
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

const PortfolioViewCounter: React.FC = () => {
  const [viewCount, setViewCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const incrementViewCount = async () => {
      try {
        // Using countapi.xyz for free view counting
        const response = await fetch('https://api.countapi.xyz/hit/perumal-portfolio/visits');
        const data = await response.json();
        setViewCount(data.value);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching view count:', error);
        // Fallback to localStorage counter if API fails
        const localCount = localStorage.getItem('portfolio-views');
        const count = localCount ? parseInt(localCount) + 1 : 1;
        localStorage.setItem('portfolio-views', count.toString());
        setViewCount(count);
        setLoading(false);
      }
    };

    incrementViewCount();
  }, []);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 left-6 z-40"
      >
        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 shadow-lg">
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-blue-600 dark:text-green-400 animate-pulse" />
            <span className="text-sm font-mono text-gray-600 dark:text-gray-300">Loading...</span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 left-6 z-40"
    >
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-blue-600 dark:text-green-400" />
          <span className="text-sm font-mono text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-blue-600 dark:text-green-400">{viewCount.toLocaleString()}</span> views
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioViewCounter;
