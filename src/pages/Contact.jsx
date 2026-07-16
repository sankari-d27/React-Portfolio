import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSent(true);

    setFormData({
      email: "",
      password: "",
      message: "",
    });

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white flex flex-col justify-center px-6 py-12">

      {/* COMMON HEADING */}
      <div className="text-center lg:mt-0 mb-16">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Contact Me
          </span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm text-base">
          Available for full-time roles and collaborative projects.
        </p>
      </div>

      {/* 2 COLUMNS */}
      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

        {/* LEFT SIDE */}

        <div className="flex flex-col justify-center space-y-4 text-gray-300 text-center lg:text-left bg-[#0f1525] border border-white/10 rounded-2xl p-8 shadow-xl">

          <p className="text-lg font-semibold text-white">👋 Let's Connect</p>

          <p>📧 Email: sankaridhakshna@gmail.com</p>

          <p>📱 Phone: +91-9566331020</p>

          <p>🔗 LinkedIn: linkedin.com/in/sankari-d27</p>

          <p>💻 GitHub: github.com/sankari-d27/React-Portfolio.git</p>

          <div className="text-gray-400 text-sm mt-4 leading-relaxed">
            I am a Frontend Developer passionate about building clean, scalable, and user-friendly web applications. I specialize in <span className="text-cyan-400">React</span>, <span className="text-pink-400">JavaScript</span>, and <span className="text-purple-400">TypeScript</span> crafting high-performance, responsive frontend applications.
          </div>

          <div className="text-gray-400 text-sm">
            I am currently enhancing my frontend expertise and working on full-stack projects that blend intuitive UI design with robust backend architecture.
          </div>

        </div>        {/* RIGHT SIDE - FORM */}
        <div className="bg-[#0f1525] border border-white/10 rounded-2xl p-8 shadow-xl">

          <h3 className="text-xl font-bold mb-6 text-center text-cyan-400">
            Send Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition font-semibold"
            >
              Send Message
            </button>

            {sent && (
              <p className="text-green-400 text-center text-sm">
                Message Sent Successfully ✔
              </p>
            )}

          </form>

        </div>

      </div>
    </div>
  );
};

export default Contact;