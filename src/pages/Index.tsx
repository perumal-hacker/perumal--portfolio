
import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <ThemeToggle />
        
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          
          {/* Placeholder sections - will be implemented in next iteration */}
          <section id="education" className="section-padding">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-bold gradient-text mb-8">Education</h2>
              <div className="glass glass-dark p-8 rounded-2xl max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  K S Rangasamy College of Technology
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                  Bachelor of Engineering - Computer Science and Engineering
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">
                  2022 - 2026 | CGPA: 8.20
                </p>
              </div>
            </div>
          </section>

          <section id="certifications" className="section-padding bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-bold gradient-text mb-8">Certifications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Full Stack Web Development - Udemy',
                  'Data Structures & Algorithms in C - Udemy',
                  'ChatGPT & Generative AI - Udemy',
                  'Joy of Computing Using Python - NPTEL',
                  'Problem Solving Through Programming in C - NPTEL'
                ].map((cert, index) => (
                  <div key={index} className="glass glass-dark p-6 rounded-xl">
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="achievements" className="section-padding">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-bold gradient-text mb-8">Achievements</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass glass-dark p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    🏆 Hackathon Participation
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Bhumi Hackathon 2024-2025</li>
                    <li>• Smart India Hackathon 2024</li>
                  </ul>
                </div>
                <div className="glass glass-dark p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    🎯 Coding Competitions
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Active on LeetCode platform</li>
                    <li>• Participated in tech symposiums</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold gradient-text mb-8">Get In Touch</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
                I'm always interested in new opportunities and collaborations. 
                Let's connect and build something amazing together!
              </p>
              
              <div className="glass glass-dark p-8 rounded-2xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Info</h3>
                    <div className="space-y-4 text-left">
                      <p className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                        <span className="w-5 h-5">📧</span>
                        perumal.infonet@gmail.com
                      </p>
                      <p className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                        <span className="w-5 h-5">🔗</span>
                        LinkedIn: /in/perumal-s-dev
                      </p>
                      <p className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                        <span className="w-5 h-5">💻</span>
                        GitHub: /perumal-hacker
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Send Message</h3>
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © 2024 Perumal S. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
