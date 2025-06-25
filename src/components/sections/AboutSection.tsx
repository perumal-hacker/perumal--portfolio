
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Brain, Zap, GitBranch, Target, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'MERN Stack Specialist',
      description: 'Expert in MongoDB, Express.js, React, and Node.js development'
    },
    {
      icon: Brain,
      title: 'Problem Solver',
      description: '300+ LeetCode problems solved with strong DSA foundation'
    },
    {
      icon: Database,
      title: 'Database Expert',
      description: 'Advanced DBMS knowledge and database optimization techniques'
    },
    {
      icon: Server,
      title: 'Backend Systems',
      description: 'Scalable architectures, RESTful APIs, and microservices design'
    },
    {
      icon: Zap,
      title: 'Modern Web Tech',
      description: 'Latest frameworks, tools, and development methodologies'
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Advanced Git workflows and collaborative development practices'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-green-400 dark:to-purple-400 mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-mono">
            Building scalable solutions with modern technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Enhanced animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-800 dark:from-green-500 dark:via-blue-500 dark:to-purple-500 rounded-2xl animate-glow shadow-2xl" />
              <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/9e154c14-e954-4b08-90fd-4026d9b69346.png" 
                  alt="Perumal S - Full Stack Developer"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              
              {/* Enhanced code snippet overlay */}
              <div className="absolute -bottom-4 -right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border border-blue-500/30 dark:border-green-500/30 rounded-lg p-3 font-mono text-xs text-blue-600 dark:text-green-400 shadow-xl">
                <div>{'{'}</div>
                <div className="ml-2">role: "Final-Year CSE Student",</div>
                <div className="ml-2">focus: "MERN + DSA + DBMS"</div>
                <div>{'}'}</div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-mono">
                Final-Year CSE Student & Full-Stack Developer
              </h3>
              
              {/* Enhanced professional highlights with terminal-style formatting */}
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-lg p-6 font-mono text-sm shadow-lg">
                <div className="text-blue-600 dark:text-green-400 mb-4">~/about-me$ cat profile.txt</div>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <div><span className="text-blue-500 dark:text-blue-400">▸</span> I'm a final-year Computer Science Engineering student with deep expertise in the MERN stack</div>
                  <div><span className="text-green-500 dark:text-green-400">▸</span> Strong experience in DSA, backend development, and scalable software architecture</div>
                  <div><span className="text-purple-500 dark:text-purple-400">▸</span> Solved 300+ problems on LeetCode with advanced problem-solving skills</div>
                  <div><span className="text-yellow-500 dark:text-yellow-400">▸</span> Currently mastering DBMS and database optimization techniques</div>
                  <div><span className="text-cyan-500 dark:text-cyan-400">▸</span> Building innovative full-stack applications with modern web technologies</div>
                  <div><span className="text-pink-500 dark:text-pink-400">▸</span> Passionate about creating efficient, maintainable, and scalable solutions</div>
                  <div><span className="text-orange-500 dark:text-orange-400">▸</span> Constantly exploring new technologies and development methodologies</div>
                </div>
              </div>
            </div>

            {/* Enhanced Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-green-500/50 p-4 rounded-lg transition-all duration-300 hover:bg-white dark:hover:bg-gray-800/50 shadow-lg card-hover"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-green-500/20 dark:to-blue-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-500/30 dark:group-hover:from-green-500/30 dark:group-hover:to-blue-500/30 transition-colors">
                      <item.icon className="w-5 h-5 text-blue-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://github.com/perumal-hacker"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-green-600 dark:to-blue-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 dark:hover:from-green-700 dark:hover:to-blue-700 transition-all duration-300 font-medium shadow-lg"
              >
                <GitBranch className="w-4 h-4" />
                View GitHub Profile
              </a>
              <a
                href="https://leetcode.com/u/perumalhacks/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 font-medium shadow-lg"
              >
                <Target className="w-4 h-4" />
                LeetCode Profile
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
