import React from "react";
import { NavBar } from "../components/nav-bar";
import { IssueList } from "../components/issue-list";

const Projects = () => {
  /**return (
    <div classNameName="min-h-screen flex flex-col dark:bg-gray-800 bg-gray-200">
      <NavBar />
      <div classNameName="p-4 flex-col flex-wrap ">
        <h1 classNameName="mb-3">Project List</h1>
        <IssueList repository_slug={'ozlemts/React-Next10-Tailwind2-Starter'}/>
      </div>
    </div>
  );**/
  return(
   <div className="h-screen dark:bg-gray-800 bg-gray-200">
      <NavBar />
      <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-green-500">Projects</h1>
    </div>
    <div className="flex flex-wrap">

    <div  iv className="p-2 md:w-1/3">
        <div className="border-l-4 border-red-500 flex rounded-lg h-full bg-gray-900 hover:bg-black transition-all p-8 flex-col">
          <div className="flex items-center mb-3">
            <h2 className="text-green-500 text-lg title-font font-medium">Project Title</h2>
          </div>
          <div className="flex-grow mb-2">
            <p className="leading-relaxed text-base">lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div className="mt-4">
              <span className="p-2 ml-1 text-green-500 border-2 border-green-500 rounded-lg ">JavaScript</span>
              <span className="p-2 ml-1 text-green-500 border-2 border-green-500 rounded-lg ">UI</span>
              <span className="p-2 ml-1 text-green-500 border-2 border-green-500 rounded-lg ">React.JS</span>
          </div>
        </div>
      </div>

      <div  iv className="p-2 md:w-1/3">
        <div className="border-l-4 border-red-500 flex rounded-lg h-full bg-gray-900 hover:bg-black transition-all p-8 flex-col">
          <div className="flex items-center mb-3">
            <h2 className="text-green-500 text-lg title-font font-medium">Project Title</h2>
          </div>
          <div className="flex-grow mb-2">
            <p className="leading-relaxed text-base">lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div className="mt-4">
              <span className="p-2 ml-1 text-green-500 border-2 border-green-500 rounded-lg ">JavaScript</span>
              <span className="p-2 ml-1 text-green-500 border-2 border-green-500 rounded-lg ">UI</span>
              <span className="p-2 ml-1 text-green-500 border-2 border-green-500 rounded-lg ">React.JS</span>
          </div>
        </div>
      </div>

     </div>
    </div>
   </div>
  );
};

export default Projects;


