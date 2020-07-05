import React, {Component as RC} from 'react';
import Header from '../components/Header';
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
<div className="background">
<<<<<<< HEAD
                <h3>"Far better it is to dare mighty things, to win glorious triumphs, even though checkered by failure, than to take rank with those poor spirits who neither enjoy much nor suffer much, because they live in the gray twilight that knows not victory nor defeat." -- Theodore Roosevelt.</h3>
=======
                <h3>"Far better it is to dare mighty things, to win glorious triumphs, even though checkered by failure, than to take rank with those poor spirits who neither enjoy much nor suffer much, because they live in the gray twilight that knows not victory nor defeat."-- Theodore Roosevelt.</h3>
>>>>>>> 6e5fb2e5bddc927e91c0ae21b743825acfdcc9a9
                </div>
                    

                
            </Page>

            </home>
        )
    }
}
