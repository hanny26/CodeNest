// ErrorPage.js

import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">The page you are looking for does not exist.</p>
        <NavLink to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Go Home</NavLink>
      </div>
    </div>
  );
};

export default Error;
