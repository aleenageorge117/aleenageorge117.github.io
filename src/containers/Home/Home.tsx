import React from 'react';

//COMPONENTS
import NavSidePanel from '../../components/NavSidePanel/NavSidePanel';

// SCSS
import "./Home.scss";

//IMAGE | SVG
import profileImage from '../../assets/images/profileImage.jpeg';
import HamburgerMenu from '../../assets/images/hamburgerMenu-icon.png';
import LinkedInSVG from '../../assets/svg/linkedin.svg';
import InstagramSVG from '../../assets/svg/instagram.svg';
import GmailSVG from '../../assets/svg/gmail.svg';
import GitHubSVG from '../../assets/svg/github.svg';

const Home = () => {

    let socialMediaList = [
        {
            "svg": LinkedInSVG,
            "Link": "https://www.linkedin.com/in/aleena-jimmy-george/"
        },
        {
            "svg": GitHubSVG,
            "Link": "https://github.com/aleenageorge117"
        },
        {
            "svg": GmailSVG,
            "Link": "mailto:aleenajimmygeorge117@gmail.com"
        },
        {
            "svg": InstagramSVG,
            "Link": "https://www.instagram.com/annaaleena/"
        },
    ];
    
    return (
        <div>
            <NavSidePanel />
            <div className='homeContainer'>
                <div className='profilePhoto'>
                    <img className='innerCircle' src={profileImage} alt='Aleena Jimmy George' />
                </div>
                <div className='descriptionContainer'>
                    <span className='name'>Aleena Jimmy George</span>
                    <span className='designation'>MS in CS Graduate Student at UNC Charlotte | Software Developer</span>
                    <span className='location'>Charlotte, NC</span>

                    <div className='socialMediaContainer'>
                        {
                            socialMediaList.map((sm: any, key: Number) => {
                                return (
                                    <img src={sm.svg} onClick={() => window.open(sm.Link)}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
