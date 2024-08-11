import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl">{'</>'} Dinesh Polisetty</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#terminal">Terminal</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;