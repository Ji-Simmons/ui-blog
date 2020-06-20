import React, {Component as RC} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
import "../App.scss";
// import Banner from '../components/Banner';

export default class Gear extends RC {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <gear>
                


<Header />

<Page>
    <div className="background">
                <h3>Stuff we use aboard to make life safer and easier.</h3>
                </div>
                    
                    
                    

                
            </Page>

            </gear>
        )
    }
}