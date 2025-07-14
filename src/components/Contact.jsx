import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-10 px-4 bg-white shadow-inner">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <div className="flex flex-col gap-4">
          <a href="mailto:aliikram3467@gmail.com" className="flex items-center gap-2 text-blue-600">
            <Mail size={18} /> aliikram3467@gmail.com
          </a>
          <a href="https://github.com/AliMirza171" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600">
            <Github size={18} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/mohammad-ali-ikram-mirza-366591213" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}