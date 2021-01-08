import { useEffect, useState } from "react";
import axios from "axios";

export const ProjectList = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    dataFetch();
  }, [])

  const dataFetch = () => {
    axios
      .get("https://api.github.com/repos/furkanportakal/opensourceadam/issues")
      .then((res) => {
        const persons = res.data;
        setPersons(persons)
        console.log(persons);
      });
  }

  return persons.map((person, index) =>
    <li key={index}>{person.title}</li>);
}


