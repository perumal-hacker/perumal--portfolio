
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useLeetCodeData } from '@/hooks/useLeetCodeData';
import { useGitHubData } from '@/hooks/useGitHubData';
import LeetCodeProfile from '@/components/leetcode/LeetCodeProfile';
import GlobalRankCard from '@/components/leetcode/GlobalRankCard';
import StreakCard from '@/components/leetcode/StreakCard';
import GitHubStatsCard from '@/components/leetcode/GitHubStatsCard';
import ProblemBreakdownChart from '@/components/leetcode/ProblemBreakdownChart';
import LanguageStatsChart from '@/components/leetcode/LanguageStatsChart';
import PinnedRepositories from '@/components/leetcode/PinnedRepositories';
import ActionButtons from '@/components/leetcode/ActionButtons';

const LeetCodeSection: React.FC = () => {
  const leetcodeStats = useLeetCodeData('perumalhacks');
  const githubStats = useGitHubData('perumal-hacker');

  if (leetcodeStats.loading || githubStats.loading) {
    return (
      <section id="leetcode" className="section-padding bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6 font-mono">
              Coding Analytics
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-green-400 dark:to-purple-400 mx-auto mb-6" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 animate-pulse">
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="h-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="leetcode" className="section-padding bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6 font-mono">
            Coding Analytics
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-green-400 dark:to-purple-400 mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-mono">
            Data-driven insights into problem-solving expertise and development contributions
          </p>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <LeetCodeProfile totalSolved={leetcodeStats.totalSolved} />
          <GlobalRankCard ranking={leetcodeStats.ranking} acceptanceRate={leetcodeStats.acceptanceRate} />
          <StreakCard streak={leetcodeStats.streak} />
          <GitHubStatsCard 
            totalCommits={githubStats.totalCommits}
            publicRepos={githubStats.user?.public_repos || 0}
            totalStars={githubStats.totalStars}
          />
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <ProblemBreakdownChart
            easySolved={leetcodeStats.easySolved}
            easyTotal={leetcodeStats.easyTotal}
            mediumSolved={leetcodeStats.mediumSolved}
            mediumTotal={leetcodeStats.mediumTotal}
            hardSolved={leetcodeStats.hardSolved}
            hardTotal={leetcodeStats.hardTotal}
          />
          <LanguageStatsChart languages={githubStats.languages} />
        </div>

        {/* Pinned Repositories */}
        <PinnedRepositories pinnedRepos={githubStats.pinnedRepos} />

        {/* Action Buttons */}
        <ActionButtons />
      </div>
    </section>
  );
};

export default LeetCodeSection;
