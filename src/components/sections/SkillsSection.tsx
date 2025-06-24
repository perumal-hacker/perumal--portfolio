
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

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
        name: 'CSS/Tailwind', 
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
        name: 'SQL/MySQL', 
        icon: '🗃️', 
        level: 80, 
        achievement: 'Query Optimization',
        color: 'from-blue-500 to-blue-700'
      },
    ],
    'Programming Languages': [
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
    'CS Fundamentals': [
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
        name: 'System Design', 
        icon: '🏗️', 
        level: 75, 
        achievement: 'Scalable Solutions',
        color: 'from-teal-400 to-teal-600'
      },
      { 
        name: 'Database Design', 
        icon: '💾', 
        level: 82, 
        achievement: 'Normalization Expert',
        color: 'from-indigo-400 to-indigo-600'
      },
    ]
  };

  const filterOptions = ['All', 'Frontend', 'Backend', 'Programming Languages', 'CS Fundamentals'];

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
    <section id="skills" className="section-padding bg-gray-950 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-purple-400 mx-auto mb-6" />
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive technical skills developed through hands-on projects and continuous learning
          </p>
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
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
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
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{skill.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-400">{skill.category}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-400">{skill.level}%</div>
                  <div className="text-xs text-gray-400">Proficiency</div>
                </div>
              </div>
              
              <div className="space-y-2">
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
                  <span className="text-gray-400">Achievement</span>
                  <span className="text-green-400 font-medium">🚀 {skill.achievement}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category Overview */}
        {activeFilter === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                💻 Full-Stack Development
              </h3>
              <p className="text-gray-300 mb-4">
                Proficient in modern web technologies including React ecosystem, Node.js backend, and database management.
              </p>
              <div className="flex flex-wrap gap-2">
                {[...skillCategories['Frontend'], ...skillCategories['Backend']].slice(0, 4).map((skill) => (
                  <span key={skill.name} className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm">
                    {skill.icon} {skill.name}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 border border-green-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                🧠 Computer Science & Problem Solving
              </h3>
              <p className="text-gray-300 mb-4">
                Strong foundation in algorithms, data structures, and competitive programming with proven problem-solving skills.
              </p>
              <div className="flex flex-wrap gap-2">
                {[...skillCategories['Programming Languages'], ...skillCategories['CS Fundamentals']].slice(0, 4).map((skill) => (
                  <span key={skill.name} className="px-3 py-1 bg-green-600/30 text-green-300 rounded-full text-sm">
                    {skill.icon} {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
