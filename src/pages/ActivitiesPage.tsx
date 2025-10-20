import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Calendar, Users, GraduationCap, School, Briefcase, Target, Award, ArrowRight } from 'lucide-react';

const classes = [
  {
    title: "Teaching Assistant – Unity3D",
    level: "Master's Degree",
    institution: "Rennes University, France",
    year: "2025",
    semester: "",
  description: [
      "Designed and conducted course and project sessions",
      "Developed course materials",
      "Created and graded exams"
    ],    
    students: "25 students",
    hours: "18 hours",
    topics: ["18 hours"],
    achievements: ""
  },
  {
    title: "Teaching Assistant - Java programming",
    level: "Bachelor's Degree",
    institution: "INSA Rennes, France",
    year: "2025",
    semester: "",
    description: [
      "Designed and conducted course and project sessions",
      "Developed course materials",
      "Created and graded exams"
    ],
    students: "25 students",
    hours: "18 hours",
    topics: ["18 hours"],
    achievements: ""
  },
  {
    title: "Teaching Assistant – Unity3D",
    level: "Master's Degree",
    institution: "Rennes University, France",
    year: "2024",
    semester: "",
  description: [
      "Designed and conducted course and project sessions",
      "Developed course materials",
      "Created and graded exams"
    ],    
    students: "25 students",
    hours: "18 hours",
    topics: ["18 hours"],
    achievements: ""
  },
  {
    title: "Teaching Assistant - Database & SQL",
    level: "Bachelor's Degree",
    institution: "INSA Rennes, France",
    year: "2024",
    semester: "",
    description: [
      "Designed and conducted course and project sessions",
      "Developed course materials",
      "Created and graded exams"
    ],    
    students: "14 undergraduate students",
    hours: "26 hours",
    topics: ["Database", "SQL"],
    achievements: ""
  },
];

const projects = [
  {
    title: "Quantum Education Initiative",
    role: "Project Lead",
    organization: "National Science Foundation",
    period: "2023 - Present",
    description: "Leading a national initiative to develop and implement quantum computing curriculum across universities.",
    impact: [
      "Reached 1000+ students across 15 universities",
      "Developed comprehensive teaching materials",
      "Established industry partnerships for internships"
    ],
    status: "Ongoing",
    budget: "$500,000",
    team: "8 members"
  },
  {
    title: "Quantum Software Development Lab",
    role: "Technical Director",
    organization: "University Research Center",
    period: "2022 - 2023",
    description: "Established and managed a laboratory focused on quantum software development and testing.",
    impact: [
      "Created 5 new quantum software tools",
      "Published 3 research papers",
      "Trained 25 graduate students"
    ],
    status: "Completed",
    budget: "$300,000",
    team: "12 members"
  },
  {
    title: "International Quantum Workshop Series",
    role: "Coordinator",
    organization: "European Quantum Initiative",
    period: "2022",
    description: "Organized and coordinated a series of international workshops on quantum computing education.",
    impact: [
      "Hosted 6 workshops across Europe",
      "500+ total participants",
      "Created lasting international collaborations"
    ],
    status: "Completed",
    budget: "$150,000",
    team: "5 members"
  }
];

type ActivityType = 'classes' | 'projects';

export default function ActivitiesPage() {
  const [activeTab, setActiveTab] = useState<ActivityType>('classes');

  const TabButton = ({ type, label, icon: Icon }: { type: ActivityType, label: string, icon: React.ElementType }) => (
    <button
      onClick={() => setActiveTab(type)}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
        activeTab === type
          ? 'bg-[#2A2522] text-white shadow-lg'
          : 'bg-white hover:bg-[#2A2522] hover:text-white'
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );

  const renderContent = () => {
    if (activeTab === 'classes') {
      return (
        <div className="grid grid-cols-1 gap-8">
          {classes.map((course, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-serif">{course.title}</h3>
                  <span className="flex items-center gap-2 text-sm bg-[#FDF8F5] px-3 py-1 rounded-full">
                    <Calendar size={16} />
                    {course.semester} {course.year}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 text-gray-600 mb-4">
                  <span className="flex items-center gap-2">
                    <GraduationCap size={16} />
                    {course.level}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users size={16} />
                    {course.students}
                  </span>
                </div>

                <ul className="text-gray-800 mb-6 list-disc list-inside pl-6">
                  {course.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>       

                <div className="flex flex-wrap gap-2 mb-6">
                  {course.topics.map((topic, topicIndex) => (
                    <span key={topicIndex} className="px-3 py-1 bg-[#FDF8F5] text-sm rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center gap-2 text-[#C17F59]">
                    <School size={16} />
                    <span>{course.institution}</span>
                  </div>
                  {course.achievements && (
                    <p className="mt-2 text-gray-600">
                      {course.achievements}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-2xl font-serif">{project.title}</h3>
                <span className="flex items-center gap-2 text-sm bg-[#FDF8F5] px-3 py-1 rounded-full">
                  <Calendar size={16} />
                  {project.period}
                </span>
              </div>
              
              <div className="flex items-center gap-4 text-gray-600 mb-4">
                <span className="flex items-center gap-2">
                  <Briefcase size={16} />
                  {project.role}
                </span>
                <span className="flex items-center gap-2">
                  <Users size={16} />
                  {project.team}
                </span>
              </div>

              <p className="text-gray-800 mb-6">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                  <Target size={18} className="text-[#C17F59]" />
                  Impact & Achievements
                </h4>
                <ul className="space-y-2">
                  {project.impact.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ArrowRight size={16} className="text-[#C17F59]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#C17F59]">
                  <Award size={16} />
                  <span>{project.organization}</span>
                </div>
                <span className="text-sm bg-[#FDF8F5] px-3 py-1 rounded-full">
                  Budget: {project.budget}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FDF8F5]">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <header className="mb-16">
          <h1 className="text-6xl md:text-8xl font-serif text-[#2A2522] opacity-50 tracking-wider mb-8">
            ACTIVITIES
          </h1>
          <p className="text-xl md:text-2xl text-[#2A2522] max-w-2xl">
            Teaching experience
          </p>
        </header>

        <div className="flex flex-wrap gap-4 mb-12">
          <TabButton 
            type="classes" 
            label="Teaching Experience" 
            icon={School}
          />
          
        </div>

        {renderContent()}
      </main>
    </div>
  );
}