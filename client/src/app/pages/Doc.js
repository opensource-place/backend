import { useState, useEffect } from "react";
import { NavBar } from "../components/nav-bar";
import Markdown from "markdown-to-jsx";
import mdDocument from "../documentations/hello.md";

const Doc = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(mdDocument)
      .then((res) => res.text())
      .then((md) => {
        setContent(md);
      });
  });

  return (
    <div className="min-h-screen flex flex-col items-center dark:bg-gray-800 bg-gray-200">
      <NavBar />
      <h1>Documents</h1>
      <div>
        <Markdown children={content} />
      </div>
    </div>
  );
};

export default Doc;
