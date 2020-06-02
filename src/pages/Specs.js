import React, {Component as RC} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
// import Banner from '../components/Banner';

export default class Specs extends RC {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <specs className="Specs">
                


<Header />

<Page>
                <h3>Rollin' in my five point oh.</h3>
                
                    
                    
                    

                
            </Page>

            </specs>
        )
    }
}