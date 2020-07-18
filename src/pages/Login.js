import React, {Component as RC} from 'react';
import Page from '../components/Page';
import {LoggedInContext} from '../Context';
import {Redirect} from 'react-router-dom';
import "../components/Post.css";
import axios from 'axios';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router, Switch, Route, Link,  } from "react-router-dom";



export default class Login extends RC {
    constructor(props)
    {
        super(props);
        this.signIn = this.signIn.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.state = {
        password:''
      };
    }
    signIn(){
      axios.post('/signin', {
        password: this.state.password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    
    handlePasswordChange(e){
      this.setState({password:e.target.value})
    }
    render()
    {
        let loggedIn = this.context;
        if (loggedIn)
        {
            return (
                <Redirect to='./Post' />
            )
        }
        return(
          <div className="post">
            <Page>
              <form>
                <h3>Sign in to make a blog post.</h3>
                  <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="assword" required />
                </form>
                <p>
                    <button onClick={this.signIn}>Login</button></p>
                
                
            </Page>
            </div>
        )
    }
}

Login.contextType = LoggedInContext;

/* import React, {Component as RC} from 'react';
import Page from '../components/Page';
import { render } from 'react-dom';
import { input } from 'react-dom';
// import Banner from '../components/Banner';
import {LoggedInContext} from '../Context';
import {Redirect} from 'react-router-dom';
import './Post.css';

export default class Login extends RC {
    constructor(props) {
        super(props);
    
        this.state = {
          active: (props.locked && props.active) || false,
          value: props.value || "",
          error: props.error || "",
          label: props.label || "Author",
         
        };
      }
    
      changeValue(event) {
        const value = event.target.value;
        this.setState({ value, error: "" });
      }
    
      handleKeyPress(event) {
        if (event.which === 13) {
          this.setState({ value: this.props.predicted });
        }
      }
    
      render() {
        const { active, value, error, label } = this.state;
        const { predicted, locked } = this.props;
        const fieldClassName = `field ${(locked ? active : active || value) &&
          "active"} ${locked && !active && "locked"}`;
    
        return (
            <Page>
          <div className={fieldClassName}>
            {active &&
              value &&
              predicted &&
              predicted.includes(value) && <p className="predicted">{predicted}</p>}
            <input
              id={1}
              type="text"
              value={value}
              placeholder={label}
              onChange={this.changeValue.bind(this)}
              onKeyPress={this.handleKeyPress.bind(this)}
              onFocus={() => !locked && this.setState({ active: true })}
              onBlur={() => !locked && this.setState({ active: false })}
            />
            
            <label htmlFor={1} className={error && "error"}>
              {error || label}
            </label>
          </div>
          
          </Page>
        );
      }
    }
    
    render(
        <input
          id={1}
          label="Author"
          predicted="California"
          locked={false}
          active={false}
        />,
        document.getElementById("root")
      );
      */