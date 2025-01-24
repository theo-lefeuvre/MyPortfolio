import React from 'react';
import Navigation from '../components/Navigation';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDF8F5]">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <header className="mb-16">
          <h1 className="text-6xl md:text-8xl font-serif text-[#2A2522] opacity-50 tracking-wider mb-8">
            CONTACT
          </h1>
          <p className="text-xl md:text-2xl text-[#2A2522] max-w-2xl">
            Get in touch for collaborations, inquiries, or academic discussions.
          </p>
        </header>

        <Contact />
      </main>
    </div>
  );
}