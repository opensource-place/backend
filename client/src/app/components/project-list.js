import { useEffect, useState } from "react";
import axios from "axios";

export const ProjectList = () => {
  const [issues, setIssues] = useState([])

  useEffect(() => {
    dataFetch();
  }, [])

  const dataFetch = () => {
    axios
      .get("https://api.github.com/repos/FurkanPortakal/opensourceadam/issues")
      .then((res) => {
        const issues = res.data;
        setIssues(issues)
        console.log(issues);
      });
  }

  return issues.map((issue, index) =>
    <li key={index} className="flex-row">
      <a href={issue.html_url} target="_blank">{issue.title}</a>
    </li>);
}
