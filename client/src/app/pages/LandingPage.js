import React from "react";
import { NavBar } from "../components/nav-bar";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-800">
      <NavBar />
      <div className="flex flex-col items-center justify-center p-4 m-8 border-2 border-light-blue-500 border-opacity-100 ">
        <h2 className="text-center pt-1  mt-4 ">
          The platform includes open source projects. You can list all published
          open-source projects and also add your project on Github to the
          platform and your projects make open source!
        </h2>
        <a
          href="https://github.com/FurkanPortakal/opensourceadam"
          className="text-center mt-2 mb-6"
        >
          Feel free to contribute!
        </a>
        <button className="uppercase px-8 py-2 text-gray-600 bg-green-300  max-w-max shadow-sm hover:shadow-lg">
          <Link to="/start">Start</Link>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
