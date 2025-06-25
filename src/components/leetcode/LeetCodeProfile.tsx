import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LeetCodeProfileProps {
  totalSolved: number;
}

const LeetCodeProfile: React.FC<LeetCodeProfileProps> = ({ totalSolved }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-blue-200 dark:border-green-500/30 h-full shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-600 dark:text-green-400 font-mono">
            <Code className="w-5 h-5" />
            LeetCode Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-green-500 dark:to-blue-500 rounded-full flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-xl font-mono">P</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 dark:text-white font-mono">@perumalhacks</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-mono">Problem Solver</p>
            </div>
            <div className="text-3xl font-bold text-blue-600 dark:text-green-400 font-mono">{totalSolved}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-mono">Problems Solved</div>
            <a
              href="https://leetcode.com/u/perumalhacks/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-blue-600 dark:text-green-400 underline font-mono"
            >
              View Full Profile
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LeetCodeProfile;
