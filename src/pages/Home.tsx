import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDF8F5] text-[#2A2522]">
      <Navigation />
      
      <main className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <Hero />
        </section>

        {/* About Section */}
        <About />

        {/* Contact Section */}
        <Contact />
      </main>
    </div>
  );
}