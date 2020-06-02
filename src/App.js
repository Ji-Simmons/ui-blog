import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import SecureRoute from './components/SecureRoute';
import logo from "./logo.svg";
import "./App.scss";
import Login from "./pages/Login";
import Specs from "./pages/Specs";
import Pictures from "./pages/Pictures";
import Performance from "./pages/Performance";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";

import Gear from "./pages/Gear";
import EditProfile from "./pages/EditProfile";
import {LoggedInContext} from './Context';


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
          <Login />
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
            <LoggedInContext.Provider value={this.state.loggedIn}>

              <SecureRoute exact path="/" component={<Home />} />
              <Route exact path="/login">
                <Login login={this.logmein} />
              </Route>
              
              
              <SecureRoute exact path="/edit-profile" component={<EditProfile />}/>
              <Route exact path="/secret">
                <h1>Going to do some secret stufff</h1>
              </Route>

            </LoggedInContext.Provider>
          </Switch>
      </Router>
    );
  }
}

export default App;
