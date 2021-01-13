import { useEffect, useState } from "react";
import { NavBar } from "../components/nav-bar";
import axios from "axios";

const Start = () => {
  const [issue, setIssue] = useState("");
  const [getDBStatus, setDBStatus] = useState(false);
  const [getDBStatusMSG, setDBStatusMSG] = useState("");

  const addIssue = (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_API_URL;
    axios
      .post(`${url}/start/repos`, {
        url: issue,
      })
      .then(({ data }) => {
        setDBStatus(data.result);
        setDBStatusMSG(data.msg);
      });
  };

  useEffect(() => {});

  return (
    <div className="min-h-screen flex flex-col items-center dark:bg-gray-800 bg-gray-200">
      <NavBar />
      {getDBStatus ? (
        <div className="alert alert-primary my-3 " role="alert">
          {getDBStatusMSG}
        </div>
      ) : null}
      <div className="container">
        <div className="row mt-3">
          <div className="d-flex justify-content-center align-items-center flex-row">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setIssue(e.target.value)}
              placeholder="GitHub Repository URL (furkanportakal/opensourceadam)"
              name="note"
            />
            <button
              onClick={addIssue}
              type="Submit"
              className="w-25 form-control btn btn-primary"
            >
              Add Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
