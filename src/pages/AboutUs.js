import React, {Component as RC} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
// import Banner from '../components/Banner';

export default class AboutUs extends RC {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <aboutUs className="AboutUs">
                


<Header />

<Page>
<div className="background">
                <h3>Hi there.  We're Ji and Conni Simmons.  More will be added here later.</h3>
                </div>
                    
                    
                    

                
            </Page>

            </aboutUs>
        )
    }
}