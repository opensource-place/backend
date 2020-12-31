import { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import LandingPage from "./pages/LandingPage";
import Start from "./pages/Start";
import Doc from "./pages/Doc";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route path="/projects" component={Projects} />
        <Route path="/start" component={Start} />
        <Route path="/doc" component={Doc} />
      </BrowserRouter>
    );
  }
}

export default Router;
