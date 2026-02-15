
import React from 'react';
import { Course } from '../types';

interface CourseListProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
}

const CourseList: React.FC<CourseListProps> = ({ courses, onSelectCourse }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {courses.map((course) => (
        <div 
          key={course.id}
          className="p-5 border border-slate-100 rounded-xl bg-white hover:border-blue-200 transition-colors group relative"
        >
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase mb-2 inline-block">
                {course.code}
              </span>
              <h4 className="text-lg font-semibold text-slate-800">{course.name}</h4>
              <p className="text-slate-500 text-sm mt-1">{course.description}</p>
            </div>
            <div className="text-xs font-medium text-slate-400">
              {course.credits} Credits
            </div>
          </div>
          <button 
            onClick={() => onSelectCourse(course)}
            className="mt-4 flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 group"
          >
            Get AI Insights
            <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
