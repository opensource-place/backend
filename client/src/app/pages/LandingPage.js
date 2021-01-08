import React from "react";
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-800 text-yellow-500 hover:text-white-500">
          <h1>Open Source Adam</h1>
          <Link to="/projects">Projects</Link>
          <Link to="/start">Start</Link>
          <Link to="/doc">Documents</Link>
    </div>
  );
};

export default LandingPage;
