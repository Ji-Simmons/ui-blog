import React, {Component as RC} from 'react';
import "./Logo.css";

export default class Logo extends RC {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <div className="logo">
                <img src="https://i.ibb.co/wBV30bG/prh.png" className="App-logo" alt="logo" />
                <img src="https://i.ibb.co/bgw4qgx/plh.png" className="App-logo2" alt="logo2" />
            </div>
        )
    }
}