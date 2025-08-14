import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 to-purple-200 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Me</h1>
      <p className="text-lg text-gray-700 max-w-3xl leading-relaxed text-center">
        Undergraduate student specializing in web development with expertise in the 
        <span className="font-semibold"> MERN stack</span>, HTML, CSS, JavaScript, PHP, C, and SQL.  
        I am passionate about building efficient, user-friendly applications and contributing to 
        innovative, problem-solving teams.  

        <br /><br />
        I have hands-on experience in full-stack development, app development, and database management.  
        My skills extend to working with Express.js, MongoDB, React Router, Tailwind CSS, and REST APIs.  
        I enjoy turning ideas into interactive applications and have built projects such as a job application 
        platform, hidden spots finder app, and a movie review system.  

        <br /><br />
        Beyond coding, I value collaboration, clear communication, and continuous learning to stay up-to-date 
        with evolving technologies.
      </p>
    </div>
  );
}

export default About;
