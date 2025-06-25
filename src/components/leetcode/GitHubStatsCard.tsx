
import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface GitHubStatsCardProps {
  totalCommits: number;
  publicRepos: number;
  totalStars: number;
}

const GitHubStatsCard: React.FC<GitHubStatsCardProps> = ({ totalCommits, publicRepos, totalStars }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-purple-200 dark:border-purple-500/30 h-full shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-mono">
            <GitBranch className="w-5 h-5" />
            GitHub Stats
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 font-mono">{totalCommits}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-mono">Total Commits</div>
            <div className="flex justify-center gap-4 text-xs">
              <div className="text-center">
                <div className="font-bold text-green-600 dark:text-green-400 font-mono">{publicRepos}</div>
                <div className="text-gray-600 dark:text-gray-400 font-mono">Repos</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-yellow-600 dark:text-yellow-400 font-mono">{totalStars}</div>
                <div className="text-gray-600 dark:text-gray-400 font-mono">Stars</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default GitHubStatsCard;
