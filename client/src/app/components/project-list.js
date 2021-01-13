import { useState } from "react";
import { ProjectCard } from "./project-card";
import SearchBox from "./search-box";
import

const ProjectList = () => {
  const [repositorySlugList, setRepositorySlugList] = useState([
    "ozlemts/React-Next10-Tailwind2-Starter",
    "FurkanPortakal/opensourceadam",
    "tailwindlabs/tailwindcss",
    "vercel/vercel",
  ]);
  const [searchField, setSearchField] = useState("");

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const filtered_repository_slug_list = repositorySlugList.filter((e) =>
    e.toLowerCase().startsWith(searchField.toLowerCase())
  );

  return (
    <div className="w-full">
      <SearchBox
        placeholder="Search Projects..."
        handleChange={(e) => handleChange(e)}
      />
      <div className="flex">
        {filtered_repository_slug_list.map((e) => (
          <ProjectCard key={e.id} repository_slug={e}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
