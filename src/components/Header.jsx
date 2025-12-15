import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-20 bg-white shadow-sm flex items-center justify-between px-8 border-b border-gray-100">
      
      {/* 1. Left Side (Logo) */}
      <div className="flex-1 flex justify-start items-center gap-2">
        {/* Logo Text */}
        <div className="text-left">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight ml-24">CLEANLL</h1>
        </div>
      </div>

      {/* 2. Center (Navigation Links) */}
      <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
        <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Services</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Blog</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</a>
      </nav>

      {/* 3. Right Side (Empty Spacer for Balance) */}
      {/* Ye zaroori hai taaki center links hil na jayein */}
      <div className="flex-1 flex justify-end">
        {/* Agar future me 'Login' button lagana ho to yahan lagayenge */}
      </div>

    </header>
  );
};

export default Header;