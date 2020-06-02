import React, {Component as RC} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
// import Banner from '../components/Banner';

export default class Blog extends RC {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <blog className="blog">
                


<Header />

<Page>
                <h3>This speech is my recital. I think it's very vital
to rock a rhyme that's right on time
It's Tricky is the title, here we go.</h3>
                
                    
                    
                    

                
            </Page>

            </blog>
        )
    }
}