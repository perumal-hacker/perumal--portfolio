
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Code, Brain, Database, Zap } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const skillCategories = {
    'Frontend': [
      { 
        name: 'React', 
        icon: '⚛️', 
        level: 90, 
        achievement: 'Built 10+ Projects',
        color: 'from-blue-400 to-blue-600'
      },
      { 
        name: 'JavaScript', 
        icon: '🟨', 
        level: 92, 
        achievement: 'Advanced ES6+',
        color: 'from-yellow-400 to-yellow-600'
      },
      { 
        name: 'TypeScript', 
        icon: '💙', 
        level: 88, 
        achievement: 'Type-Safe Code',
        color: 'from-blue-500 to-blue-700'
      },
      { 
        name: 'Tailwind CSS', 
        icon: '🎨', 
        level: 85, 
        achievement: 'Responsive Design',
        color: 'from-cyan-400 to-cyan-600'
      },
    ],
    'Backend': [
      { 
        name: 'Node.js', 
        icon: '💚', 
        level: 87, 
        achievement: 'Backend Expert',
        color: 'from-green-400 to-green-600'
      },
      { 
        name: 'Express.js', 
        icon: '🚀', 
        level: 85, 
        achievement: 'API Development',
        color: 'from-gray-400 to-gray-600'
      },
      { 
        name: 'MongoDB', 
        icon: '🗄️', 
        level: 82, 
        achievement: 'Database Design',
        color: 'from-green-500 to-green-700'
      },
      { 
        name: 'MySQL', 
        icon: '🗃️', 
        level: 80, 
        achievement: 'Query Optimization',
        color: 'from-blue-500 to-blue-700'
      },
    ],
    'Programming': [
      { 
        name: 'Java', 
        icon: '☕', 
        level: 93, 
        achievement: 'LeetCode Expert',
        color: 'from-orange-400 to-red-600'
      },
      { 
        name: 'Python', 
        icon: '🐍', 
        level: 85, 
        achievement: 'Automation & Scripting',
        color: 'from-blue-400 to-green-500'
      },
      { 
        name: 'C/C++', 
        icon: '⚡', 
        level: 80, 
        achievement: 'System Programming',
        color: 'from-indigo-400 to-purple-600'
      },
    ],
    'DSA & Problem Solving': [
      { 
        name: 'Data Structures', 
        icon: '🧠', 
        level: 90, 
        achievement: 'Advanced Knowledge',
        color: 'from-purple-400 to-purple-600'
      },
      { 
        name: 'Algorithms', 
        icon: '⚡', 
        level: 88, 
        achievement: 'Problem Solving',
        color: 'from-yellow-500 to-orange-600'
      },
      { 
        name: 'LeetCode', 
        icon: '🎯', 
        level: 85, 
        achievement: '300+ Problems Solved',
        color: 'from-green-400 to-green-600'
      },
      { 
        name: 'System Design', 
        icon: '🏗️', 
        level: 75, 
        achievement: 'Scalable Solutions',
        color: 'from-teal-400 to-teal-600'
      },
    ]
  };

  const filterOptions = ['All', 'Frontend', 'Backend', 'Programming', 'DSA & Problem Solving'];

  const getFilteredSkills = () => {
    if (activeFilter === 'All') {
      return Object.entries(skillCategories).flatMap(([category, skills]) =>
        skills.map(skill => ({ ...skill, category }))
      );
    }
    return skillCategories[activeFilter as keyof typeof skillCategories]?.map(skill => 
      ({ ...skill, category: activeFilter })
    ) || [];
  };

  return (
    <section id="skills" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 font-mono">
            Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-purple-400 mx-auto mb-6" />
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-mono">
            Comprehensive skill set forged through hands-on development and continuous problem-solving
          </p>
        </motion.div>

        {/* Special DSA + LeetCode Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 border border-green-500/30 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">
                  <Brain className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-mono">DSA + LeetCode Mastery</h3>
                  <p className="text-gray-300 font-mono">300+ Problems Solved | Advanced Problem Solving</p>
                </div>
              </div>
              <div className="flex gap-4 ml-auto">
                <a
                  href="https://leetcode.com/u/perumalhacks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 font-mono font-medium"
                >
                  View LeetCode Profile
                </a>
                <a
                  href="https://github.com/perumal-hacker#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 font-mono font-medium"
                >
                  GitHub README
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 font-mono ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                  : 'bg-gray-900 text-gray-300 hover:bg-gray-800 border border-gray-700 hover:border-green-500/50'
              }`}
            >
              <Filter className="w-4 h-4" />
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {getFilteredSkills().map((skill, index) => (
            <motion.div
              key={`${skill.name}-${skill.category}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gray-900/50 border border-gray-700 hover:border-green-500/50 rounded-xl p-6 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{skill.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors font-mono">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-400 font-mono">{skill.category}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-400 font-mono">{skill.level}%</div>
                  <div className="text-xs text-gray-400 font-mono">Proficiency</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 font-mono">Achievement</span>
                  <span className="text-green-400 font-medium font-mono">🚀 {skill.achievement}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white font-mono">Full-Stack Mastery</h3>
            </div>
            <p className="text-gray-300 mb-6 font-mono">
              End-to-end development expertise from database design to responsive frontend interfaces.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 font-mono">10+</div>
                <div className="text-sm text-gray-400 font-mono">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 font-mono">MERN</div>
                <div className="text-sm text-gray-400 font-mono">Stack Expert</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 border border-green-500/30 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-bold text-white font-mono">Problem Solving Elite</h3>
            </div>
            <p className="text-gray-300 mb-6 font-mono">
              Advanced algorithmic thinking with proven track record in competitive programming.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 font-mono">300+</div>
                <div className="text-sm text-gray-400 font-mono">LeetCode Solved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 font-mono">DSA</div>
                <div className="text-sm text-gray-400 font-mono">Expert Level</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
