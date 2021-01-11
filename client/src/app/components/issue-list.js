import { useEffect, useState } from "react";
import axios from "axios";

export const IssueList = (props) => {
  const [issues, setIssues] = useState([])

  useEffect(() => {
    dataFetch();
  }, [])

  const dataFetch = () => {
    let url = 'https://api.github.com/repos/' + props.repository_slug + '/issues';
    axios
      .get(url)
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
