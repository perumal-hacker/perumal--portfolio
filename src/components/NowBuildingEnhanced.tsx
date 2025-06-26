
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Monitor, Network, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BuildingTopic {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  progress: number;
  details: string[];
}

const NowBuildingEnhanced: React.FC = () => {
  const [currentTopic, setCurrentTopic] = useState(0);

  const topics: BuildingTopic[] = [
    {
      id: 'dbms',
      title: 'Database Management Systems',
      icon: <BookOpen className="w-6 h-6" />,
      description: 'Deep diving into advanced database concepts, optimization techniques, and distributed systems.',
      progress: 75,
      details: [
        'ACID Properties & Transaction Management',
        'Query Optimization & Indexing Strategies',
        'NoSQL vs SQL Database Design',
        'Distributed Database Systems'
      ]
    },
    {
      id: 'os',
      title: 'Operating Systems',
      icon: <Monitor className="w-6 h-6" />,
      description: 'Exploring system programming, process management, and kernel development.',
      progress: 60,
      details: [
        'Process Scheduling Algorithms',
        'Memory Management & Virtual Memory',
        'File System Implementation',
        'Concurrency & Synchronization'
      ]
    },
    {
      id: 'networks',
      title: 'Computer Networks',
      icon: <Network className="w-6 h-6" />,
      description: 'Understanding network protocols, security, and distributed computing.',
      progress: 85,
      details: [
        'TCP/IP Protocol Suite',
        'Network Security & Cryptography',
        'Routing Algorithms & Protocols',
        'Software Defined Networking (SDN)'
      ]
    },
    {
      id: 'systems',
      title: 'Computer Systems',
      icon: <Cpu className="w-6 h-6" />,
      description: 'Learning computer architecture, assembly language, and system optimization.',
      progress: 40,
      details: [
        'CPU Architecture & Instruction Sets',
        'Assembly Language Programming',
        'Cache Memory & Performance Optimization',
        'Parallel Computing & Multi-threading'
      ]
    }
  ];

  const nextTopic = () => {
    setCurrentTopic((prev) => (prev + 1) % topics.length);
  };

  const prevTopic = () => {
    setCurrentTopic((prev) => (prev - 1 + topics.length) % topics.length);
  };

  const current = topics[currentTopic];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between text-lg font-mono">
            <span className="text-gray-800 dark:text-white">Now Building</span>
            <div className="flex gap-1">
              <button
                onClick={prevTopic}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
              <button
                onClick={nextTopic}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-green-500/20 rounded-lg">
                  <div className="text-blue-600 dark:text-green-400">
                    {current.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 dark:text-white font-mono text-sm">
                    {current.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-green-500 dark:to-blue-500 h-1.5 rounded-full transition-all duration-300"
                        style={{ width: `${current.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-mono">
                      {current.progress}%
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-600 dark:text-gray-400 font-mono leading-relaxed">
                {current.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 font-mono">
                  Current Focus:
                </h4>
                <ul className="space-y-1">
                  {current.details.map((detail, index) => (
                    <li
                      key={index}
                      className="text-xs text-gray-600 dark:text-gray-400 font-mono flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-blue-500 dark:bg-green-500 rounded-full flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Topic indicators */}
          <div className="flex justify-center gap-1 pt-2">
            {topics.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTopic(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentTopic
                    ? 'bg-blue-500 dark:bg-green-500'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default NowBuildingEnhanced;
