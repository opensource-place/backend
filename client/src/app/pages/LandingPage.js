import React from "react";
import { NavBar } from "../components/nav-bar";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center dark:bg-gray-800 bg-gray-200">
      <NavBar />
      <div className="flex flex-col items-center justify-center p-4 m-8 border-2 border-light-blue-500 border-opacity-100">
        <h2 className="text-center pt-1 mt-4 ">
          The platform includes open source projects. You can list all published
          open-source projects and also add your project on Github to the
          platform and your projects make open source!
        </h2>
        <a
          href="https://github.com/FurkanPortakal/opensourceadam"
          className="text-center mt-2 mb-6 underline"
        >
          Feel free to contribute!
        </a>
        <Link to="/start">
          <button className="uppercase primary-button">Start</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
