import React from 'react';
import Navigation from '../components/Navigation';
import { ExternalLink, Github, Tag, Calendar, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Research Project 1",
    description: "Investigating the impact of machine learning algorithms on quantum computing efficiency and scalability. This research explores novel approaches to optimize quantum circuits using advanced ML techniques.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80",
    tags: ["Quantum Computing", "Machine Learning", "Python"],
    date: "2024",
    status: "Ongoing",
    link: "#",
    github: "#",
    highlights: [
      "Developed novel quantum circuit optimization algorithms",
      "Reduced computational complexity by 40%",
      "Published in leading quantum computing journal"
    ]
  },
  {
    title: "Research Project 2",
    description: "Developing novel approaches to data visualization in high-dimensional spaces. This project introduces innovative techniques for visualizing complex datasets while preserving meaningful relationships.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80",
    tags: ["Data Visualization", "R", "D3.js"],
    date: "2023",
    status: "Completed",
    link: "#",
    github: "#",
    highlights: [
      "Created new visualization framework",
      "Improved data interpretation accuracy by 60%",
      "Open-source implementation with 500+ stars"
    ]
  },
  {
    title: "Research Project 3",
    description: "Exploring the intersection of artificial intelligence and cognitive neuroscience. This interdisciplinary research combines deep learning with neuroimaging data to understand brain patterns.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80",
    tags: ["AI", "Neuroscience", "TensorFlow"],
    date: "2023",
    status: "Completed",
    link: "#",
    github: "#",
    highlights: [
      "Developed new brain-computer interface model",
      "Achieved 95% accuracy in pattern recognition",
      "Featured in international conference"
    ]
  },
  {
    title: "Research Project 4",
    description: "Analyzing complex networks in social systems using advanced statistical methods. This research provides new insights into community detection and influence propagation.",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80",
    tags: ["Network Analysis", "Statistics", "Python"],
    date: "2022",
    status: "Completed",
    link: "#",
    github: "#",
    highlights: [
      "Introduced novel community detection algorithm",
      "Analyzed 1M+ node networks efficiently",
      "Implemented in major social network platform"
    ]
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#FDF8F5]">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <header className="mb-16">
          <h1 className="text-6xl md:text-8xl font-serif text-[#2A2522] opacity-10 tracking-wider mb-8">
            RESEARCH
          </h1>
          <p className="text-xl md:text-2xl text-[#2A2522] max-w-2xl">
            Exploring the frontiers of knowledge through innovative research projects
            and scientific discoveries.
          </p>
        </header>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <article 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[4/3] lg:aspect-auto relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                    <Calendar size={16} />
                    {project.date}
                  </div>
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col">
                  <h2 className="text-3xl font-serif mb-4">{project.title}</h2>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-[#FDF8F5] text-sm rounded-full flex items-center gap-1"
                      >
                        <Tag size={14} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Key Highlights</h3>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-center gap-2">
                          <ArrowRight size={16} className="text-[#C17F59]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <a 
                      href={project.link}
                      className="flex items-center gap-2 px-6 py-2 bg-[#2A2522] text-white rounded-lg hover:bg-[#C17F59] transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>View Project</span>
                    </a>
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 px-6 py-2 border border-[#2A2522] rounded-lg hover:bg-[#2A2522] hover:text-white transition-colors"
                    >
                      <Github size={20} />
                      <span>Source Code</span>
                    </a>
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