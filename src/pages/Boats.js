import React, { Component as RC } from 'react';
import '../App.scss';
import axios from 'axios';
import '../App.scss';
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default class Boats extends RC {
    state = {
        history: [],
        isLoading: true,
        errors: null
    };
    getBoats() {
        axios
        // This is where the data is hosted
            //.get('http://localhost:5555/api/boats')
            // when it's live:
            .get('https://blog-api1.herokuapp.com/')
        // Once we get a response and store data, let's change the loading state
        .then(response => {
            console.log(response);
          this.setState({
            boats: response.data,
            isLoading: false
          });
        })
        // If we catch any errors connecting, let's update accordingly
        .catch(error => this.setState({ error, isLoading: false }));
    }
    componentDidMount() {
        this.getBoats();
    }
    render() {
        const { isLoading, boats } = this.state;
            return ( 
                <React.Fragment> 
                    <Navigation />
                    <Header />
                    
                    <div className="App">       
                        {!isLoading ? (
                            boats.map(boats => {
                                const { _id, Brand, Model, LOA, Draft, Fuel, Water, Power, Range, Pic } = boats;
                                return (
                                    <div className="t0" key={_id}>
                                       <img className="picture" src={Pic}></img>

                                        <div className="t1">Make:</div>
                                        <div className="t2"> {Brand}</div>
                                        <div className="border"></div>

                                        <div className="t1">Model:</div>
                                        <div className="t2">{Model}</div>

                                        <div className="t1">LOA:</div>
                                        <div className="t2">{LOA}</div>

                                        <div className="t1">Draft:</div>
                                        <div className="t2">{Draft}</div>

                                        <div className="t1">Fuel:</div>
                                        <div className="t2">{Fuel}</div>

                                        <div className="t1">Water:</div>
                                        <div className="t2">{Water}</div>

                                        <div className="t1">Engines:</div>
                                        <div className="t2">{Power}</div>

                                        <div className="t1">Range:</div>
                                        <div className="t2">{Range}</div>
                                       
                                     
                                        
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
