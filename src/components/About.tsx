import React from 'react';
import { GraduationCap, Award, Heart } from 'lucide-react';

const skills = {
  Technical: ["Python", "PyTorch", "Data Analysis","Unity3D","Unreal Engine"],
  Research: ["Statistical Analysis", "Machine Learning", "Scientific Writing"],
  Languages: ["French (Native)", "English (Fluent)", "Jpanese (N4)"],
  Soft: ["Project Management","Public Speaking", "Problem Solving"]
};

const achievements = [
  "Selected for Laval Virtual student competition 2024",
  "Selected for Laval Virtual student competition 2020"
];

export default function About() {
  return (
    <section className="py-20 bg-[#FDF8F5]" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif mb-8">About Me</h2>
        
        <div className="w-full mb-12 text-justify leading-relaxed text-lg">
      <p className="mb-4">
        I am a PhD student in computer science and neuroscience at INRIA Rennes, Seamless team, under the supervision of Léa Pillette, Marc Macé, and Anatole Lécuyer.
      </p>
      <p>
        My research focuses on studying the influence of sensory abilities on neurofeedback learning using brain-computer interfaces and the impact these interfaces have on these same abilities. My work also focuses on developing new innovative haptic feedback to support neurofeedback learning combining haptics and virtual reality.
      </p>
    </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-serif mb-4">{category} Skills</h3>
              <ul className="space-y-2">
                {skillList.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#C17F59] rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-serif mb-4 flex items-center gap-2">
            <Award className="text-[#C17F59]" />
            Achievements
          </h3>
          <ul className="space-y-4">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-center gap-2">
                <GraduationCap className="text-[#2A2522]" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}