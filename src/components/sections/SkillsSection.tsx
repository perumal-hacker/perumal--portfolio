
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Server, 
  Smartphone, 
  Globe, 
  GitBranch,
  Terminal,
  Layers,
  Zap,
  Cpu,
  Cloud,
  Shield
} from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: ['React Native', 'Flutter', 'Mobile UI/UX', 'Cross-platform'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Database & Storage',
      icon: Database,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'DevOps & Tools',
      icon: Terminal,
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Nginx'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Problem Solving',
      icon: Cpu,
      skills: ['Data Structures', 'Algorithms', 'System Design', 'LeetCode', 'Competitive Programming'],
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-green-400 dark:to-purple-400 mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-mono">
            Mastering the tools and technologies that power modern software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-500 dark:hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-xl card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10 dark:bg-opacity-20`}>
                  <category.icon className={`w-6 h-6 text-transparent bg-gradient-to-r ${category.color} bg-clip-text`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-mono">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-mono hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-green-400 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Years Coding', value: '3+', icon: Code },
            { label: 'Projects Built', value: '20+', icon: Layers },
            { label: 'LeetCode Solved', value: '300+', icon: Zap },
            { label: 'Technologies', value: '25+', icon: Shield }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-green-500/20 dark:to-blue-500/20 rounded-lg mb-3 group-hover:from-blue-500/30 group-hover:to-purple-500/30 dark:group-hover:from-green-500/30 dark:group-hover:to-blue-500/30 transition-colors">
                <stat.icon className="w-6 h-6 text-blue-600 dark:text-green-400" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
