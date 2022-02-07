import React from 'react';

//COMPONENTS

// SCSS
import "./Home.scss";

//IMAGE | SVG
import profileImage from '../../assets/images/profileImage.jpeg';
import LinkedInSVG from '../../assets/svg/linkedin.svg';
import InstagramSVG from '../../assets/svg/instagram.svg';
import GmailSVG from '../../assets/svg/gmail.svg';
import GitHubSVG from '../../assets/svg/github.svg';

const Home = () => {

    return (
        <div className='homeContainer'>
            <div className='profilePhoto'>
                <img className='innerCircle' src={profileImage} alt='Aleena Jimmy George' />
            </div>
            <div className='descriptionContainer'>
                <span className='name'>Aleena Jimmy George</span>
                <span className='designation'>Software Developer</span>
                <span className='location'>Charlotte, NC</span>
            </div>
            <div className='socialMediaContainer'>
                <img src={LinkedInSVG} />
                <img src={GitHubSVG} />
                <img src={GmailSVG} />
                <img src={InstagramSVG} />
            </div>
        </div>
    );
}

export default Home;
