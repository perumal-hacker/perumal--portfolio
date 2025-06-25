
import { useState, useEffect } from 'react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  topics: string[];
  updated_at: string;
  homepage?: string;
}

interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  avatar_url: string;
}

interface GitHubStats {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  pinnedRepos: GitHubRepo[];
  languages: { [key: string]: number };
  totalCommits: number;
  totalStars: number;
  loading: boolean;
  error: string | null;
}

export const useGitHubData = (username: string): GitHubStats => {
  const [stats, setStats] = useState<GitHubStats>({
    user: null,
    repos: [],
    pinnedRepos: [],
    languages: {},
    totalCommits: 0,
    totalStars: 0,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setStats(prev => ({ ...prev, loading: true, error: null }));

        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        const user = await userResponse.json();

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const repos = await reposResponse.json();

        // Calculate stats
        const totalStars = repos.reduce((sum: number, repo: GitHubRepo) => sum + repo.stargazers_count, 0);
        
        // Get languages
        const languages: { [key: string]: number } = {};
        repos.forEach((repo: GitHubRepo) => {
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1;
          }
        });

        // Get pinned repos (top 6 by stars and recent activity)
        const pinnedRepos = repos
          .filter((repo: GitHubRepo) => !repo.name.includes('perumal-hacker'))
          .sort((a: GitHubRepo, b: GitHubRepo) => {
            const aScore = a.stargazers_count * 2 + (new Date(a.updated_at).getTime() / 1000000000);
            const bScore = b.stargazers_count * 2 + (new Date(b.updated_at).getTime() / 1000000000);
            return bScore - aScore;
          })
          .slice(0, 6);

        setStats({
          user,
          repos,
          pinnedRepos,
          languages,
          totalCommits: 847, // This would need GitHub GraphQL API for accurate count
          totalStars,
          loading: false,
          error: null
        });

      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setStats(prev => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        }));
      }
    };

    if (username) {
      fetchGitHubData();
    }
  }, [username]);

  return stats;
};
