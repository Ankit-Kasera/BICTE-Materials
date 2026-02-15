
import { Semester } from '../types';

export const SEMESTERS: Semester[] = [
  {
    id: 1,
    title: "First Semester",
    description: "Foundations of ICT and Education",
    courses: [
      { id: "s1c1", code: "NEP 411", name: "General Nepali-I", description: "Nepali language and communication skills.", credits: 3 },
      { id: "s1c2", code: "ENG 411", name: "General English-I", description: "Professional communication and academic writing.", credits: 3 },
      { id: "s1c3", code: "ED 411", name: "Fundamentals of Education", description: "Principles and foundations of educational systems.", credits: 3 },
      { id: "s1c4", code: "ICT 411", name: "Introduction to Information Technology", description: "Basics of computer systems and hardware.", credits: 3 },
      { id: "s1c5", code: "ICT 412", name: "Programming Concept with C", description: "Fundamental logic and programming using C.", credits: 3 },
      { id: "s1c6", code: "MATH 411", name: "Mathematics-I", description: "Foundational mathematics for computing.", credits: 3 }
    ]
  },
  {
    id: 2,
    title: "Second Semester",
    description: "Core Programming and Logic",
    courses: [
      { id: "s2c1", code: "ICTE 421", name: "Object Oriented Programming", description: "C++ concepts, classes, and inheritance.", credits: 3 },
      { id: "s2c2", code: "ICTE 422", name: "Microprocessor", description: "Architecture and assembly language.", credits: 3 },
      { id: "s2c3", code: "MATH 421", name: "Mathematics II", description: "Linear algebra and discrete math.", credits: 3 },
      { id: "s2c4", code: "SOC 421", name: "Sociology of Education", description: "Understanding social impact on learning.", credits: 3 }
    ]
  },
  {
    id: 3,
    title: "Third Semester",
    description: "Data and Systems Management",
    courses: [
      { id: "s3c1", code: "ICTE 431", name: "Data Structure & Algorithm", description: "Stacks, queues, trees, and sorting.", credits: 3 },
      { id: "s3c2", code: "ICTE 432", name: "Database Management System", description: "SQL, normalization, and relational models.", credits: 3 },
      { id: "s3c3", code: "ICTE 433", name: "Operating System", description: "Process management and memory allocation.", credits: 3 },
      { id: "s3c4", code: "PSY 431", name: "Educational Psychology", description: "Cognitive development and learning theories.", credits: 3 }
    ]
  },
  {
    id: 4,
    title: "Fourth Semester",
    description: "Web and Network Infrastructure",
    courses: [
      { id: "s4c1", code: "ICTE 441", name: "Web Technology I", description: "HTML, CSS, JavaScript basics.", credits: 3 },
      { id: "s4c2", code: "ICTE 442", name: "Computer Network", description: "OSI models, TCP/IP, and routing.", credits: 3 },
      { id: "s4c3", code: "ICTE 443", name: "Software Engineering", description: "SDLC, agile, and software testing.", credits: 3 },
      { id: "s4c4", code: "ED 441", name: "Curriculum and Evaluation", description: "Designing effective educational materials.", credits: 3 }
    ]
  },
  {
    id: 5,
    title: "Fifth Semester",
    description: "Advanced Development and Pedagogy",
    courses: [
      { id: "s5c1", code: "ICTE 451", name: "Java Programming", description: "Enterprise Java and GUI development.", credits: 3 },
      { id: "s5c2", code: "ICTE 452", name: "Computer Graphics", description: "2D/3D transformations and rendering.", credits: 3 },
      { id: "s5c3", code: "ICTE 453", name: "Instructional Technology", description: "Using ICT in classroom environments.", credits: 3 },
      { id: "s5c4", code: "ED 451", name: "Methods of Teaching", description: "Pedagogical strategies for technical subjects.", credits: 3 }
    ]
  },
  {
    id: 6,
    title: "Sixth Semester",
    description: "Intelligence and Research",
    courses: [
      { id: "s6c1", code: "ICTE 461", name: "Artificial Intelligence", description: "Search, logic, and machine learning.", credits: 3 },
      { id: "s6c2", code: "ICTE 462", name: "Mobile App Development", description: "Android and iOS development frameworks.", credits: 3 },
      { id: "s6c3", code: "ICTE 463", name: "Educational Research", description: "Quantitative and qualitative methods.", credits: 3 },
      { id: "s6c4", code: "ICTE 464", name: "Multimedia Tech", description: "Audio, video, and animation production.", credits: 3 }
    ]
  },
  {
    id: 7,
    title: "Seventh Semester",
    description: "Security and Cloud",
    courses: [
      { id: "s7c1", code: "ICTE 471", name: "Cyber Security", description: "Cryptography and network defense.", credits: 3 },
      { id: "s7c2", code: "ICTE 472", name: "Cloud Computing", description: "AWS, Azure, and virtualization.", credits: 3 },
      { id: "s7c3", code: "ICTE 473", name: "ICT Internship", description: "Professional placement and field work.", credits: 3 },
      { id: "s7c4", code: "ED 471", name: "Educational Management", description: "School administration and leadership.", credits: 3 }
    ]
  },
  {
    id: 8,
    title: "Eighth Semester",
    description: "Graduation and Specialization",
    courses: [
      { id: "s8c1", code: "ICTE 481", name: "Final Project", description: "Comprehensive software/research project.", credits: 6 },
      { id: "s8c2", code: "ICTE 482", name: "E-Governance", description: "IT implementation in public sector.", credits: 3 },
      { id: "s8c3", code: "ICTE 483", name: "MIS", description: "Management Information Systems strategy.", credits: 3 },
      { id: "s8c4", code: "ICTE 484", name: "Entrepreneurship", description: "Business models in the tech industry.", credits: 3 }
    ]
  }
];
