import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = ["React", "javaScript", "Bootstrap", "TailwindCss"];
  const backendSkills = ["Node.js", "AWS", "Mysql", "PHP", "Laravel"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="glass rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I am a web developer with a strong passion for both front-end and
              back-end development, specializing in PHP (Laravel) and MySQL. I
              also have intermediate experience with JavaScript and React. And
              then, I am familiar with version control system, GitHub. I am
              eager to apply my skills in a real-world setting, collaborate with
              experienced developers, and contribute to building efficient and
              scalable web applications. Seeking a web development job to
              further enhance my expertise and gain hands-on experience. Seeking
              an opportunity to apply my skills in a junior react developer job.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Level 4 & 5 Diploma in NCC Education</strong> - XYZ
                  University (2022-2024)
                </li>
                <li>
                  Relevant Coursework : Data Structure, Web Development,
                  Database Management
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">Project Experience</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Hotel Booking Management System using PHP (Laravel)</li>
                    <li>Ecommerce Website using PHP (Laravel)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Project Experience</h4>
                  <p>Retail Camping Equipment Website Design (HTML, CSS, JS)</p>
                </div>
                <div>
                  <h4 className="font-semibold">Project Experience</h4>
                  <p>
                    IT Product Sales & Service Database Management System (using
                    MySQL)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
