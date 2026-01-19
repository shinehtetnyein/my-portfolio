import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = ["React", "JavaScript", "HTML", "CSS", "TailwindCSS"];
  const backendSkills = ["PHP", "Laravel", "MySQL", "Node.js"];
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
              I am a web developer with a strong passion for both front-end and back-end development, specializing in PHP, Laravel and MySQL. I have intermediate experience with JavaScript and React and am familiar with version control using Git and GitHub. I am eager to apply my skills in real-world projects, collaborate with experienced developers, and contribute to building efficient, scalable web applications. I am seeking a web development role to further enhance my expertise and gain hands-on experience.
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
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="text-gray-300 space-y-2">
                <li><strong>Phone:</strong> 09-978 868 561</li>
                <li><strong>Email:</strong> shinehtetnyein05@gmail.com</li>
                <li>
                  <strong>GitHub:</strong>{" "}
                  <a href="https://github.com/shinehtetnyein" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline">https://github.com/shinehtetnyein</a>
                </li>
                <li><strong>Location:</strong> 121, Minyekyawswar road, Ahlone, Yangon</li>
              </ul>
              <h3 className="text-xl font-bold mt-6 mb-4">Soft Skills</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Problem-Solving</li>
                <li>Critical Thinking & Creative Thinking</li>
                <li>Team Collaboration</li>
                <li>Time Management</li>
                <li>Continuous Learning</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>NCC Level 4 Diploma in Computing</li>
                <li>NCC Level 5 Diploma in Computing</li>
                <li>NCC Level 6 Bachelor of Computing (Hons)</li>
              </ul>
              <h3 className="text-xl font-bold mt-6 mb-4">Work Experience</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Computer Hardware Intern</li>
                <li>Junior Graphic Designer</li>
                <li>Junior React Developer</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-xl border-white/10 border">
            <h3 className="text-xl font-bold mb-4">Project Experience</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Retail Campaign Equipment Website Design (HTML, CSS, JS)</li>
              <li>Movies Project (React JS)</li>
              <li>We Day social commerce admin panel (React JS)</li>
              <li>Ecommerce Website using PHP (Laravel)</li>
              <li>Hotel Booking Management System using PHP (Laravel)</li>
              <li>School Management System (Vue JS & Laravel)</li>
              <li>POS System (PHP)</li>
              <li>IT Product Sales & Service Database Management System (MySQL)</li>
              <li>Hiking App (Kotlin & React Native)</li>
              <li>Homeless UI design (Axure)</li>
            </ul>
            <h3 className="text-xl font-bold mt-6 mb-4">Certifications & Achievements</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>NCC Level 4 & 5 Diploma in Computing</li>
              <li>Graphic Design Course</li>
              <li>Professional React Course</li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
