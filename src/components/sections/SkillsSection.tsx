import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Wrench } from 'lucide-react';

type Category = {
  title: string;
  icon: React.ElementType;
  accent: string;
  skills: string[];
};

const categories: Category[] = [
  {
    title: 'Frontend',
    icon: Layout,
    accent: 'from-blue-500 to-cyan-500',
    skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: Server,
    accent: 'from-purple-500 to-pink-500',
    skills: ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'REST APIs'],
  },
  {
    title: 'Database',
    icon: Database,
    accent: 'from-emerald-500 to-teal-500',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    accent: 'from-orange-500 to-amber-500',
    skills: ['Git', 'GitHub', 'Postman', 'Vercel'],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-3">// Tech Stack</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A modern full-stack toolkit for building production-grade applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] hover:border-gray-300 dark:hover:border-white/20 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/5 dark:hover:shadow-black/40"
            >
              <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-br ${cat.accent} mb-5`}>
                <cat.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((s) => (
                  <li
                    key={s}
                    className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
