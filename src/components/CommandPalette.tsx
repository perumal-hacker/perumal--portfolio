
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Code, User, Briefcase, Trophy, Mail, ExternalLink } from 'lucide-react';

interface Command {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  action: () => void;
}

const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const commands: Command[] = [
    {
      id: 'about',
      title: 'About Me',
      description: 'Learn more about my background',
      icon: User,
      action: () => scrollToSection('about')
    },
    {
      id: 'projects',
      title: 'Projects',
      description: 'View my featured projects',
      icon: Code,
      action: () => scrollToSection('projects')
    },
    {
      id: 'skills',
      title: 'Technical Arsenal',
      description: 'Explore my technical skills',
      icon: Briefcase,
      action: () => scrollToSection('skills')
    },
    {
      id: 'leetcode',
      title: 'LeetCode Profile',
      description: 'View my coding analytics',
      icon: Trophy,
      action: () => scrollToSection('leetcode')
    },
    {
      id: 'contact',
      title: 'Contact',
      description: 'Get in touch with me',
      icon: Mail,
      action: () => scrollToSection('contact')
    },
    {
      id: 'github',
      title: 'GitHub Profile',
      description: 'Visit my GitHub repositories',
      icon: ExternalLink,
      action: () => window.open('https://github.com/perumal-hacker', '_blank')
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const filteredCommands = commands.filter(command =>
    command.title.toLowerCase().includes(query.toLowerCase()) ||
    command.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
        setQuery('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="fixed top-1/4 left-1/2 transform -translate-x-1/2 w-full max-w-lg z-50"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search commands..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none font-mono"
                  autoFocus
                />
              </div>
              <div className="max-h-64 overflow-y-auto">
                {filteredCommands.map((command) => (
                  <motion.button
                    key={command.id}
                    whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                    onClick={command.action}
                    className="w-full flex items-center gap-3 p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <command.icon className="w-5 h-5 text-blue-600 dark:text-green-400" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white font-mono">
                        {command.title}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                        {command.description}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
              <div className="p-3 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400 font-mono">
                Press <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Ctrl + K</kbd> to open • <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Esc</kbd> to close
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
