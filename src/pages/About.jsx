import React, { useState } from "react";
import { skills, experienceData } from "../data/data";

const About = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(index);
  };

  return (
    <div className="bg-[#0b0f1a] text-white py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A quick look at my journey, skills, and the technologies I enjoy working with.
          </p>
        </div>


        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-14 items-stretch">


          {/* EXPERIENCE */}
          <div className="rounded-2xl bg-[#0f1525] p-8 border border-white/10 shadow-xl h-full">

            <h3 className="text-xl font-bold mb-6 text-center text-cyan-400">
              Experience
            </h3>


            <div className="relative border-l-2 border-cyan-500/40 pl-6 space-y-6">

              {experienceData.map((exp, index) => {

                const isOpen = openIndex === index;

                return (
                  <div key={index} className="relative">


                    {/* Timeline Dot */}
                    <div
                      className={`absolute -left-[32px] top-5 w-4 h-4 rounded-full shadow-md ${isOpen
                        ? "bg-pink-400"
                        : "bg-cyan-400"
                        }`}
                    />


                    {/* Experience Card */}
                    <div
                      className={`rounded-xl border transition-all duration-300 ${isOpen
                        ? "border-pink-400 bg-white/10"
                        : "border-cyan-400 bg-white/5"
                        }`}
                    >


                      {/* Header */}
                      <div
                        onClick={() => handleToggle(index)}
                        className="flex justify-between items-start gap-4 p-4 cursor-pointer"
                      >

                        <div className="flex-1 min-w-0 pr-2">
                          <h4 className="text-sm sm:text-lg font-semibold break-words">
                            {exp.title}
                          </h4>

                          <p className="text-xs sm:text-sm text-gray-400 mt-1">
                            {exp.company} • {exp.duration}
                          </p>
                        </div>


                        <button
                          type="button"
                          className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-xl font-bold ${isOpen
                            ? "bg-pink-500 text-white"
                            : "bg-cyan-500 text-black"
                            }`}
                        >
                          {isOpen ? "-" : "+"}
                        </button>

                      </div>


                      {/* Description */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${isOpen
                          ? "max-h-[1000px] opacity-100"
                          : "max-h-0 opacity-100"
                          }`}
                      >

                        <div className="px-4 pb-4 text-sm text-gray-300 space-y-2">

                          {exp.description.map((point, i) => (
                            <p key={i}>
                              • {point}
                            </p>
                          ))}

                        </div>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>



          {/* RIGHT SIDE */}
          <div className="rounded-2xl bg-[#0f1525] p-8 border border-white/10 shadow-xl h-full">


            {/* Tech Stack */}
            <h3 className="text-xl font-bold text-center text-cyan-400 mb-6">
              Tech Stack
            </h3>


            <div className="flex flex-wrap justify-center gap-3 mb-10">

              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full text-sm bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-white/10 text-white hover:scale-105 transition"
                >
                  {skill}
                </span>
              ))}

            </div>



            {/* What I Do */}
            <div className="rounded-xl bg-white/5 border border-white/10 p-5 mb-6">

              <h4 className="text-lg font-semibold text-purple-400 mb-3">
                What I Do
              </h4>

              <p className="text-gray-300 text-sm leading-7">
                • Build responsive React applications
                <br />
                • Create reusable and scalable components
                <br />
                • Convert designs into modern UIs
                <br />
                • Integrate REST APIs
                <br />
                • Optimize frontend performance
              </p>

            </div>



            {/* Currently Learning */}
            <div className="rounded-xl bg-white/5 border border-white/10 p-5">

              <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                Currently Learning
              </h4>

              <p className="text-gray-300 text-sm leading-7">
                Expanding backend development skills with:
                <br />

                <span className="text-cyan-400 font-medium">
                  Node.js
                </span>
                {" • "}

                <span className="text-pink-400 font-medium">
                  Express.js
                </span>
                {" • "}

                <span className="text-purple-400 font-medium">
                  MongoDB
                </span>

              </p>

            </div>


          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
