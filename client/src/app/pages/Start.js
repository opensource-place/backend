import React from "react";
import { useEffect, useState } from "react";

const Start = () => {
  const [notes, setNotes] = useState([]);
  const [noteEditing, setNoteEditing] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    const newNote = {
      id: Math.random().toString(36).substr(2, 9),
      text: e.target.note.value,
    };
    setNotes([...notes, newNote]);
    e.target.note.value = "";
  };

  useEffect(() => {
    const json = JSON.stringify(notes);
    console.log(json);
    localStorage.setItem("notes", json);
  }, [notes]);

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="d-flex justify-content-center align-items-center flex-row">
          <input type="text" className="form-control" placeholder="Github username" name="note" />
          <button type="Submit" className="w-25 form-control btn btn-primary">Add Project</button>
        </div>
      </div>
    </div>
  );
};

export default Start;
