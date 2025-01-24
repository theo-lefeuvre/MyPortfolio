import React from 'react';
import Navigation from '../components/Navigation';
import { Calendar, GraduationCap, Award, MapPin, BookOpen, Star } from 'lucide-react';

const degrees = [
  {
    title: "PhD in Quantum Computing",
    institution: "University of Science",
    location: "Paris, France",
    period: "2021 - Present",
    description: "Research focus on quantum algorithms and machine learning applications in quantum computing. Developing novel approaches for quantum circuit optimization using deep learning techniques.",
    achievements: [
      "Best Paper Award at International Quantum Computing Conference 2023",
      "Graduate Research Excellence Fellowship",
      "Teaching Assistant of the Year 2022"
    ],
    skills: [
      "Quantum Algorithm Design",
      "Machine Learning",
      "Quantum Circuit Optimization",
      "Research Methodology"
    ],
    advisor: "Prof. Marie Curie"
  },
  {
    title: "Master's in Computer Science",
    institution: "Technical University",
    location: "Lyon, France",
    period: "2019 - 2021",
    description: "Specialized in quantum computing and artificial intelligence. Graduated with highest honors. Master's thesis focused on quantum machine learning algorithms.",
    achievements: [],
    skills: [
      "Quantum Computing",
      "Artificial Intelligence",
      "Algorithm Design",
      "Scientific Computing"
    ],
    advisor: "Prof. Alan Turing"
  },
  {
    title: "Bachelor's in Physics",
    institution: "Science Academy",
    location: "Toulouse, France",
    period: "2016 - 2019",
    description: "Foundation in theoretical physics with focus on quantum mechanics and computational physics. Minor in computer science.",
    achievements: [
      "Dean's List all semesters",
      "Undergraduate Research Award",
      "Physics Department Scholarship"
    ],
    skills: [
      "Quantum Mechanics",
      "Computational Physics",
      "Programming",
      "Mathematics"
    ],
    advisor: "Prof. Richard Feynman"
  }
];

export default function FormationPage() {
  return (
    <div className="min-h-screen bg-[#FDF8F5]">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <header className="mb-16">
          <h1 className="text-6xl md:text-8xl font-serif text-[#2A2522] opacity-50 tracking-wider mb-8">
            FORMATION
          </h1>
          <p className="text-xl md:text-2xl text-[#2A2522] max-w-2xl">
            Academic journey and educational background in quantum computing and physics.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8">
          {degrees.map((degree, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-serif">{degree.title}</h3>
                  <span className="flex items-center gap-2 text-sm bg-[#FDF8F5] px-3 py-1 rounded-full">
                    <Calendar size={16} />
                    {degree.period}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 text-gray-600 mb-6">
                  <span className="flex items-center gap-2">
                    <GraduationCap size={16} />
                    {degree.institution}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {degree.location}
                  </span>
                </div>

                <p className="text-gray-800 mb-6">{degree.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  {degree.achievements.length > 0 && (
                    <div>
                      <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                        <Award size={18} className="text-[#C17F59]" />
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {degree.achievements.map((achievement, aIndex) => (
                          <li key={aIndex} className="flex items-center gap-2 text-gray-800">
                            <Star size={14} className="text-[#C17F59]" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                      <BookOpen size={18} className="text-[#C17F59]" />
                      Key Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {degree.skills.map((skill, sIndex) => (
                        <span key={sIndex} className="px-3 py-1 bg-[#FDF8F5] text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}