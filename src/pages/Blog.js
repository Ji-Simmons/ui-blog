import React, { Component as RC } from 'react';
import '../App.scss';
import axios from 'axios';
import '../App.scss';
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default class Blog extends RC {
    state = {
        history: [],
        isLoading: true,
        errors: null
    };
    getHistory() {
        axios
       // This is where the data is hosted When local because Conni said so
            .get('http://localhost:5555/api/history')
            // when it's live:
            //.get('https://blog-api1.herokuapp.com/') 
        // Once we get a response and store data, let's change the loading state
        .then(response => {
            console.log(response);
          this.setState({
            history: response.data,
            isLoading: false
          });
        })
        // If we catch any errors connecting, let's update accordingly
        .catch(error => this.setState({ error, isLoading: false }));
    }
    componentDidMount() {
        this.getHistory();
    }
    render() {
        const { isLoading, history } = this.state;
            return ( 
                <React.Fragment> 
                    <Navigation />
                    <Header />
                    
                    <div className="App">       
                        {!isLoading ? (
                            history.map(history => {
                                const { _id, title, author, date, copy } = history;
                                return (
                                    <div className="background" key={_id}>
                                        
                                        <h1 className="title">{title}</h1>
                                        <h2 className="author">Posted by: {author}</h2>
                                        <h2 className="date">{date}</h2>
                                        <h2 className="copy">{copy}</h2>
                                        <hr />
                                     
                                        
                                    </div>
                                );
                            })
                        ) : (
                            <p>Loading . . .</p>
                        )}
                        <Footer />
                    
                        </div>
                </React.Fragment>
                
             );
        }}
        
        




// set the db to add time stamps, and then use js to sort by stamp.