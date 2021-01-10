import React from "react";
import { NavBar } from "../components/nav-bar";
import { IssueList } from "../components/issue-list";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-800 bg-gray-200">
      <NavBar />
      <div className="p-4">
        <h1 className="mb-3">Project List</h1>
        <IssueList repository_slug={'ozlemts/React-Next10-Tailwind2-Starter'}/>
      </div>
    </div>
  );
};

export default Projects;


