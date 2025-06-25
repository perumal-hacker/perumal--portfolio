
import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StreakCardProps {
  streak: number;
}

const StreakCard: React.FC<StreakCardProps> = ({ streak }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-red-200 dark:border-orange-500/30 h-full shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-600 dark:text-orange-400 font-mono">
            <Activity className="w-5 h-5" />
            Current Streak
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-red-600 dark:text-orange-400 font-mono">{streak}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-mono">Days Active</div>
            <div className="flex justify-center">
              <span className="px-2 py-1 bg-red-100 dark:bg-orange-500/20 text-red-600 dark:text-orange-400 rounded text-xs font-mono">
                🔥 Consistent
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default StreakCard;
