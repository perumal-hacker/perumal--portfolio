
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Trophy, Target, GitBranch, Star, Calendar, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

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
}

interface GitHubRepo {
  name: string;
  description: string;
  stars: number;
  language: string;
  url: string;
  topics: string[];
}

const LeetCodeSection: React.FC = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);

  const username = 'perumalhacks';
  const githubUsername = 'perumal-hacker';

  // Mock data with realistic values
  const mockStats: LeetCodeStats = {
    totalSolved: 300,
    totalQuestions: 3000,
    easySolved: 120,
    easyTotal: 800,
    mediumSolved: 150,
    mediumTotal: 1600,
    hardSolved: 30,
    hardTotal: 600,
    ranking: 25432,
    acceptanceRate: 78.5,
    streak: 45
  };

  // GitHub stats data
  const githubStats = {
    totalRepos: 25,
    totalCommits: 847,
    totalStars: 89,
    totalContributions: 1256,
    languageStats: [
      { name: 'JavaScript', percentage: 35, color: '#f1e05a' },
      { name: 'Java', percentage: 28, color: '#b07219' },
      { name: 'Python', percentage: 18, color: '#3572A5' },
      { name: 'TypeScript', percentage: 12, color: '#2b7489' },
      { name: 'CSS', percentage: 7, color: '#563d7c' }
    ]
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Simulate API call with timeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStats(mockStats);

        // Set GitHub repos data
        setGithubRepos([
          {
            name: 'fullstack-ecommerce',
            description: 'Complete MERN stack e-commerce platform with authentication and payment integration',
            stars: 23,
            language: 'JavaScript',
            url: `https://github.com/${githubUsername}/fullstack-ecommerce`,
            topics: ['react', 'nodejs', 'mongodb', 'ecommerce']
          },
          {
            name: 'data-structures-algorithms',
            description: 'Comprehensive DSA implementations and LeetCode solutions in Java and Python',
            stars: 31,
            language: 'Java',
            url: `https://github.com/${githubUsername}/data-structures-algorithms`,
            topics: ['algorithms', 'data-structures', 'leetcode', 'java']
          },
          {
            name: 'realtime-chat-app',
            description: 'Socket.io powered real-time messaging application with MERN stack',
            stars: 18,
            language: 'JavaScript',
            url: `https://github.com/${githubUsername}/realtime-chat-app`,
            topics: ['socketio', 'react', 'nodejs', 'realtime']
          },
          {
            name: 'portfolio-website',
            description: 'Personal portfolio website built with React, TypeScript, and modern animations',
            stars: 15,
            language: 'TypeScript',
            url: `https://github.com/${githubUsername}/portfolio-website`,
            topics: ['portfolio', 'react', 'typescript', 'framer-motion']
          }
        ]);

      } catch (err) {
        console.log('Error loading data:', err);
        setStats(mockStats);
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

  if (loading) {
    return (
      <section id="leetcode" className="section-padding bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 font-mono">
              Coding Analytics
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
    <section id="leetcode" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 font-mono">
            Coding Analytics
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-purple-400 mx-auto mb-6" />
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-mono">
            Data-driven insights into problem-solving expertise and development contributions
          </p>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* LeetCode Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gray-900 border-green-500/30 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-400 font-mono">
                  <Code className="w-5 h-5" />
                  LeetCode Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-xl font-mono">P</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white font-mono">@{username}</h3>
                    <p className="text-gray-400 text-sm font-mono">Problem Solver</p>
                  </div>
                  <div className="text-3xl font-bold text-green-400 font-mono">{stats?.totalSolved || 0}</div>
                  <div className="text-sm text-gray-400 font-mono">Problems Solved</div>
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
            <Card className="bg-gray-900 border-yellow-500/30 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-400 font-mono">
                  <Trophy className="w-5 h-5" />
                  Global Rank
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-yellow-400 font-mono">
                    #{stats?.ranking?.toLocaleString() || 'N/A'}
                  </div>
                  <div className="text-sm text-gray-400 font-mono">Worldwide</div>
                  <div className="text-xl font-bold text-blue-400 font-mono">{stats?.acceptanceRate || 0}%</div>
                  <div className="text-sm text-gray-400 font-mono">Success Rate</div>
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
            <Card className="bg-gray-900 border-orange-500/30 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-400 font-mono">
                  <Activity className="w-5 h-5" />
                  Current Streak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-orange-400 font-mono">{stats?.streak || 0}</div>
                  <div className="text-sm text-gray-400 font-mono">Days Active</div>
                  <div className="flex justify-center">
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs font-mono">
                      🔥 Consistent
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-gray-900 border-purple-500/30 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-400 font-mono">
                  <GitBranch className="w-5 h-5" />
                  GitHub Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-purple-400 font-mono">{githubStats.totalCommits}</div>
                  <div className="text-sm text-gray-400 font-mono">Total Commits</div>
                  <div className="flex justify-center gap-4 text-xs">
                    <div className="text-center">
                      <div className="font-bold text-green-400 font-mono">{githubStats.totalRepos}</div>
                      <div className="text-gray-400 font-mono">Repos</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-yellow-400 font-mono">{githubStats.totalStars}</div>
                      <div className="text-gray-400 font-mono">Stars</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {/* Problem Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white font-mono">
                  <Target className="w-5 h-5 text-blue-400" />
                  LeetCode Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={difficultyData}>
                      <XAxis dataKey="name" stroke="#9CA3AF" className="font-mono" />
                      <YAxis stroke="#9CA3AF" className="font-mono" />
                      <ChartTooltip 
                        content={({ active, payload, label }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-gray-800 border border-gray-600 rounded p-2 font-mono">
                                <p className="text-white">{`${label}: ${payload[0].value}`}</p>
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
                      <span className="text-sm text-gray-400 font-mono">{item.name}:</span>
                      <span className="font-medium text-white font-mono">
                        {item.solved}/{item.total}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* GitHub Language Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white font-mono">
                  <Code className="w-5 h-5 text-green-400" />
                  Top Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {githubStats.languageStats.map((lang, index) => (
                    <div key={lang.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-300 font-mono">{lang.name}</span>
                        <span className="text-sm font-bold font-mono" style={{ color: lang.color }}>
                          {lang.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
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
        </div>

        {/* Pinned Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white font-mono">
                <Star className="w-5 h-5 text-yellow-400" />
                Pinned Repositories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {githubRepos.map((repo) => (
                  <div key={repo.name} className="group bg-gray-800 border border-gray-600 hover:border-green-500/50 rounded-lg p-4 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <h5 className="font-medium text-white text-sm font-mono group-hover:text-green-400 transition-colors">{repo.name}</h5>
                      <span className="text-xs text-yellow-400 flex items-center gap-1 font-mono">
                        <Star className="w-3 h-3" />
                        {repo.stars}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mb-3 line-clamp-2 font-mono">{repo.description}</p>
                    
                    {/* Topics */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span key={topic} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-mono">
                          {topic}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 flex items-center gap-1 font-mono">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                        {repo.language}
                      </span>
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-green-400 hover:text-green-300 transition-colors font-mono"
                      >
                        View Repository →
                      </a>
                    </div>
                  </div>
                ))}
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 font-medium font-mono"
            >
              View LeetCode Profile
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg hover:bg-gray-700 hover:border-green-500/50 transition-all duration-300 font-medium font-mono"
            >
              View GitHub Profile
              <GitBranch className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCodeSection;
