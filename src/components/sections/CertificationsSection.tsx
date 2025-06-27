
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Eye, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CertificationsSection: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

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
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="glass glass-dark h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Award className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
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
                        <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-3">
                          Score: {cert.score}
                        </p>
                      )}
                      
                      {/* Preview Button */}
                      <Button
                        onClick={() => setPreviewImage(cert.image)}
                        variant="outline"
                        size="sm"
                        className="mb-4"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Preview Certificate
                      </Button>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
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

        {/* Image Preview Modal */}
        {previewImage && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <Button
                onClick={() => setPreviewImage(null)}
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
              >
                <X className="w-6 h-6" />
              </Button>
              <img
                src={previewImage}
                alt="Certificate Preview"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
