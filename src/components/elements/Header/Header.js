import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';


const Header = (props) => {
    return (
        <div className="bl-header">
            <div className="bl-header-content">
                <div className="bl-logo-holder">
                    {/* <Link to="/"> */}
                        {/* <img className="bl-logo" src="./images/reactMovie_logo.png" alt="bl-logo" /> */}
                        <img className="bl-logo" src="https://static1.squarespace.com/static/59c84fd8197aea917f723b8f/t/5ac22b69562fa7a28acdc476/1522674932866/The_Book_Depository+logo.png" alt="bl-logo" />
                    {/* </Link> */}
                </div>
                {/* <img className="rmdb-tmdb-logo" src="./images/tmdb_logo.png" alt="tmdb-logo" /> */}
                <div className="bl-search-holder">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Header;