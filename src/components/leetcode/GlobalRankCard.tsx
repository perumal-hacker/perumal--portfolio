
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface GlobalRankCardProps {
  ranking: number;
  acceptanceRate: number;
}

const GlobalRankCard: React.FC<GlobalRankCardProps> = ({ ranking, acceptanceRate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-orange-200 dark:border-yellow-500/30 h-full shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-600 dark:text-yellow-400 font-mono">
            <Trophy className="w-5 h-5" />
            Global Rank
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-orange-600 dark:text-yellow-400 font-mono">
              #{ranking.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-mono">Worldwide</div>
            <div className="text-xl font-bold text-blue-600 dark:text-blue-400 font-mono">{acceptanceRate}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-mono">Success Rate</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default GlobalRankCard;
