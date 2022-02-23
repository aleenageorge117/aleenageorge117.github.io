import React from 'react';
import SVG from "react-inlinesvg";

// SCSS
import "./Home.scss";

//IMAGE | SVG
import profileImage from '../../assets/images/profileImage.jpeg';

//JSON
import socialMediaList from '../../assets/json/socialMediaList.json'

const Home = () => {

    
    return (

        <div className='homeContainer'>
            <div className='profilePhoto'>
                <img className='innerCircle' src={profileImage} alt='Aleena Jimmy George' />
            </div>
            <div className='descriptionContainer'>
                <h2 className='name'>aleena jimmy george</h2>
                <div className='designation'>MS in CS Graduate Student at UNC Charlotte&nbsp;|&nbsp;
                    <span className='highlightTxt'>Software Developer</span>
                </div>
                <span className='location'>Charlotte, NC</span>
                <div className='bio'>Hi there! I am a
                    <span className='highlightTxt'> Web Development </span>
                    enthusiast trying my hand at new things and getting better as I go.</div>
                <div className='socialMediaContainer'>
                    {
                        socialMediaList.list.map((sm: any, key: Number) => {
                            return (
                                <SVG src={require(`../../assets/svg/${sm.svg}`)} onClick={() => window.open(sm.Link)}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    );
}

export default Home;
