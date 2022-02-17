import React from 'react';

//COMPONENTS

// SCSS
import "./Work.scss";

const Work = () => {

    let workExp = [
        {
            "company" : "EdCast",
            "title" : "Software Engineer",
            "timePeriod" : "Dec 2020 - Jul 2021",
            "description" : [
                                "Regulated a team of developers responsible for migration of the codebase from Angular 6 to React 17",
                                "Improved quality of code by setting coding standards, conducting thorough code reviews, and developing reusable generic components, in turn eliminating redundancy and expediting the development process by 70%",
                                "Modified project structure to support multiple deployment environment configurations", 
                            ]
        },
        {
            "company" : "EdCast",
            "title" : "Jr. Software Engineer",
            "timePeriod" : "Jan 2020 - Dec 2020",
            "description" : [
                                "Developed an Analytics portal and CIO Dashboard to obtain Product Engagement and User Activity Insights",
                                "Debugged, performed root cause analysis for software problems, and provided optimised workable solutions", 
                                "Collaborated on planning and development of a component-based Content Management System for developer and software documentation"
                            ]
        },
        {
            "company" : "EdCast",
            "title" : "Trainee Software Engineer",
            "timePeriod" : "Jun 2019 - Jan 2020",
            "description" : [
                                "Integrated interactive chart libraries to assist with Visualization and Interpretation of Data", 
                                "Participated in Agile feature developments while supporting existing ones", 
                                "Designed and developed Email templates"
                            ]
        },
        {
            "company" : "Freelancer",
            "title" : "Web Developer",
            "timePeriod" : "Jul 2017 - Aug 2018",
            "description" : [
                                "Coordinated to design and develop User-Interfaces to support business objectives", 
                                "Conducted thorough analysis to design Database Schemas, and System flows", 
                                "Integrated Payment Gateways and Maps with vendor application", 
                                "Implemented Android Applications uisng Web-view"
                            ]
        },
    ]
    
    return (
        <div className='col-lg-12 col-md-12 col-sm-12 row'>
            <div className='wor,mkkContainer'>
                {
                    workExp.map((work: any, key: Number) => {
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
