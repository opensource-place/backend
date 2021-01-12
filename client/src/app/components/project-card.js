import { useEffect, useState } from "react";
import axios from "axios";

export const ProjectCard = (props) => {
  const [project_info, setProject] = useState([]);

  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = () => {
    let url =
      "https://api.github.com/repos/" + props.repository_slug;
    axios
      .get(url)
      .then((res) => {
        const project_info = res.data;
        setProject(project_info);
        console.log(project_info);
      });
  };

  return (
    <div className="p-3 bg-green-300 w-1/4 dark:bg-gray-900 bg-gray-100 m-2">
      <div>Project name : {project_info.name}</div>
      <div>Homepage : {project_info.homepage}</div>
      <div>html : {project_info.html_url}</div>
      <div>Number of forks : {project_info.forks_count}</div>
      <div>Number of star : {project_info.stargazers_count}</div>
      <div>Created at :{project_info.created_at}</div>
      <div>Open Issues :{project_info.open_issues}</div>
    </div>
  );
};
