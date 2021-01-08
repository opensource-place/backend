import React from "react";
import { NavBar } from "../components/nav-bar";
import { ProjectList } from "../components/project-list";

const Projects = () => {
  return (
      <div className="min-h-screen">
        <NavBar></NavBar>
        <ProjectList></ProjectList>
    </div>
  );
};

export default Projects;
