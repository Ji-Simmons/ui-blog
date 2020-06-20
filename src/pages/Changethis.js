import React, {Component as RC} from 'react';
import Page from '../components/Page';
import '../components/Post.css';
import axios from 'axios';

export default class Post extends RC {
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {

    }

    handleSubmit(e){
        e.preventDefault();
        const author = document.getElementById('author').value;
        const title = document.getElementById('title').value;
        const date = document.getElementById('date').value;
        const copy = document.getElementById('copy').value;
        axios({
        method: "POST", 
        url:"http://localhost:5555/api/history", 
        data: {
        author: author,
        date: date,
        title: title,
        copy: copy, 
        
        }
        }).then((response)=>{
        if (response.data.msg === 'success') {
        alert("Post posted!"); 
        this.resetForm()
        } else if (response.data.msg === 'fail') {
        alert("Fix your shit.")
        }
        })
        }
        
        resetForm(){
        document.getElementById('history').reset();
        }
        
    render()
    {
        return(
            <div className="post"> 
            <Page>
                
                <form id="history" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div onChange={this.onChangeValue}>
                <p />
                <select id="author">
                    <option value="Conni">Conni</option>
                    <option value="Ji">Ji</option>
                </select>
                </div>
           
               
        <textarea id="date" rows="1" cols="50" placeholder="Todays date"></textarea><br />
        <textarea id="title" rows="1" cols="100" placeholder="Title of the post"></textarea><br />
        <textarea id="copy" rows="10" cols="100" placeholder="Start typing!"></textarea>
                
                <p>
                    <button type="submit" value="Create" >Send it!</button></p>
                    </form>
            </Page>
            </div>
        )
    }
}

/* whenever a form field changes, look up the name property
    // in state and change that value to match form field value
    changeHandler = (event) =>
    {
        const fieldName = event.target.getAttribute('name');
        const stateObj = {};
        stateObj[fieldName] = event.target.value;
        // this is only necessary if you are displaying feedback to the user
        stateObj.feedbackMessage = '';
        stateObj.feedbackType = '';
        
        this.setState(stateObj);
    } */