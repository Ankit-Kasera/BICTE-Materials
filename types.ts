
export interface Course {
  id: string;
  code: string;
  name: string;
  description: string;
  credits: number;
}

export interface Semester {
  id: number;
  title: string;
  courses: Course[];
  description: string;
}

export interface AIInsight {
  courseName: string;
  overview: string;
  keyTopics: string[];
  careerPath: string;
}
