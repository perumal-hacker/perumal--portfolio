
import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LanguageData {
  name: string;
  percentage: number;
  color: string;
}

interface LanguageStatsChartProps {
  languages: Record<string, number>;
}

const LanguageStatsChart: React.FC<LanguageStatsChartProps> = ({ languages }) => {
  const topLanguages: LanguageData[] = Object.entries(languages)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .map(([name, count]) => ({
      name,
      percentage: Math.round((count / Object.values(languages).reduce((a, b) => a + b, 0)) * 100),
      color: {
        'JavaScript': '#f1e05a',
        'TypeScript': '#2b7489',
        'Java': '#b07219',
        'Python': '#3572A5',
        'CSS': '#563d7c',
        'HTML': '#e34c26'
      }[name] || '#6b7280'
    }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-white font-mono">
            <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
            Top Languages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topLanguages.map((lang, index) => (
              <div key={lang.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-mono">{lang.name}</span>
                  <span className="text-sm font-bold font-mono" style={{ color: lang.color }}>
                    {lang.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full"
                    style={{ backgroundColor: lang.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LanguageStatsChart;
