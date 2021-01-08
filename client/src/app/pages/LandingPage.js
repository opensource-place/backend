import React from "react";
import { Link } from 'react-router-dom';
import { NavBar } from '../components/nav-bar';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-800">
          <NavBar></NavBar>
    </div>
  );
};

export default LandingPage;
