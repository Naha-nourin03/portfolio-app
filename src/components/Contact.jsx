import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 to-purple-200 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h1>

      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-semibold">Email:</span> itsssmeenaha@example.com
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-semibold">Phone:</span> +91 98765 43210
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-semibold">Location:</span> Kozhikode, Kerala, India
        </p>
      </div>
    </div>
  );
}

export default Contact;
