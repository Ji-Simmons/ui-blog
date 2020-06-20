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
<div className="background">
                <h3>
                    <ul>
                        <li>Top speed: 35ish knots</li>
                        <li>Cruise speed: TBD</li>
                        <li>Fuel burn: TBD</li>
                        <li>Range: Until you need to paddle back to the dock</li>
                    </ul>
                </h3>
                </div>
                    
                    
                    

                
            </Page>

            </performance>
        )
    }
}