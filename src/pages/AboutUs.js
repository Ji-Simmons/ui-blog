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
                <h3>I asked the guy, "Why you so fly?" He said, "Funky Cold Medina."</h3>
                
                    
                    
                    

                
            </Page>

            </aboutUs>
        )
    }
}