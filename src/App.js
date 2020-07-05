import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Changethis from './pages/Changethis';
import Specs from "./pages/Specs";
import Pictures from "./pages/Pictures";
import Performance from "./pages/Performance";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import "./App.scss";
import Gear from "./pages/Gear"; 
import Boats from "./pages/Boats";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }
  logmein = event => {
    console.log("logging in");
    event.preventDefault();
    this.setState({
      loggedIn: true
    });
  };
  logmeout = () => {
    this.setState({
      loggedIn: false
    });
  };
  render() {
    return (
      
      <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

          <Route exact path="/Home">
          <Home />
        </Route>

          <Route exact path="/Blog">
            <Blog />
          </Route>

        <Route exact path="/AboutUs">
          <AboutUs />
        </Route>

        <Route exact path="/Specs">
          <Specs />
        </Route>

        <Route exact path="/Pictures">
          <Pictures />
        </Route>

        <Route exact path="/Performance">
          <Performance />
        </Route>

        <Route exact path="/Gear">
          <Gear />
        </Route>

        <Route exact path="/Boats">
          <Boats />
        </Route>

        <Route exact path="/changethis">
         <Changethis />
        </Route>
            
          </Switch>
      </Router>
    );
  }
}

export default App;
