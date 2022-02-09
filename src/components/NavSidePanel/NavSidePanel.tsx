import React from 'react';

//COMPONENTS

// SCSS
import "./NavSidePanel.scss";

//IMAGE
import HamburgerMenu from '../../assets/images/hamburgerMenu-icon.png';
import { Link } from 'react-router-dom';

const NavSidePanel = () => {
    let navigationLists = [
        {
            "title": "Home",
            "route": "/home"
        },
        {
            "title": "Work",
            "route": "/work"
        },
        {
            "title": "Interests",
            "route": "/interests"
        },
        {
            "title": "Resume",
            "route": "/resume"
        },
    ];

    
    return (
        <div className='navContainer'>
            {/* <img className='hamburgerIcon' src={HamburgerMenu} alt='hamburgerMenu' /> */}
            {
                navigationLists.map((navItem:any, key: Number) => {
                    return (
                        <div className='navList'>

                            <Link to={navItem.route}> 
                                <span className='navText'>{navItem.title}</span>
                                <div className='navItem'></div>
                                
                            </Link>
                        </div>

                    );

                })
            }
        </div>
    );
}

export default NavSidePanel;
