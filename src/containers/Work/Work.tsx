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
                                "Improved quality of code by setting coding standards",
                                "Conducting thorough code reviews, and developing reusable and generic components", 
                                "Modified project structure to support multiple deployment environment configurations", 
                                "Regulated a team of developers responsible for migration of the codebase from Angular 6 to React 17"
                            ]
        },
        {
            "company" : "EdCast",
            "title" : "Jr. Software Engineer",
            "timePeriod" : "Jan 2020 - Dec 2020",
            "description" : [
                                "Developed an Analytics portal and CIO Dashboard to obtain Product Engagement and User Activity Insights",
                                "Debugged, performed root cause analysis for software problems, and provided workable solutions", 
                                "Collaborated on planning and development of a component-based Content Management System for developer and software documentation"
                            ]
        },
        {
            "company" : "EdCast",
            "title" : "Trainee Software Engineer",
            "timePeriod" : "Jun 2019 - Jan 2020",
            "description" : [
                                "Integrated interactive chart libraries to assist with Visualization and Interpretation of Data", 
                                "Participated in Agile software development of new feature developments while supporting existing software products", 
                                "Designed and developed Email templates"
                            ]
        },
        {
            "company" : "Freelancer",
            "title" : "Web Developer",
            "timePeriod" : "Jul 2017 - Aug 2018",
            "description" : [
                                "Develop User-Interface", 
                                "Requirement Analysis, Database Schema Design, and System flow Design", 
                                "Payment Gateway, Map integrations", 
                                "Android Application Development uisng Web-view"
                            ]
        },
    ]
    
    return (
        <div className='col-lg-12 col-md-12 col-sm-12 row'>
            <div className='workContainer'>
                {
                    workExp.map((work: any, key: Number) => {
                        return (
                            <div className="expContainer">
                                <div className='titleContainer'>
                                    <span className="companyName">{work.company}</span><br />
                                    <span className="title">{work.title}</span><br />
                                    <span className="timePeriod">{work.timePeriod}</span><br />
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
