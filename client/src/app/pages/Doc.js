import React from "react";
import {NavBar} from "../components/nav-bar";

const Doc = () => {
  return (
    <div className="min-h-screen flex flex-col items-center dark:bg-gray-800 bg-gray-200">
      <NavBar />
      <h1>Documents</h1>
    </div>
  );
};

export default Doc;
