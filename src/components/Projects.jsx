import React from "react";

export default function Projects() {
  return (
    <section className="py-10 px-4 bg-white shadow-inner">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <p className="mb-2 text-blue-600">
          View all my projects on
          <a href="https://github.com/AliMirza171" target="_blank" rel="noopener noreferrer" className="underline ml-1">
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}