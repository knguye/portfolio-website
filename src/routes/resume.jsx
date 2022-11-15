import {
    useState
} from "react";

import '../styles/sections.css'

export default function Resume(props){
    return (
        <>
            <h1>Resume</h1>
            <div id="resume">
                <ResumeHeader/>
                <ResumeBody/>
            </div>
        </>
    )
}

const ResumeHeader = (props) => {
    return (
        <div id="resume-header">
            <h2>Kevin Nguyen</h2>
            <span id="header-info">
                <p>kevin-nguyen@live.ca | (647) 679-0484</p>
            </span>
        </div>
    )
}


// TODO: Make all sections pull up and expand
const ResumeBody = (props) => {
    return (
        <div id="resume-body">
            <div id="skills">
                <h3>Skills</h3>
                <div id="skills-body">
                        <div class="skills-column">
                            <h4>Knowledge of</h4>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                        <div class="skills-column">
                            <h4>Knowledge of</h4>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                </div> 
            </div>
        </div>
    )
}