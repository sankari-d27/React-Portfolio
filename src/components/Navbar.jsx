import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50">
      
      <div className="mx-auto w-full lg:w-[95%] max-w-6xl backdrop-blur-xl bg-gradient-to-r from-[#0f0c29]/90 via-[#0b0f1a]/90 to-[#24243e]/90 shadow-[0_0_30px_rgba(236,72,153,0.25)] lg:rounded-2xl">


        <div className="px-4 md:px-8 py-4 flex justify-between items-center">

          {/* Logo */}
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            SD
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="relative px-3 py-2 text-gray-300 hover:text-white transition-all duration-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                  hover:after:w-full after:bg-gradient-to-r after:from-cyan-400 after:to-pink-500
                  after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden text-3xl text-pink-400 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className="md:hidden mx-4 mb-4 rounded-xl bg-gradient-to-r from-[#1f1c2c] to-[#928dab] p-4 flex flex-col gap-3 shadow-xl">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-white text-lg px-4 py-2 rounded-lg bg-black/30 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}

      </div>
    </nav>
  );
};

export default Navbar;