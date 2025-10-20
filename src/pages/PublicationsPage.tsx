import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { ExternalLink, Calendar, MapPin, Award, BookOpen, Users, Radio } from 'lucide-react';

const publications = {
  journals: [
    /*{
      title: "Scalable Quantum Computing: A Machine Learning Approach",
      authors: ["Co-author Four", "Co-author Five", "<strong>Your Name</strong>"],
      journal: "Physical Review X Quantum",
      year: "2024",
      doi: "10.1103/PhysRevXQuantum.2024.00001",
      impact: "Editor's Choice Award",
      tags: ["Scalability", "Machine Learning", "Quantum Systems"]
    },
    {
      title: "Neural Networks in Quantum State Preparation",
      authors: ["Co-author Two", "<strong>Your Name</strong>", "Co-author Three"],
      journal: "Nature Machine Intelligence",
      year: "2023",
      doi: "10.1038/s42256-023-00002-1",
      impact: "Featured in Nature Highlights",
      tags: ["Neural Networks", "Quantum States", "Machine Learning"]
    },
    {
      title: "Foundations of Quantum Circuit Optimization",
      authors: ["<strong>Your Name</strong>", "Co-author One"],
      journal: "Journal of Quantum Computing",
      year: "2022",
      doi: "10.1038/s41534-022-00001-1",
      impact: "50+ Citations in First Year",
      tags: ["Quantum Computing", "Circuit Optimization", "Theory"]
    }*/
  ],
  international: [
    /*{
      title: "Hybrid Quantum-Classical Algorithms for Large-Scale Optimization",
      authors: ["<strong>Your Name</strong>", "Co-author Eight"],
      conference: "International Symposium on Quantum Technology",
      location: "Tokyo, Japan",
      year: "2024",
      month: "January",
      proceedings: "ISQT 2024 Proceedings",
      pages: "245-252",
      link: "javascript:void(0)",
      presentation: "Keynote",
      tags: ["Hybrid Computing", "Optimization", "Algorithms"]
    },
    {
      title: "Novel Visualization Techniques for High-Dimensional Quantum States",
      authors: ["Co-author Seven", "<strong>Your Name</strong>"],
      conference: "IEEE Quantum Week",
      location: "Denver, USA",
      year: "2023",
      month: "September",
      proceedings: "IEEE Quantum Week 2023",
      pages: "123-130",
      link: "javascript:void(0)",
      presentation: "Oral",
      tags: ["Visualization", "Quantum States", "Data Science"]
    },
    {
      title: "Quantum Error Correction Using Deep Learning",
      authors: ["<strong>Your Name</strong>", "Co-author Six"],
      conference: "International Conference on Quantum Computing (ICQC)",
      location: "Zurich, Switzerland",
      year: "2022",
      month: "March",
      proceedings: "Proceedings of ICQC 2022",
      pages: "78-85",
      link: "javascript:void(0)",
      presentation: "Oral",
      tags: ["Error Correction", "Deep Learning", "Quantum Computing"]
    }*/
  ],
  conferences: [
   
    {
      title: "Toward EEG discrimination of fingers movements during motor imagery vs passive movement",
      authors: ["<strong>Lefeuvre Théo</strong>, Kyungho Won, Monica Malvezzi, Mihai Dragusanu, Claudio Pacchierotti, Anatole Lécuyer, Marc Macé, Léa Pillette"],
      conference: "11th International BCI Meeting 2025",
      location: "Banff, Canada",
      year: "2025",
      month: "June ",
      link: "https://doi.org/10.3217/978-3-99161-050-2",
      presentation: "Poster",
      tags: ["Motor imagery ", "Passive movement", "Finger imagery"]
    },
  {
      title: "Impact of Neurofeedback Training on Thermal Sensory Imagery and Perception",
      authors: ["<strong>Lefeuvre Théo</strong>, Emille Savalle, Anatole Lécuyer, Marc Macé, Léa Pillette"],
      conference: "CORTICO Scientific Days – 7th Edition",
      location: "Lyon, France",
      year: "2025",
      month: "May ",
      link: "",
      presentation: "Poster",
      tags: ["Sensory imagery", "Neurofeedback"]
    },



      {
      title: "Toward EEG discrimination of fingers movements during motor imagery vs passive movement",
      authors: ["<strong>Lefeuvre Théo</strong>, Kyungho Won, Monica Malvezzi, Mihai Dragusanu, Claudio Pacchierotti, Anatole Lécuyer, Marc Macé, Léa Pillette"],
      conference: "Laval Virtual Doctoral Consortium",
      location: "Laval, France",
      year: "2025",
      month: "April ",
      link: "https://doi.org/10.20870/IJVR.2025.1.1.9362",
      presentation: "Poster",
      tags: ["Motor imagery ", "Passive movement", "Finger imagery"]
    },
    
    {
      title: "Toward Understanding the Impact of a Biomimetic Virtual Hand on Behavior and Embodiment in Virtual Reality",
      authors: ["Lefrou Titouan", "<strong>Lefeuvre Théo</strong>, Dufresne Florian, Dubosc Charlotte, Christmann Olivier, Gorisse Geoffrey"],
      conference: "JFXR-2024",
      location: "Paris, France",
      year: "2024",
      month: "November ",
      link: "https://www.researchgate.net/publication/386211905_Toward_Understanding_the_Impact_of_a_Biomimetic_Virtual_Hand_on_Behavior_and_Embodiment_in_Virtual_Reality",
      presentation: "Poster",
      tags: ["Embodiment ", "Virtual Reality"]
    },
    /*{
      title: "Quantum Algorithm Implementation on NISQ Devices",
      authors: ["<strong>Your Name</strong>", "Co-author Ten"],
      conference: "French Quantum Computing Conference",
      location: "Lyon, France",
      year: "2023",
      month: "June",
      proceedings: "FQCC 2023",
      pages: "156-163",
      link: "javascript:void(0)",
      presentation: "Oral",
      tags: ["NISQ", "Algorithm Implementation", "Hardware"]
    },
    {
      title: "Quantum Computing Education: A National Perspective",
      authors: ["Co-author Nine", "<strong>Your Name</strong>"],
      conference: "National Quantum Education Symposium",
      location: "Paris, France",
      year: "2022",
      month: "May",
      proceedings: "NQES Proceedings 2022",
      pages: "34-41",
      link: "javascript:void(0)",
      presentation: "Workshop",
      tags: ["Education", "Quantum Computing", "Pedagogy"]
    }*/
  ],
  talks: [
  {
      title: "COLIBRI Focus Workshop",
      authors: ["<strong>Lefeuvre Théo</strong>"],
      conference: "COLIBRI Focus Workshop",
      location: "Graz, Austria",
      year: "2025",
      month: "June ",
      link: "",
      presentation: "Talks",
      tags: ["Sensory imagery", "Neurofeedback"]
    },
  ]
};
/* 
              <span>View in Proceedings ({data.proceedings}, pp. {data.pages})</span>


*/
type PublicationType = 'journals' | 'conferences' | 'talks';

export default function PublicationsPage() {
  const [activeTab, setActiveTab] = useState<PublicationType>('journals');

  const TabButton = ({ type, label, icon: Icon }: { type: PublicationType, label: string, icon: React.ElementType }) => (
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

  const PublicationCard = ({ type, data }: { type: PublicationType, data: any }) => {
    if (type === 'journals') {
      return (
        <article className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
          <div className="p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-2xl font-serif">{data.title}</h3>
              <span className="flex items-center gap-2 text-sm bg-[#FDF8F5] px-3 py-1 rounded-full">
                <Calendar size={16} />
                {data.year}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ 
              __html: data.authors.join(', ') 
            }} />
            
            <div className="flex flex-wrap gap-2 mb-6">
              {data.tags.map((tag: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-[#FDF8F5] text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <BookOpen size={16} />
                {data.journal}
              </span>
              {data.impact && (
                <span className="flex items-center gap-2">
                  <Award size={16} className="text-[#C17F59]" />
                  {data.impact}
                </span>
              )}
            </div>

            <div className="mt-6 pt-6 border-t">
              <a
                href={`https://doi.org/${data.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#2A2522] hover:text-[#C17F59]"
              >
                <ExternalLink size={20} />
                <span>View Publication (DOI: {data.doi})</span>
              </a>
            </div>
          </div>
        </article>
      );
    }

    return (
      <article className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="text-2xl font-serif">{data.title}</h3>
            <span className="flex items-center gap-2 text-sm bg-[#FDF8F5] px-3 py-1 rounded-full">
              <Calendar size={16} />
              {data.month} {data.year}
            </span>
          </div>
          
          <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ 
            __html: data.authors.join(', ') 
          }} />
          
          <div className="flex flex-wrap gap-2 mb-6">
            {data.tags.map((tag: string, index: number) => (
              <span key={index} className="px-3 py-1 bg-[#FDF8F5] text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>{data.conference}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{data.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Radio size={16} />
              <span>{data.presentation} Presentation</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#2A2522] hover:text-[#C17F59]"
            >
              <ExternalLink size={20} />
              <span>View of the submission</span>
            </a>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="min-h-screen bg-[#FDF8F5]">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <header className="mb-16">
          <h1 className="text-6xl md:text-8xl font-serif text-[#2A2522] opacity-50 tracking-wider mb-8">
            PUBLICATIONS
          </h1>
          <p className="text-xl md:text-2xl text-[#2A2522] max-w-2xl">
            A collection of peer-reviewed research papers, conference proceedings, and academic contributions.
          </p>
        </header>

        <div className="flex flex-wrap gap-4 mb-12">
          <TabButton 
            type="journals" 
            label="Scientific Journals" 
            icon={BookOpen}
          />
          <TabButton 
            type="conferences" 
            label="Conferences" 
            icon={Users}
          />
          <TabButton 
            type="talks" 
            label="Talks and workshops" 
            icon={Users}
          />
        </div>

        <div className="grid grid-cols-1 gap-8">
          {publications[activeTab].map((pub, index) => (
            <PublicationCard 
              key={index} 
              type={activeTab} 
              data={pub} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}

/*
 <TabButton 
            type="national" 
            label="National Conferences" 
            icon={Radio}
          />

*/