import React from "react";
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h1>Open Source Adam</h1>
          <Link to="/projects">Projects</Link>
          <Link to="/start">Start</Link>
          <Link to="/doc">Documents</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
