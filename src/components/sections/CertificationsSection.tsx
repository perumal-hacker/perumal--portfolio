
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, ChevronDown, ChevronUp, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CertificationsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const certifications = [
    {
      title: 'Full Stack Web Development MASTERY Course - Novice to Expert',
      provider: 'Udemy',
      instructor: 'Prerak Mehta',
      date: 'April 1, 2024',
      duration: '56 total hours',
      image: '/lovable-uploads/c84673c5-d6cb-44f1-999e-6645eb61b122.png',
      skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Full Stack Development']
    },
    {
      title: 'Mastering Data Structures & Algorithms using C and C++',
      provider: 'Udemy',
      instructor: 'Abdul Bari',
      date: 'Sept. 15, 2024',
      duration: '58.5 total hours',
      image: '/lovable-uploads/07b5a025-ea76-4654-8da3-bd8210375336.png',
      skills: ['Data Structures', 'Algorithms', 'C Programming', 'C++', 'Problem Solving']
    },
    {
      title: 'Data Structures and Algorithms using Java',
      provider: 'Infosys Springboard',
      date: 'January 2, 2025',
      image: '/lovable-uploads/dac8d140-32f9-433a-bbfb-f5c0dd011d7a.png',
      skills: ['Java', 'Data Structures', 'Algorithms', 'Object-Oriented Programming']
    },
    {
      title: 'Generative AI for All',
      provider: 'Infosys Springboard',
      date: 'May 5, 2025',
      image: '/lovable-uploads/70fdb43f-1254-407f-add6-9e07b522fedd.png',
      skills: ['Artificial Intelligence', 'Machine Learning', 'Generative AI', 'ChatGPT']
    },
    {
      title: 'The Joy of Computing Using Python',
      provider: 'NPTEL (IIT Madras)',
      date: 'Jul-Oct 2023',
      duration: '12 week course',
      score: '73%',
      image: '/lovable-uploads/0911b95c-8882-4b9d-ae5e-b96f672928ac.png',
      skills: ['Python Programming', 'Problem Solving', 'Computational Thinking']
    },
    {
      title: 'Privacy and Security in Online Social Media',
      provider: 'NPTEL (IIT Hyderabad)',
      date: 'Jan-Apr 2025',
      duration: '12 week course',
      score: '76%',
      image: '/lovable-uploads/08544948-3267-4164-9034-1fb38c8f044f.png',
      skills: ['Cybersecurity', 'Privacy Protection', 'Social Media Security', 'Network Security']
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Professional certifications and course completions that showcase my commitment to continuous learning and skill development.
          </p>
          
          {/* Toggle Button */}
          <motion.button
            onClick={() => setIsVisible(!isVisible)}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-green-600 dark:to-blue-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 dark:hover:from-green-700 dark:hover:to-blue-700 transition-all duration-300 font-medium shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye className="w-5 h-5" />
            {isVisible ? 'Hide Certifications' : 'View Certifications'}
            {isVisible ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Card className="glass glass-dark h-full overflow-hidden">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-4">
                          <Award className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                              {cert.title}
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                              {cert.provider}
                            </p>
                            {cert.instructor && (
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                Instructor: {cert.instructor}
                              </p>
                            )}
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                              {cert.date}
                            </p>
                            {cert.duration && (
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                Duration: {cert.duration}
                              </p>
                            )}
                            {cert.score && (
                              <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                                Score: {cert.score}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {cert.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CertificationsSection;
