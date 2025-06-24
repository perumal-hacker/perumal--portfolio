
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Trophy, Target, Database, Brain, Zap, Search, Filter, Calendar, GitBranch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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
  streak: number;
  recentActivity: any[];
}

interface GitHubRepo {
  name: string;
  description: string;
  stars: number;
  language: string;
  url: string;
}

const LeetCodeSection: React.FC = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchUsername, setSearchUsername] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);

  const username = 'perumalhacks';
  const githubUsername = 'perumal-hacker';

  // Mock heatmap data (in real implementation, this would come from the API)
  const generateHeatmapData = () => {
    const data = [];
    const today = new Date();
    
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      data.push({
        date: date.toISOString().split('T')[0],
        count: Math.floor(Math.random() * 5),
        level: Math.floor(Math.random() * 5)
      });
    }
    return data;
  };

  const heatmapData = generateHeatmapData();

  // Mock problem tags data
  const problemTagsData = [
    { tag: 'Array', solved: 145, total: 200, color: '#22c55e' },
    { tag: 'Dynamic Programming', solved: 78, total: 120, color: '#3b82f6' },
    { tag: 'Math', solved: 65, total: 90, color: '#f59e0b' },
    { tag: 'String', solved: 89, total: 130, color: '#ef4444' },
    { tag: 'Tree', solved: 45, total: 80, color: '#8b5cf6' },
    { tag: 'Graph', solved: 32, total: 60, color: '#06b6d4' },
    { tag: 'Binary Search', solved: 28, total: 50, color: '#f97316' },
    { tag: 'Greedy', solved: 35, total: 70, color: '#84cc16' }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch LeetCode stats
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
            acceptanceRate: statsResponse.data.acceptanceRate || 0,
            streak: Math.floor(Math.random() * 50) + 10,
            recentActivity: []
          });
        }

        // Mock GitHub repos (in real implementation, use GitHub GraphQL API)
        setGithubRepos([
          {
            name: 'portfolio-website',
            description: 'Personal portfolio built with React and TypeScript',
            stars: 15,
            language: 'TypeScript',
            url: `https://github.com/${githubUsername}/portfolio-website`
          },
          {
            name: 'leetcode-solutions',
            description: 'My LeetCode problem solutions in Java and Python',
            stars: 8,
            language: 'Java',
            url: `https://github.com/${githubUsername}/leetcode-solutions`
          },
          {
            name: 'fullstack-ecommerce',
            description: 'MERN stack e-commerce application',
            stars: 23,
            language: 'JavaScript',
            url: `https://github.com/${githubUsername}/fullstack-ecommerce`
          }
        ]);

      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Unable to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const difficultyData = stats ? [
    { name: 'Easy', solved: stats.easySolved, total: stats.easyTotal, color: '#22c55e' },
    { name: 'Medium', solved: stats.mediumSolved, total: stats.mediumTotal, color: '#f59e0b' },
    { name: 'Hard', solved: stats.hardSolved, total: stats.hardTotal, color: '#ef4444' }
  ] : [];

  const handleSearch = () => {
    if (searchUsername.trim()) {
      window.open(`https://leetcode.com/u/${searchUsername}/`, '_blank');
    }
  };

  const getFilteredTags = () => {
    if (activeFilter === 'All') return problemTagsData;
    // Add more sophisticated filtering logic here
    return problemTagsData;
  };

  if (loading) {
    return (
      <section id="leetcode" className="section-padding bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Coding Excellence Dashboard
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-purple-400 mx-auto mb-6" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="bg-gray-900 border-gray-700 animate-pulse">
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-700 rounded mb-4"></div>
                  <div className="h-32 bg-gray-700 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="leetcode" className="section-padding bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Coding Excellence Dashboard
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-purple-400 mx-auto mb-6" />
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            VS Code themed coding analytics showcasing problem-solving expertise and development contributions
          </p>
        </motion.div>

        {/* Search Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card className="bg-gray-900 border-green-500/30">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1">
                  <Input
                    placeholder="Search any LeetCode profile..."
                    value={searchUsername}
                    onChange={(e) => setSearchUsername(e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <Button 
                  onClick={handleSearch}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Profile Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gray-900 border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-400">
                  <Code className="w-5 h-5" />
                  Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-xl">P</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">@{username}</h3>
                    <p className="text-gray-400 text-sm">LeetCode Practitioner</p>
                  </div>
                  <div className="text-3xl font-bold text-green-400">{stats?.totalSolved || 0}</div>
                  <div className="text-sm text-gray-400">Problems Solved</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Global Ranking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="bg-gray-900 border-yellow-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-400">
                  <Trophy className="w-5 h-5" />
                  Global Rank
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-yellow-400">
                    #{stats?.ranking || 'N/A'}
                  </div>
                  <div className="text-sm text-gray-400">Worldwide</div>
                  <div className="text-2xl font-bold text-blue-400">{stats?.acceptanceRate || 0}%</div>
                  <div className="text-sm text-gray-400">Acceptance Rate</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Streak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-gray-900 border-orange-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-400">
                  <Zap className="w-5 h-5" />
                  Current Streak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-orange-400">{stats?.streak || 0}</div>
                  <div className="text-sm text-gray-400">Days</div>
                  <div className="flex justify-center">
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs">
                      🔥 On Fire!
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-gray-900 border-purple-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-400">
                  <Calendar className="w-5 h-5" />
                  Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-lg font-bold text-purple-400">Today</div>
                  <div className="text-sm text-gray-400">Last Solved</div>
                  <div className="space-y-1">
                    <div className="text-xs text-green-400">✓ Two Sum</div>
                    <div className="text-xs text-yellow-400">✓ Valid Parentheses</div>
                    <div className="text-xs text-red-400">✓ Merge k Sorted Lists</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Problem Breakdown Chart */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Target className="w-5 h-5 text-blue-400" />
                  Difficulty Breakdown
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
                        fill="#22c55e"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
                
                <div className="mt-4 space-y-2">
                  {difficultyData.map((item) => (
                    <div key={item.name} className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">{item.name}:</span>
                      <span className="font-medium text-white">
                        {item.solved}/{item.total}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Problem Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Database className="w-5 h-5 text-purple-400" />
                  Problem Tags
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {getFilteredTags().map((tag, index) => (
                    <div key={tag.tag} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-300">{tag.tag}</span>
                        <span className="text-sm font-bold" style={{ color: tag.color }}>
                          {tag.solved}/{tag.total}
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full"
                          style={{ backgroundColor: tag.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(tag.solved / tag.total) * 100}%` }}
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
        </div>

        {/* GitHub Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <GitBranch className="w-5 h-5 text-green-400" />
                GitHub Contributions & Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Contribution Heatmap */}
              <div className="mb-6">
                <h4 className="text-sm text-gray-400 mb-3">Contribution Activity</h4>
                <div className="grid grid-cols-53 gap-1 text-xs">
                  {heatmapData.map((day, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-sm ${
                        day.level === 0 ? 'bg-gray-800' :
                        day.level === 1 ? 'bg-green-900' :
                        day.level === 2 ? 'bg-green-700' :
                        day.level === 3 ? 'bg-green-500' :
                        'bg-green-400'
                      }`}
                      title={`${day.count} contributions on ${day.date}`}
                    />
                  ))}
                </div>
              </div>

              {/* Pinned Repositories */}
              <div>
                <h4 className="text-sm text-gray-400 mb-3">Pinned Repositories</h4>
                <div className="grid gap-4 md:grid-cols-3">
                  {githubRepos.map((repo) => (
                    <div key={repo.name} className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-medium text-white text-sm">{repo.name}</h5>
                        <span className="text-xs text-yellow-400">⭐ {repo.stars}</span>
                      </div>
                      <p className="text-xs text-gray-400 mb-3">{repo.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-blue-400">{repo.language}</span>
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-green-400 hover:text-green-300"
                        >
                          View →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center space-y-4"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://leetcode.com/u/perumalhacks/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 font-medium shadow-lg"
            >
              View LeetCode Profile
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 font-medium"
            >
              View GitHub Profile
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCodeSection;
