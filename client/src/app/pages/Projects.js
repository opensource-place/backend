import React from "react";
import { NavBar } from "../components/nav-bar";
import { IssueList } from "../components/issue-list";
import ProjectList from "../components/project-list";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-800 bg-gray-200">
      <NavBar />
      <div className="p-4">
        <h1 className="mb-0">Project List</h1>
        <ProjectList/>
        <div className="mt-4">
          <IssueList repository_slug={'ozlemts/React-Next10-Tailwind2-Starter'}/>
        </div>

      </div>
    </div>
  );
};

export default Projects;


