import React from 'react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif mb-12">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:your.email@university.edu"
                  className="flex items-center gap-3 text-[#2A2522] hover:text-[#C17F59]"
                >
                  <Mail />
                  <span>theo.lefeuvre@inria.fr</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/th%C3%A9o-lefeuvre/"
                  className="flex items-center gap-3 text-[#2A2522] hover:text-[#C17F59]"
                >
                  <Linkedin />
                  <span>LinkedIn Profile</span>
                </a>
                
              
              </div>
            </div>
            
            
            
            <div className="bg-[#FDF8F5] p-6 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Response Time:</strong> I typically respond within 24-48 hours during weekdays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}