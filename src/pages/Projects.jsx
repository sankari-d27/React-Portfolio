import React from "react";
import { projects } from "../data/data";

const Projects = () => {
  return (
    <div className="bg-[#0b0f1a] text-white py-12 overflow-hidden">
      <div className="pb-12 lg:mt-0 z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world projects showcasing my Frontend Web development
            skills.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 hover:scale-[1.03] transition-all duration-300"
            >
              <div className="h-full rounded-2xl bg-[#0f1525] p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-3 group-hover:text-pink-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {project.desc}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex-1 text-center px-4 py-3 rounded-full border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="flex-1 text-center px-4 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;