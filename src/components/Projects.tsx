import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Research Project 1",
    description: "Investigating the impact of machine learning algorithms on quantum computing efficiency and scalability.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80",
    tags: ["Quantum Computing", "Machine Learning", "Python"],
    link: "#",
    github: "#"
  },
  {
    title: "Research Project 2",
    description: "Developing novel approaches to data visualization in high-dimensional spaces.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80",
    tags: ["Data Visualization", "R", "D3.js"],
    link: "#",
    github: "#"
  },
  {
    title: "Research Project 3",
    description: "Exploring the intersection of artificial intelligence and cognitive neuroscience.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80",
    tags: ["AI", "Neuroscience", "TensorFlow"],
    link: "#",
    github: "#"
  },
  {
    title: "Research Project 4",
    description: "Analyzing complex networks in social systems using advanced statistical methods.",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80",
    tags: ["Network Analysis", "Statistics", "Python"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section className="py-20" id="projects">
      <h2 className="text-6xl md:text-8xl font-serif text-[#2A2522] opacity-10 tracking-wider mb-16">
        PROJECTS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
          >
            <div className="aspect-[3/2] overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 bg-[#FDF8F5] text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a 
                  href={project.link}
                  className="flex items-center gap-2 text-[#2A2522] hover:text-[#C17F59]"
                >
                  <ExternalLink size={20} />
                  <span>View Project</span>
                </a>
                <a 
                  href={project.github}
                  className="flex items-center gap-2 text-[#2A2522] hover:text-[#C17F59]"
                >
                  <Github size={20} />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}