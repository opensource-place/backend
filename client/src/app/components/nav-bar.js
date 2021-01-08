import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => (
  <div className="flex justify-between items-center bg-gray-200 dark:bg-gray-900">
    <nav className="flex-row md:justify-between items-center">
      <div className="flex justify-between items-center w-screen px-5 py-2">
        <Link to="/">
          <div className="flex items-center">
            <img className="h-12 mr-2" src="/logo.png"/>
            <h1 className="hover:text-gray-100">Open Source Adam</h1>
          </div>
        </Link>
        <div className="ml-2" id="mobileMenu">
          <Link to="/projects" className="ml-3">Projects</Link>
          <Link to="/start" className="ml-3">Start</Link>
          <Link to="/doc" className="ml-3">Documents</Link>
        </div>
      </div>
    </nav>
  </div>
);

export default NavBar;

