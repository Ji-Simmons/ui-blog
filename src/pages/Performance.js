import React, {Component as RC} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
// import Banner from '../components/Banner';

export default class Performance extends RC {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <performance className="Performance">
                


<Header />

<Page>
                <h3>Pop goes the weasel 'cuz the weasel goes pop.</h3>
                
                    
                    
                    

                
            </Page>

            </performance>
        )
    }
}