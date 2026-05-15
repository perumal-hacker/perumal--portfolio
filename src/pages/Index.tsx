
import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';
import CursorTrail from '@/components/effects/CursorTrail';
import CommandPalette from '@/components/CommandPalette';
import NowBuildingWidget from '@/components/NowBuildingWidget';
import PortfolioViewCounter from '@/components/PortfolioViewCounter';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import LeetCodeSection from '@/components/sections/LeetCodeSection';
import CertificationsSection from '@/components/sections/CertificationsSection';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white">
        <CursorTrail />
        <Navigation />
        <ThemeToggle />
        <CommandPalette />
        <NowBuildingWidget />
        <PortfolioViewCounter />
        
        <main>
          <HeroSection />
          <AboutSection />

          {/* Experience Section */}
          <section id="experience" className="py-24 px-6 bg-gray-50 dark:bg-[#0a0a0a]">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <p className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-3">// Experience</p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ letterSpacing: '-0.03em' }}>
                  Professional Journey
                </h2>
              </div>

              <div className="relative pl-8 border-l-2 border-gray-200 dark:border-white/10">
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 ring-4 ring-white dark:ring-[#0a0a0a]" />
                <div className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:border-gray-300 dark:hover:border-white/20 transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                        Trainee Associate Software Engineer
                      </h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">
                        Java Full Stack Developer
                      </p>
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10">
                      Internship
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    Built enterprise-grade applications using Java, Spring Boot, REST APIs, and MySQL.
                    Designed clean, layered backend architectures and shipped a production-style
                    Vendor Management System.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'JPA'].map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/perumal-hacker/Vendor-Management"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    View Vendor Management Project →
                  </a>
                </div>
              </div>
            </div>
          </section>

          <SkillsSection />
          <ProjectsSection />
          <LeetCodeSection />

          {/* Enhanced Education Section */}
          <section id="education" className="section-padding bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto text-center px-4">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-8 font-mono">
                Education
              </h2>
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-green-500/50 p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto transition-all duration-300 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
                  K S Rangasamy College of Technology
                </h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-2 font-mono">
                  Bachelor of Engineering - Computer Science and Engineering
                </p>
                <p className="text-blue-600 dark:text-green-400 font-semibold font-mono">
                  2022 - 2026 | CGPA: 8.5
                </p>
              </div>
            </div>
          </section>

          <CertificationsSection />

          {/* Enhanced Achievements Section */}
          <section id="achievements" className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-800">
            <div className="max-w-7xl mx-auto text-center px-4">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-8 font-mono">
                Achievements
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-green-500/50 p-6 sm:p-8 rounded-2xl transition-all duration-300 group shadow-xl hover:shadow-2xl">
                  <div className="text-3xl sm:text-4xl mb-4">🏆</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 font-mono group-hover:text-blue-600 dark:group-hover:text-green-400 transition-colors">
                    Hackathon Participation
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 font-mono">
                    <li>• Bhumi Hackathon 2024-2025</li>
                    <li>• Smart India Hackathon 2024</li>
                  </ul>
                </div>
                
                <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500/50 p-6 sm:p-8 rounded-2xl transition-all duration-300 group shadow-xl hover:shadow-2xl">
                  <div className="text-3xl sm:text-4xl mb-4">🎯</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 font-mono group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Problem Solving Excellence
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 font-mono">
                    <li>• <strong className="text-blue-600 dark:text-green-400">400+ LeetCode Problems</strong> Solved</li>
                    <li>• Advanced DSA Mastery</li>
                    <li>• Competitive Programming</li>
                  </ul>
                </div>
                
                <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500/50 p-6 sm:p-8 rounded-2xl transition-all duration-300 group shadow-xl hover:shadow-2xl sm:col-span-2 lg:col-span-1">
                  <div className="text-3xl sm:text-4xl mb-4">💻</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 font-mono group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Development Milestones
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 font-mono">
                    <li>• 10+ Full-Stack Projects</li>
                    <li>• MERN Stack Expertise</li>
                    <li>• Open Source Contributions</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Contact Section */}
          <section id="contact" className="section-padding bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-8 font-mono">
                Get In Touch
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-12 font-mono">
                Ready to collaborate on innovative projects? Let's build something amazing together.
              </p>
              
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-green-500/50 p-6 sm:p-8 rounded-2xl transition-all duration-300 shadow-xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-mono">Contact Information</h3>
                    <div className="space-y-4 text-left">
                      <a href="mailto:perumal.infonet@gmail.com" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-green-400 transition-colors font-mono">
                        <span className="w-5 h-5">📧</span>
                        <span className="text-sm sm:text-base break-all">perumal.infonet@gmail.com</span>
                      </a>
                      <a href="https://www.linkedin.com/in/perumal-s-dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-mono">
                        <span className="w-5 h-5">🔗</span>
                        <span className="text-sm sm:text-base break-all">linkedin.com/in/perumal-s-dev</span>
                      </a>
                      <a href="https://github.com/perumal-hacker" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-green-400 transition-colors font-mono">
                        <span className="w-5 h-5">💻</span>
                        <span className="text-sm sm:text-base break-all">github.com/perumal-hacker</span>
                      </a>
                      <a href="https://leetcode.com/u/perumalhacks/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-mono">
                        <span className="w-5 h-5">⚡</span>
                        <span className="text-sm sm:text-base break-all">leetcode.com/u/perumalhacks</span>
                      </a>
                      <a href="https://wa.me/919384516247" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors font-mono">
                        <span className="w-5 h-5">📱</span>
                        <span className="text-sm sm:text-base">WhatsApp: +91 9384516247</span>
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-mono">Send Message</h3>
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-green-500 focus:border-transparent text-gray-900 dark:text-white font-mono text-sm sm:text-base"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-green-500 focus:border-transparent text-gray-900 dark:text-white font-mono text-sm sm:text-base"
                      />
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-green-500 focus:border-transparent text-gray-900 dark:text-white font-mono text-sm sm:text-base resize-none"
                      />
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-green-600 dark:to-blue-600 hover:from-blue-700 hover:to-purple-700 dark:hover:from-green-700 dark:hover:to-blue-700 text-white rounded-lg font-semibold transition-all duration-300 font-mono text-sm sm:text-base"
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

        {/* Enhanced Footer */}
        <footer className="bg-white/80 dark:bg-black/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-mono">
              © 2025 Perumal S. Crafted with passion and precision.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
