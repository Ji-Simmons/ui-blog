import React, {Component as RC} from 'react';
import Page from '../components/Page';
// import Banner from '../components/Banner';
import {LoggedInContext} from '../Context';
import {Redirect} from 'react-router-dom';
import "./Post.css";
export default class Login extends RC {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        let loggedIn = this.context;
        if (loggedIn)
        {
            return (
                <Redirect to="/" />
            )
        }
        return(
            <Page>
                <h3>Sign in to make a blog post.</h3>
                <form>
                    <label>Username</label>
                    <input type="text" name="username" />
                    <label>Password</label>
                    <input type="password" name="password" />
                </form>
                <p>
                    <button onClick={this.props.login}>Login</button></p>

                
            </Page>
        )
    }
}

Login.contextType = LoggedInContext;