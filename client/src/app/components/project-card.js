export const ProjectCard = ({ repoData }) => {
  console.log(repoData);
  return (
    <div className="p-3 bg-green-300 w-1/4 dark:bg-gray-900 bg-gray-100 m-2">
      <div>Project name : {repoData.userName}</div>
      <div>Homepage : {repoData.repoName}</div>
    </div>
  );
};
