import React from 'react';

// SCSS
import "./Footer.scss";

const Footer = () => {
    
    const d = new Date();
    let currentYear = d.getFullYear();

    return (
        <div className='footerContainer'>
            <span>Copyright © </span>
        </div>
    )
}

export default Footer;
