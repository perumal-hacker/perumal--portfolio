
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Trophy, Target, Database, Brain, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import axios from 'axios';

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  easyTotal: number;
  mediumSolved: number;
  mediumTotal: number;
  hardSolved: number;
  hardTotal: number;
  ranking: number;
  acceptanceRate: number;
}

const LeetCodeSection: React.FC = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const username = 'perumalhacks';

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        setLoading(true);
        
        const statsResponse = await axios.get(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`);
        
        if (statsResponse.data) {
          setStats({
            totalSolved: statsResponse.data.totalSolved || 0,
            totalQuestions: statsResponse.data.totalQuestions || 3000,
            easySolved: statsResponse.data.easySolved || 0,
            easyTotal: statsResponse.data.easyTotal || 800,
            mediumSolved: statsResponse.data.mediumSolved || 0,
            mediumTotal: statsResponse.data.mediumTotal || 1600,
            hardSolved: statsResponse.data.hardSolved || 0,
            hardTotal: statsResponse.data.hardTotal || 600,
            ranking: statsResponse.data.ranking || 0,
            acceptanceRate: statsResponse.data.acceptanceRate || 0
          });
        }

      } catch (err) {
        console.error('Error fetching LeetCode data:', err);
        setError('Unable to fetch LeetCode data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeData();
  }, []);

  const difficultyData = stats ? [
    { name: 'Easy', solved: stats.easySolved, total: stats.easyTotal, color: '#22c55e' },
    { name: 'Medium', solved: stats.mediumSolved, total: stats.mediumTotal, color: '#f59e0b' },
    { name: 'Hard', solved: stats.hardSolved, total: stats.hardTotal, color: '#ef4444' }
  ] : [];

  const skillsData = [
    {
      title: 'Data Structures',
      icon: Brain,
      description: 'Arrays, Linked Lists, Trees, Graphs, Hash Tables, Stacks, Queues',
      proficiency: 90
    },
    {
      title: 'Algorithms',
      icon: Zap,
      description: 'Dynamic Programming, Greedy, BFS/DFS, Binary Search, Sorting',
      proficiency: 85
    },
    {
      title: 'Database Systems',
      icon: Database,
      description: 'SQL Queries, Database Design, Optimization, Indexing',
      proficiency: 88
    }
  ];

  if (loading) {
    return (
      <section id="leetcode" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Problem Solving Excellence</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="glass glass-dark animate-pulse">
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
                  <div className="h-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="leetcode" className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Problem Solving Excellence</h2>
          <div className="glass glass-dark p-8 rounded-2xl max-w-2xl mx-auto">
            <p className="text-red-500 mb-4">{error}</p>
            <a
              href="https://leetcode.com/u/perumalhacks/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              View LeetCode Profile
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="leetcode" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Problem Solving Excellence</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Demonstrating algorithmic proficiency through competitive programming and mastery of data structures & database systems.
          </p>
        </motion.div>

        {/* Skills Overview */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass glass-dark h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <skill.icon className="w-8 h-8 text-blue-500" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skill.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{skill.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Proficiency</span>
                      <span className="font-bold text-blue-600">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {/* Profile Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass glass-dark h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-500" />
                  LeetCode Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-2xl">P</span>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">@{username}</h3>
                    <p className="text-gray-600 dark:text-gray-400">Competitive Programmer</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{stats?.totalSolved || 0}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Problems Solved</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{stats?.acceptanceRate || 0}%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Acceptance Rate</div>
                    </div>
                  </div>

                  {stats?.ranking > 0 && (
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <div className="flex items-center justify-center gap-2">
                        <Trophy className="w-5 h-5 text-yellow-500" />
                        <span className="text-lg font-bold text-purple-600">Rank #{stats.ranking}</span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Problem Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="glass glass-dark h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-yellow-500" />
                  Problem Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    solved: { label: "Solved", color: "hsl(var(--primary))" }
                  }}
                  className="h-64"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={difficultyData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar 
                        dataKey="solved" 
                        fill="var(--color-solved)"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
                
                <div className="mt-4 space-y-2">
                  {difficultyData.map((item) => (
                    <div key={item.name} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}:</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {item.solved}/{item.total}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* View Profile Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://leetcode.com/u/perumalhacks/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View Full LeetCode Profile
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCodeSection;
