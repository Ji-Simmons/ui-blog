import React, {Component as RC} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';

// import Banner from '../components/Banner';

export default class Home extends RC {
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <home className="home">
                


<Header />

<Page>
                <h3>All right, stop what you're doing because I'm about to ruin the image and the style that you're used to.</h3>
                
                    

                
            </Page>

            </home>
        )
    }
}