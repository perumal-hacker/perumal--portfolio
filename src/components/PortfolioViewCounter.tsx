import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

const PortfolioViewCounter: React.FC = () => {
  const [viewCount, setViewCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const runCounter = async () => {
      try {
        // Check if the counter has already been incremented in this session
        const alreadyCounted = sessionStorage.getItem('view-counted');

        const url = alreadyCounted
          ? 'https://api.counterapi.dev/v2/perumal-portfolio/perumal-portfolio?json=true' // Just read count
          : 'https://api.counterapi.dev/v2/perumal-portfolio/perumal-portfolio/up'; // Increment + read count

        const res = await fetch(url);
        const result = await res.json();

        const count = result?.data?.up_count ?? 0;
        setViewCount(count);
        setLoading(false);

        // Mark this session as counted to avoid duplicate increments
        if (!alreadyCounted) {
          sessionStorage.setItem('view-counted', 'true');
        }
      } catch (error) {
        console.error('View count fetch failed:', error);
        setLoading(false);
      }
    };

    runCounter();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: loading ? 0 : 0.5 }}
      className="fixed bottom-6 left-6 z-40"
    >
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-blue-600 dark:text-green-400" />
          <span className="text-sm font-mono text-gray-600 dark:text-gray-300">
            {loading ? 'Loading...' : (
              <>
                <span className="font-semibold text-blue-600 dark:text-green-400">
                  {viewCount.toLocaleString()}
                </span> views
              </>
            )}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioViewCounter;
