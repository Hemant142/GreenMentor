// src/components/Layout/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-white text-xl font-bold mr-4">
            Todo App
          </Link>
          <Link to="/dashboard" className="text-white hover:text-gray-300 mr-4">
            Dashboard
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/login" className="text-white hover:text-gray-300 mr-4">
            Login
          </Link>
          <Link to="/register" className="text-white hover:text-gray-300">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;