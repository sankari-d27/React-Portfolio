import React from 'react'
import Navbar from '../components/Navbar'
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import profile from '../assets/profile.jpg'

const Home = () => {

  return (
    <>
      <Navbar />

      <section id="home" className="scroll-mt-24 min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0f1a] text-white">

        <div className='max-w-6xl w-full px-6 grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Text */}
          <div className="text-center mt-6 md:text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              <span className='bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-text'>
                Frontend
              </span>
              <br />
              Developer
            </h1>

            <p className="text-gray-300 text-md md:text-lg mb-8">
              Hi, I'm <span className="text-pink-400 font-bold">Sankari</span>👋
              <br />
              I build modern, responsive, and high-performance web interfaces using frontend technologies like
              <span className="text-cyan-400 font-medium"> React, JavaScript, TypeScript</span>,
              <span className="text-pink-400 font-medium"> Tailwind CSS, CSS3</span> &
              <span className="text-purple-400 font-medium"> HTML5</span>.
            </p>

            <p className="text-gray-400 mb-12 max-w-xl mx-auto lg:mx-0">
              I enjoy building clean and responsive web interfaces using React and Tailwind CSS, with a focus on user experience and modern design.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button
                className="px-10 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(236,72,153,0.6)]"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
              </button>

              <a
                href="/resume.pdf"
                download="resume.pdf"
                className="px-10 py-4 rounded-full font-semibold text-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.4)]"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="p-3 mb-6 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_0_60px_rgba(236,72,153,0.6)]">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-80 md:w-[320px] lg:w-[380px] aspect-square object-cover rounded-full group-hover:scale-110 transition duration-700"
                />
              </div>
            </div>
          </div>
        </div>

      </section>

      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

    </>
  )
}

export default Home
