
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Trophy, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from 'recharts';
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

interface SubmissionData {
  timestamp: string;
  statusDisplay: string;
  lang: string;
  title: string;
}

const LeetCodeSection: React.FC = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [submissions, setSubmissions] = useState<SubmissionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const username = 'perumalhacks';

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        setLoading(true);
        
        // Fetch user stats
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

        // Fetch recent submissions
        try {
          const submissionsResponse = await axios.get(`https://alfa-leetcode-api.onrender.com/userProfile/${username}/submission`);
          if (submissionsResponse.data && submissionsResponse.data.submission) {
            setSubmissions(submissionsResponse.data.submission.slice(0, 20));
          }
        } catch (submissionError) {
          console.log('Submissions not available');
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

  // Chart data preparation
  const difficultyData = stats ? [
    { name: 'Easy', solved: stats.easySolved, total: stats.easyTotal, color: '#22c55e' },
    { name: 'Medium', solved: stats.mediumSolved, total: stats.mediumTotal, color: '#f59e0b' },
    { name: 'Hard', solved: stats.hardSolved, total: stats.hardTotal, color: '#ef4444' }
  ] : [];

  const languageStats = submissions.reduce((acc: any, submission) => {
    const lang = submission.lang || 'Unknown';
    acc[lang] = (acc[lang] || 0) + 1;
    return acc;
  }, {});

  const languageData = Object.entries(languageStats).map(([lang, count], index) => ({
    name: lang,
    value: count,
    color: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'][index % 6]
  }));

  // Generate heatmap data (simplified)
  const generateHeatmapData = () => {
    const days = [];
    const today = new Date();
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const submissions = Math.floor(Math.random() * 5); // Mock data
      days.push({
        date: date.toISOString().split('T')[0],
        count: submissions,
        level: submissions === 0 ? 0 : submissions <= 1 ? 1 : submissions <= 2 ? 2 : submissions <= 3 ? 3 : 4
      });
    }
    return days;
  };

  const heatmapData = generateHeatmapData();

  if (loading) {
    return (
      <section id="leetcode" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Problem Solving</h2>
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
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Problem Solving</h2>
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
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Problem Solving</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My LeetCode journey showcasing algorithmic problem-solving skills and competitive programming achievements.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
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
                  Profile Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-xl">P</span>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white">@{username}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Total Solved:</span>
                      <span className="font-bold text-green-600">{stats?.totalSolved || 0}</span>
                    </div>
                    {stats?.ranking > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Ranking:</span>
                        <span className="font-bold text-blue-600">#{stats.ranking}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Acceptance Rate:</span>
                      <span className="font-bold text-purple-600">{stats?.acceptanceRate || 0}%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Problem Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <Card className="glass glass-dark h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Problem Statistics
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
                      <Bar dataKey="solved" fill="var(--color-solved)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {/* Submission Heatmap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass glass-dark h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-500" />
                  Submission Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 text-xs">
                  {heatmapData.slice(-49).map((day, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-sm ${
                        day.level === 0
                          ? 'bg-gray-200 dark:bg-gray-700'
                          : day.level === 1
                          ? 'bg-green-200 dark:bg-green-900'
                          : day.level === 2
                          ? 'bg-green-300 dark:bg-green-700'
                          : day.level === 3
                          ? 'bg-green-400 dark:bg-green-600'
                          : 'bg-green-500 dark:bg-green-500'
                      }`}
                      title={`${day.date}: ${day.count} submissions`}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4 text-xs text-gray-600 dark:text-gray-400">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-sm" />
                    <div className="w-3 h-3 bg-green-200 dark:bg-green-900 rounded-sm" />
                    <div className="w-3 h-3 bg-green-300 dark:bg-green-700 rounded-sm" />
                    <div className="w-3 h-3 bg-green-400 dark:bg-green-600 rounded-sm" />
                    <div className="w-3 h-3 bg-green-500 dark:bg-green-500 rounded-sm" />
                  </div>
                  <span>More</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Language Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="glass glass-dark h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-500" />
                  Language Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    value: { label: "Problems", color: "hsl(var(--primary))" }
                  }}
                  className="h-64"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={languageData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}`}
                      >
                        {languageData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
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
