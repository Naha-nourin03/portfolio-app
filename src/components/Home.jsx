import React from 'react';
import myPhoto from '../assets/myphoto.jpg'; // Adjust path if needed

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-200 to-purple-200 p-6">
      
      {/* Left - Profile Image */}
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
        <img
          src={myPhoto}
          alt="Nourin"
          className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>

      {/* Right - Text */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Hi, I'm Nourin</h1>
        <p className="text-lg text-gray-700">
          I’m a passionate web developer specializing in the <span className="font-semibold">MERN stack</span>, 
          HTML, CSS, JS, and more. I love building efficient, user-friendly applications and learning new 
          technologies to enhance my skills.
        </p>
      </div>
    </div>
  );
}

export default Home;
