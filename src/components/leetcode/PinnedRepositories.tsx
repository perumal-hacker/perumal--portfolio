
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  topics: string[];
}

interface PinnedRepositoriesProps {
  pinnedRepos: Repository[];
}

const PinnedRepositories: React.FC<PinnedRepositoriesProps> = ({ pinnedRepos }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-white font-mono">
            <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            Pinned Repositories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {pinnedRepos.map((repo) => (
              <div key={repo.id} className="group bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-green-500/50 rounded-lg p-4 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <h5 className="font-medium text-gray-800 dark:text-white text-sm font-mono group-hover:text-blue-600 dark:group-hover:text-green-400 transition-colors">{repo.name}</h5>
                  <span className="text-xs text-yellow-600 dark:text-yellow-400 flex items-center gap-1 font-mono">
                    <Star className="w-3 h-3" />
                    {repo.stargazers_count}
                  </span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2 font-mono">{repo.description}</p>
                
                {/* Topics */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span key={topic} className="px-2 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded text-xs font-mono">
                      {topic}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1 font-mono">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    {repo.language}
                  </span>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 dark:text-green-400 hover:text-blue-800 dark:hover:text-green-300 transition-colors font-mono"
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
  );
};

export default PinnedRepositories;
