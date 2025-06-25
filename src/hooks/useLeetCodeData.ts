
import { useState, useEffect } from 'react';

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
  loading: boolean;
  error: string | null;
}

export const useLeetCodeData = (username: string): LeetCodeStats => {
  const [stats, setStats] = useState<LeetCodeStats>({
    totalSolved: 0,
    totalQuestions: 0,
    easySolved: 0,
    easyTotal: 0,
    mediumSolved: 0,
    mediumTotal: 0,
    hardSolved: 0,
    hardTotal: 0,
    ranking: 0,
    acceptanceRate: 0,
    streak: 0,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        setStats(prev => ({ ...prev, loading: true, error: null }));

        // Note: LeetCode doesn't provide a public API, so we'll use mock data
        // In a real implementation, you'd need to use a third-party service or scraping
        const mockStats: LeetCodeStats = {
          totalSolved: 300,
          totalQuestions: 3200,
          easySolved: 120,
          easyTotal: 800,
          mediumSolved: 150,
          mediumTotal: 1600,
          hardSolved: 30,
          hardTotal: 800,
          ranking: 25432,
          acceptanceRate: 78.5,
          streak: 45,
          loading: false,
          error: null
        };

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setStats(mockStats);

      } catch (error) {
        console.error('Error fetching LeetCode data:', error);
        setStats(prev => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        }));
      }
    };

    if (username) {
      fetchLeetCodeData();
    }
  }, [username]);

  return stats;
};
