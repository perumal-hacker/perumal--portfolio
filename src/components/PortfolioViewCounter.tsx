
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

const PortfolioViewCounter: React.FC = () => {
  const [viewCount, setViewCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndUpdateViews = async () => {
      try {
        // Using countapi.xyz for simple view counting
        const response = await fetch('https://api.countapi.xyz/hit/perumal-portfolio/visits');
        const data = await response.json();
        setViewCount(data.value || 0);
      } catch (error) {
        console.error('Error fetching view count:', error);
        // Fallback to localStorage for offline counting
        const localCount = localStorage.getItem('portfolio-views');
        const currentCount = localCount ? parseInt(localCount) + 1 : 1;
        localStorage.setItem('portfolio-views', currentCount.toString());
        setViewCount(currentCount);
      } finally {
        setLoading(false);
      }
    };

    fetchAndUpdateViews();
  }, []);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-mono text-sm"
      >
        <Eye className="w-4 h-4 animate-pulse" />
        <span>Loading...</span>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-mono text-sm bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
    >
      <Eye className="w-4 h-4" />
      <span>{viewCount.toLocaleString()} views</span>
    </motion.div>
  );
};

export default PortfolioViewCounter;
