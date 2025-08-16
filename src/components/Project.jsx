import React from 'react';

const Project = () => {
  const projects = [
    {
      title: "Job Application Website",
      description:
        "A full-stack platform where users can browse and apply for jobs, while admins can manage job postings. Features authentication, applied jobs tracking, and an admin dashboard.",
      tech: "MongoDB, Express.js, React, Node.js, MUI",
    },
    {
      title: "Let's GO!",
      description:
        "An application that helps users discover hidden and less popular locations. Includes map integration, location adding (requires login), and environmental campaigns for restoration.",
      tech: "React.js, Express.js, Node.js, Mongo DB, MUI, Cloudinary,",
    },
    {
      title: "Movie Review App with Express.js Backend",
      description:
        "A movie review application with routes to add, retrieve, update, and delete reviews. Built with a Node.js/Express.js backend and a clean React frontend.",
      tech: "Express.js, Node.js, React, MongoDB",
    },
    {
      title: "Financial Assistance using Big Data",
      description:
        "A Python-based project that uses Matplotlib to visualize data trends for better decision-making. Focused on clear, insightful graphs for analytics purposes.",
      tech: "Python, Matplotlib, Flask",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-100 to-sky-900  p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Tech:</span> {project.tech}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
