
import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartTooltip } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface DifficultyData {
  name: string;
  solved: number;
  total: number;
  color: string;
}

interface ProblemBreakdownChartProps {
  easySolved: number;
  easyTotal: number;
  mediumSolved: number;
  mediumTotal: number;
  hardSolved: number;
  hardTotal: number;
}

const ProblemBreakdownChart: React.FC<ProblemBreakdownChartProps> = ({
  easySolved,
  easyTotal,
  mediumSolved,
  mediumTotal,
  hardSolved,
  hardTotal
}) => {
  const difficultyData: DifficultyData[] = [
    { name: 'Easy', solved: easySolved, total: easyTotal, color: '#22c55e' },
    { name: 'Medium', solved: mediumSolved, total: mediumTotal, color: '#f59e0b' },
    { name: 'Hard', solved: hardSolved, total: hardTotal, color: '#ef4444' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-white font-mono">
            <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            LeetCode Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={difficultyData}>
                <XAxis dataKey="name" stroke="#6B7280" className="font-mono" />
                <YAxis stroke="#6B7280" className="font-mono" />
                <ChartTooltip 
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-600 rounded p-2 font-mono shadow-lg">
                          <p className="text-gray-800 dark:text-white">{`${label}: ${payload[0].value}`}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar 
                  dataKey="solved" 
                  fill="#22c55e"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 space-y-2">
            {difficultyData.map((item) => (
              <div key={item.name} className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400 font-mono">{item.name}:</span>
                <span className="font-medium text-gray-800 dark:text-white font-mono">
                  {item.solved}/{item.total}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProblemBreakdownChart;
