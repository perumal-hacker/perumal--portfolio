
import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import LeetCodeSection from '@/components/sections/LeetCodeSection';
import CertificationsSection from '@/components/sections/CertificationsSection';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        <Navigation />
        <ThemeToggle />
        
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <LeetCodeSection />

          {/* Education Section */}
          <section id="education" className="section-padding bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-8 font-mono">
                Education
              </h2>
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-green-500/50 p-8 rounded-2xl max-w-2xl mx-auto transition-all duration-300 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
                  K S Rangasamy College of Technology
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-2 font-mono">
                  Bachelor of Engineering - Computer Science and Engineering
                </p>
                <p className="text-blue-600 dark:text-green-400 font-semibold font-mono">
                  2022 - 2026 | CGPA: 8.20
                </p>
              </div>
            </div>
          </section>

          <CertificationsSection />

          {/* Enhanced Achievements Section */}
          <section id="achievements" className="section-padding bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-8 font-mono">
                Achievements
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-green-500/50 p-8 rounded-2xl transition-all duration-300 group shadow-lg">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-mono group-hover:text-blue-600 dark:group-hover:text-green-400 transition-colors">
                    Hackathon Participation
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 font-mono">
                    <li>• Bhumi Hackathon 2024-2025</li>
                    <li>• Smart India Hackathon 2024</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500/50 p-8 rounded-2xl transition-all duration-300 group shadow-lg">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-mono group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Problem Solving Excellence
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 font-mono">
                    <li>• <strong className="text-blue-600 dark:text-green-400">300+ LeetCode Problems</strong> Solved</li>
                    <li>• Advanced DSA Mastery</li>
                    <li>• Competitive Programming</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500/50 p-8 rounded-2xl transition-all duration-300 group shadow-lg">
                  <div className="text-4xl mb-4">💻</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-mono group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Development Milestones
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 font-mono">
                    <li>• 10+ Full-Stack Projects</li>
                    <li>• MERN Stack Expertise</li>
                    <li>• Open Source Contributions</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-950">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-8 font-mono">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 font-mono">
                Ready to collaborate on innovative projects? Let's build something amazing together.
              </p>
              
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-green-500/50 p-8 rounded-2xl transition-all duration-300 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-mono">Contact Information</h3>
                    <div className="space-y-4 text-left">
                      <a href="mailto:perumal.infonet@gmail.com" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-green-400 transition-colors font-mono">
                        <span className="w-5 h-5">📧</span>
                        perumal.infonet@gmail.com
                      </a>
                      <a href="https://www.linkedin.com/in/perumal-s-dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-mono">
                        <span className="w-5 h-5">🔗</span>
                        linkedin.com/in/perumal-s-dev
                      </a>
                      <a href="https://github.com/perumal-hacker" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-green-400 transition-colors font-mono">
                        <span className="w-5 h-5">💻</span>
                        github.com/perumal-hacker
                      </a>
                      <a href="https://leetcode.com/u/perumalhacks/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-mono">
                        <span className="w-5 h-5">⚡</span>
                        leetcode.com/u/perumalhacks
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-mono">Send Message</h3>
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-green-500 focus:border-transparent text-gray-900 dark:text-white font-mono"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-green-500 focus:border-transparent text-gray-900 dark:text-white font-mono"
                      />
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-green-500 focus:border-transparent text-gray-900 dark:text-white font-mono"
                      />
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-green-600 dark:to-blue-600 hover:from-blue-700 hover:to-purple-700 dark:hover:from-green-700 dark:hover:to-blue-700 text-white rounded-lg font-semibold transition-all duration-300 font-mono"
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
        <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 font-mono">
              © 2024 Perumal S. Crafted with passion and precision.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
