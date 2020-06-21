import React, {Component as RC} from 'react';
import Header from '../components/Header';
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
<div className="background">
                <h1 className="title">1999 Larson SEi 176</h1>
                <h3>
                    <ul>
                        <li>Length: 17'6"</li>
                        <li>Beam: 7'3"</li>
                        <li>Draft: 2'6"</li>
                        <li>Displacement: 1850 lbs. dry</li>
                        <li>Engine/drive: 130 HP 3.0L Volvo Penta SX</li>
                    </ul>
                </h3>
</div>
                    
                    
                    

                
            </Page>

            </specs>
        )
    }
}