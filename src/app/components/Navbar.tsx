import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white py-4 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-10" />
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-800 hover:text-gray-500">Home</a>
            <a href="#" className="text-gray-800 hover:text-gray-500">About</a>
            <a href="#" className="text-gray-800 hover:text-gray-500">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
