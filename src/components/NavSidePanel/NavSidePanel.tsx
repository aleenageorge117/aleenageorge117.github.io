import React from 'react';

//COMPONENTS

// SCSS
import "./NavSidePanel.scss";

//IMAGE
import HamburgerMenu from '../../assets/images/hamburgerMenu-icon.png';
import { Link } from 'react-router-dom';

//JSON
import navigationLists from '../../assets/json/navigationLists.json'

const NavSidePanel = () => {

    
    return (
        <div className='navContainer col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            {/* <img className='hamburgerIcon' src={HamburgerMenu} alt='hamburgerMenu' /> */}
            {
                navigationLists.lists.map((navItem:any, key: Number) => {
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
