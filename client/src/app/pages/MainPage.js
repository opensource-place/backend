import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/repos/furkanportakal/opensourceadam/issues")
      .then((res) => {
        const persons = res.data;
        this.setState({ persons });
        console.log(this.state.persons);
      });
  }

  render() {
    const getUser = this.state.persons;
    return getUser.map((person, index) => <li key={index}>{person.title}</li>);
  }
}
