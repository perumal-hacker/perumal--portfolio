import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

const PortfolioViewCounter: React.FC = () => {
  const [viewCount, setViewCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const incrementViewCount = async () => {
      try {
        const response = await fetch(
          'https://api.counterapi.dev/v2/perumal-portfolio/perumal-portfolio/up'
        );
        const result = await response.json();
        const count = result?.data?.up_count ?? 0;
        setViewCount(count);
      } catch (error) {
        console.error('Error fetching view count:', error);
        setViewCount(0); // Optional: fallback logic
      } finally {
        setLoading(false);
      }
    };

    incrementViewCount();
  }, []);

  const viewBox = (
    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-2">
        <Eye className="w-4 h-4 text-blue-600 dark:text-green-400" />
        <span className="text-sm font-mono text-gray-600 dark:text-gray-300">
          <span className="font-semibold text-blue-600 dark:text-green-400">
            {loading ? 'Loading...' : viewCount.toLocaleString()}
          </span>{' '}
          views
        </span>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: loading ? 0 : 0.5 }}
      className="fixed bottom-6 left-6 z-40"
    >
      {viewBox}
    </motion.div>
  );
};

export default PortfolioViewCounter;
