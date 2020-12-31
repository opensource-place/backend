import React from "react";
import axios from "axios";

export default class Projects extends React.Component {
  state = {
    persons: [],
  };
  dataFetch = () => {
    axios
      .get("https://api.github.com/repos/furkanportakal/opensourceadam/issues")
      .then((res) => {
        const persons = res.data;
        this.setState({ persons });
        console.log(this.state.persons);
      });
  }
  componentDidMount() {
    this.dataFetch();
  }

  render() {
    const getUser = this.state.persons;
    return getUser.map((person, index) => <li key={index}>{person.title}</li>);
  }
}
