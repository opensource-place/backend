import { useState, useEffect } from "react";
import { ProjectCard } from "./project-card";
import SearchBox from "./search-box";
import axios from "axios";

const ProjectList = () => {
  const [repositorySlugList, setRepositorySlugList] = useState([]);
  const [filteredRepositories, setFilteredRepositories] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    dataFetch();
  }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
    const filteredRepos = repositorySlugList.filter((repo) =>
      repo.repoName.startsWith(searchField)
    );
    setFilteredRepositories(filteredRepos);
  };

  const dataFetch = () => {
    let url = process.env.REACT_APP_API_URL;
    axios.get(`${url}/start/repos`).then((res) => {
      const project_info = res.data;
      setRepositorySlugList(project_info);
      setFilteredRepositories(project_info);
    });
  };

  return (
    <div className="w-full">
      <SearchBox
        placeholder="Search Projects..."
        handleChange={(e) => handleChange(e)}
      />
      <div className="flex">
        {filteredRepositories.map((e, index) => (
          <ProjectCard key={index} repoData={e} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
