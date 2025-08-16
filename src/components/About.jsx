import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-100 to-sky-900  p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Me</h1>

      {/* Intro */}
      <p className="text-lg text-gray-800 max-w-3xl leading-relaxed text-justify mb-10">
        Undergraduate student specializing in web development with expertise in the 
        <span className="font-semibold"> MERN stack</span>, HTML, CSS, JavaScript, C, and SQL.  
        I am passionate about building efficient, user-friendly applications and contributing to 
        innovative, problem-solving teams.  

        <br /><br />
        I have hands-on experience in full-stack development, database management.  
        My skills extend to working with Express.js, MongoDB, React Router, Tailwind CSS.  
        I enjoy turning ideas into interactive applications and have built projects such as a job application 
        platform, hidden spots finder app, and a movie review system.  

        <br /><br />
        Beyond coding, I value collaboration, clear communication, and continuous learning to stay up-to-date 
        with evolving technologies.
      </p>

      {/* Education */}
      <div className="w-full max-w-4xl mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Education</h2>
        <ul className="space-y-4 text-gray-800 text-lg text-justify">
          <li><span className="font-semibold">B.Tech in Computer Science</span> — AWH Engineering College, Kuttikattoor</li>

          <li><span className="font-semibold">Higher Secondary (Bio Science)</span> — MMVHSS Parappil, percentage-84%</li>
          <li><span className="font-semibold">10th</span> — Himayathul Islam HSS, percentage- 93%</li>
        </ul>
      </div>

      {/* Experience */}
      <div className="w-full max-w-4xl mb-10">
        <h2 className="text-2xl font-bold text-gray-950 mb-6 text-center">Experience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-black-800 mb-2">ICT Kerala</h3>
            <p className="text-gray-700 text-justify">
              Internship in MERN Stack where I built hands-on projects and strengthened my skills in 
              full-stack development.
            </p>
            <p className="text-sm text-gray-600 mt-2">Sept 2024 – Oct 2024 (1 month)</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-black-800 mb-2">Talrop Empower Her Program</h3>
            <p className="text-gray-700 text-justify">
              A one-year program designed to enhance technical expertise, problem-solving, and 
              communication skills through practical training.
            </p>
            <p className="text-sm text-gray-600 mt-2">Aug 2024 – May 2025 (1 year)</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-950 mb-4 text-center">Skills</h2>
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-wrap justify-center gap-4">
          {[
            "HTML", "CSS", "JavaScript", "Tailwind", "Bootstrap", 
            "React", "Node.js", "Express.js", "MongoDB", "SQL"
          ].map((skill, idx) => (
            <span 
              key={idx} 
              className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg text-gray-800 font-medium shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
