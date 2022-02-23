import React from 'react';
import { Document } from 'react-pdf';

//COMPONENTS
import ViewResume from '../../components/ViewResume/ViewResume';

// SCSS
import "./Work.scss";

//JSON
import workExperience from '../../assets/json/workExperience.json'

const Work = () => {

    
    return (
        <div className='col-lg-12 col-md-12 col-sm-12 workContainer'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
                <ViewResume />
            </div>
            <div className='workSection'>
                {
                    workExperience.workExp.map((work: any, key: Number) => {
                        return (
                            <div className='expContainer'>
                                <div className='titleContainer'>
                                    <span className='sectionDivider'></span>
                                    <span className='companyName'>{work.company}</span><br />
                                    <span className='title'>{work.title}</span><br />
                                    <span className='timePeriod'>{work.timePeriod}</span><br />
                                </div>
                                <div className='descContainer'>
                                    <ul>
                                        {
                                            work.description.map((responsibilities:any, index: Number) => {
                                                return (
                                                    <li>{responsibilities}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Work;
