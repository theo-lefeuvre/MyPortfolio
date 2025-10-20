import React from 'react';
import { CircleDot, Asterisk, FileText } from 'lucide-react';
import profilImg from '../medias/pp.jpg'; // chemin relatif depuis le fichier JS/TS

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center animate-fadeIn">
      {/* Left Column */}
      <div className="flex flex-col items-center">
  <div className="relative">
    <svg 
      viewBox="-150 -150 300 300" 
      width="200" 
      height="200" 
      className="w-full max-w-[200px]"
    >
      <circle 
        r="120" 
        fill="none" 
        stroke="#2A2522" 
        strokeWidth="1" 
        strokeDasharray="4 4"
      />
      
      <path
        id="circlePath"
        d="M 0,120 A 120,120 0 1 1 0,-120 A 120,120 0 1 1 0,120"
        fill="none"
        stroke="none"
      />
      
      <text className="font-serif uppercase tracking-[0.5em]" fontSize="30">
        <textPath 
          href="#circlePath" 
          startOffset="50%"
          textAnchor="middle"
        >
          • Resume • 
        </textPath>
      </text>
    </svg>
    
    {/* Remplacement du <label> + <input> par un lien de téléchargement */}
    <a 
      href="https://drive.google.com/file/d/1lDOaC1JLW8PEV4l1Lwf8qYNO6BWQwwi1/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute inset-0 flex items-center justify-center cursor-pointer group"
    >
      <FileText className="w-12 h-12 text-[#2A2522] group-hover:text-[#C17F59] transition-colors" />
    </a>
  </div>

  <CircleDot className="mt-8 text-[#FF4D4D] animate-pulse" />
</div>


      {/* Center Column */}
    <div className="relative flex justify-center">
      <div className="aspect-[3/4] w-64 rounded-full p-4 border-4 border-[#2A2522] transition-transform hover:scale-105">
        <div className="w-full h-full rounded-full overflow-hidden">
          <img
            src={profilImg}
            alt="Photo de profil"
            className="w-full h-full object-cover rounded-full"
          />

        </div>
      </div>
    </div>

      {/* Right Column */}
      <div className="flex flex-col items-center text-center">
        <Asterisk className="w-8 h-8 mb-4 animate-spin-slow" />
        <h2 className="text-2xl font-serif mb-4">PhD Student</h2>
        <p className="text-lg max-w-xs">
          I am a PhD student focused in brain computer interfaces and neurofeedback  </p>
      </div>
    </div>
  );
}