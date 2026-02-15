import React from 'react';
import { Semester } from '../types';

interface SemesterCardProps {
  semester: Semester;
  isSelected: boolean;
  onClick: () => void;
}

const SemesterCard: React.FC<SemesterCardProps> = ({ semester, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative p-6 rounded-2xl transition-all duration-300 text-left group overflow-hidden border border-transparent ${
        isSelected
          ? 'bg-blue-600 text-white shadow-xl scale-[1.02]'
          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:shadow-lg dark:hover:shadow-blue-900/10 hover:-translate-y-1 dark:border-slate-800'
      }`}
    >
      <div className="flex justify-between items-start mb-4 relative z-10">
        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${
          isSelected ? 'bg-blue-500/50' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
        }`}>
          SEM {semester.id}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          isSelected ? 'bg-blue-400/30' : 'bg-blue-50 dark:bg-blue-800/50 text-blue-500 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-700/50'
        }`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 relative z-10">{semester.title}</h3>
      <p className={`text-sm line-clamp-2 relative z-10 ${isSelected ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
        {semester.description}
      </p>
      
      {/* Decorative gradient overlay */}
      {!isSelected && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 dark:to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </button>
  );
};

export default SemesterCard;