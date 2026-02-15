import React, { useState, useEffect } from 'react';
import { SEMESTERS } from './data/curriculum';
import { Semester, Course, AIInsight } from './types';
import SemesterCard from './components/SemesterCard';
import CProgrammingContent from './components/CProgrammingContent';
import { getCourseInsight } from './services/geminiService';

type View = 'home' | 'semester' | 'course-detail';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedSemester, setSelectedSemester] = useState<Semester | null>(null);
  const [isWipOpen, setIsWipOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  });
  
  // AI Insight States
  const [insight, setInsight] = useState<AIInsight | null>(null);
  const [isLoadingInsight, setIsLoadingInsight] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleSemesterClick = (semester: Semester) => {
    setSelectedSemester(semester);
    setCurrentView('semester');
  };

  const handleCourseClick = (course: Course) => {
    if (course.name === "Programming Concept with C") {
      setCurrentView('course-detail');
      window.scrollTo(0, 0);
    } else {
      setIsWipOpen(true);
    }
  };

  const handleGetInsight = async (e: React.MouseEvent, course: Course) => {
    e.stopPropagation();
    setIsLoadingInsight(true);
    setIsModalOpen(true);
    const result = await getCourseInsight(course.name);
    setInsight(result);
    setIsLoadingInsight(false);
  };

  const goHome = () => {
    setCurrentView('home');
    setSelectedSemester(null);
    setInsight(null);
  };

  const goBackToSemester = () => {
    setCurrentView('semester');
    setInsight(null);
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Header Section */}
      <header className="bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 shadow-sm backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <button onClick={goHome} className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg transition-transform group-hover:rotate-6 group-hover:scale-110">
              <span className="text-white font-black text-xl italic">B</span>
            </div>
            <h1 className="text-2xl font-black tracking-tight text-slate-800 dark:text-slate-100">BICTE Muji</h1>
          </button>
          
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              {currentView !== 'home' && (
                <>
                  <button onClick={goHome} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</button>
                  <span>/</span>
                  <button 
                    onClick={goBackToSemester} 
                    disabled={currentView === 'semester'}
                    className={currentView === 'semester' ? 'text-blue-600 dark:text-blue-400 underline underline-offset-4' : 'hover:text-blue-600 dark:hover:text-blue-400 transition-colors'}
                  >
                    SEM {selectedSemester?.id || 1}
                  </button>
                  {currentView === 'course-detail' && (
                    <>
                      <span>/</span>
                      <span className="text-blue-600 dark:text-blue-400">C Concepts</span>
                    </>
                  )}
                </>
              )}
              {currentView === 'home' && (
                <div className="flex items-center space-x-2 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-full border border-slate-100 dark:border-slate-700">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-slate-500 dark:text-slate-400">Live Portal</span>
                </div>
              )}
            </nav>

            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* VIEW: HOME */}
        {currentView === 'home' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tighter">
                Master Your <span className="text-blue-600 dark:text-blue-400">ICT Education</span> Journey
              </h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                A comprehensive interactive portal for BICTE students.
                Choose your semester to dive into specialized modules and AI-powered study guides.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SEMESTERS.map((sem) => (
                <SemesterCard
                  key={sem.id}
                  semester={sem}
                  isSelected={false}
                  onClick={() => handleSemesterClick(sem)}
                />
              ))}
            </div>
          </div>
        )}

        {/* VIEW: SEMESTER SUBJECTS */}
        {currentView === 'semester' && selectedSemester && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="bg-blue-600 dark:bg-blue-500 text-white font-bold text-[10px] uppercase px-3 py-1 rounded-full mb-3 inline-block tracking-widest">
                  Active Roadmap
                </span>
                <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">{selectedSemester.title}</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg italic">
                  &ldquo;{selectedSemester.description}&rdquo;
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center space-x-4">
                <div className="text-center px-4 border-r border-slate-100 dark:border-slate-800">
                  <div className="text-2xl font-black text-blue-600 dark:text-blue-400">{selectedSemester.courses.length}</div>
                  <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">Subjects</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-2xl font-black text-slate-800 dark:text-slate-200">18</div>
                  <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">Credits</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedSemester.courses.map((course) => (
                <div
                  key={course.id}
                  onClick={() => handleCourseClick(course)}
                  className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-blue-100 dark:hover:border-blue-700 transition-all duration-300 text-left group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/20 dark:bg-blue-900/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <span className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black rounded-full uppercase tracking-widest border border-slate-100 dark:border-slate-700">
                        {course.code}
                      </span>
                      <button 
                        onClick={(e) => handleGetInsight(e, course)}
                        className="p-2 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all transform hover:rotate-12"
                        title="AI Insight"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </button>
                    </div>
                    
                    <h4 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {course.name}
                    </h4>
                    <p className="text-sm text-slate-400 dark:text-slate-500 mb-8 line-clamp-2">
                      {course.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-blue-600 dark:text-blue-400 font-black text-sm uppercase tracking-tighter">
                        {course.name === "Programming Concept with C" ? "Access Modules" : "Coming Soon"}
                        <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                      <div className="text-[10px] font-bold text-slate-300 dark:text-slate-700">3 CREDITS</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: COURSE DETAIL */}
        {currentView === 'course-detail' && (
          <CProgrammingContent />
        )}
      </main>

      {/* AI Insight Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-md" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white dark:bg-slate-900 rounded-[32px] w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 border border-slate-200 dark:border-slate-800">
            <div className="p-8 bg-blue-600 dark:bg-blue-700 text-white flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-black">Curriculum Analytics</h4>
                  <p className="text-blue-100 text-[10px] font-bold uppercase tracking-widest">Powered by Gemini Pro</p>
                </div>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-blue-100 hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-10 max-h-[70vh] overflow-y-auto">
              {isLoadingInsight ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <div className="w-16 h-16 border-[6px] border-blue-600 dark:border-blue-500 border-t-transparent rounded-full animate-spin mb-6"></div>
                  <p className="text-slate-500 dark:text-slate-400 font-black text-lg">Thinking...</p>
                </div>
              ) : insight ? (
                <div className="space-y-8">
                  <div>
                    <h5 className="text-3xl font-black text-slate-800 dark:text-slate-100 mb-4 tracking-tighter">{insight.courseName}</h5>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">{insight.overview}</p>
                  </div>
                  
                  <div>
                    <h6 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 border-l-4 border-blue-600 dark:border-blue-500 pl-3">Key Focus Areas</h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {insight.keyTopics.map((topic, i) => (
                        <div key={i} className="flex items-center text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl text-sm font-bold border border-slate-100 dark:border-slate-800 shadow-sm">
                          <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 shrink-0"></span>
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800/50 p-8 rounded-[24px] border border-blue-100 dark:border-slate-700">
                    <h6 className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Career Prospects</h6>
                    <p className="text-blue-900 dark:text-slate-200 text-lg font-medium leading-relaxed italic">"{insight.careerPath}"</p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-red-500 font-bold">Failed to retrieve AI insights. Please check connection.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Work In Progress Modal */}
      {isWipOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-900/70 dark:bg-slate-950/90 backdrop-blur-sm" onClick={() => setIsWipOpen(false)}></div>
          <div className="relative bg-white dark:bg-slate-900 rounded-[40px] p-12 max-w-md w-full text-center shadow-2xl animate-in zoom-in-95 duration-200 border-8 border-slate-50 dark:border-slate-800">
            <div className="w-24 h-24 bg-amber-50 dark:bg-amber-900/20 rounded-3xl flex items-center justify-center text-amber-500 mx-auto mb-8 shadow-inner transform rotate-3">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-slate-100 mb-3 tracking-tighter">Under Construction</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-10 text-lg font-medium leading-relaxed">
              Our academic team is currently curating the best materials for this subject. It will be available shortly!
            </p>
            <button
              onClick={() => setIsWipOpen(false)}
              className="w-full py-5 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-slate-800 dark:hover:bg-blue-500 transition-all shadow-xl hover:scale-[1.02] active:scale-95"
            >
              Continue Exploring
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-32 py-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-slate-400 dark:text-slate-500 text-sm font-bold">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center font-black italic text-slate-400 dark:text-slate-500">B</div>
            <span>&copy; 2024 BICTE Interactive Portal.</span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-widest text-[10px]">Privacy</a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-widest text-[10px]">Academic Support</a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-widest text-[10px]">Feedback</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;