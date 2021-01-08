import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => (
  <div className="flex justify-between items-center dark:bg-gray-900 ">
    <nav className="flex-row md:justify-between items-center">
      <div className="flex justify-between items-center w-screen px-5 py-2">
        <div className="flex items-center">
          <img className="w-16 mr-2" src="/logo.png"/>
          <h1 className="hover:text-gray-100">Open Source Adam</h1>
        </div>
        <div className="ml-2" id="mobileMenu">
          <Link to="/projects" className="ml-2">Projects</Link>
          <Link to="/start" className="ml-2">Start</Link>
          <Link to="/doc" className="ml-2">Documents</Link>
        </div>
      </div>
    </nav>
  </div>
);

export default NavBar;

