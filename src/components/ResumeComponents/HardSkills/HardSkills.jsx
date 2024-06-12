import React from 'react'
import '../styles/ResumeComponents.css';
import './HardSkills.css';

import JSIcon from './img/javascript_icon.svg';
import ReactIcon from './img/react_icon.svg';
import NodeIcon from './img/node_icon.svg';
import HtmlIcon from './img/html_icon.svg';
import ScssIcon from './img/scss_icon.svg';
import GitIcon from './img/git_icon.svg';


export const HardSkills = () => {
    return (
        <div className='item-wrapper'>
            <div className="hard-skills__item">
                <h1 className="resume-title">Hard Skills</h1>

                <div className="column-block">
                    <div className="hs-block">
                        <div className="hs-item">
                            <img
                                className='hs-item--img'
                                src={JSIcon}
                                alt=''
                            />
                            <p className="hs-item--text">JavaScript</p>
                        </div>
                        <div className="hs-item">
                            <img
                                className='hs-item--img'
                                src={ReactIcon}
                                alt=''
                            />
                            <p className="hs-item--text">React</p>
                        </div>
                        <div className="hs-item">
                            <img
                                className='hs-item--img'
                                src={NodeIcon}
                                alt=''
                            />
                            <p className="hs-item--text">Node.js</p>
                        </div>
                    </div>
                    
                    <div className="hs-block">
                        <div className="hs-item">
                            <img
                                className='hs-item--img'
                                src={HtmlIcon}
                                alt=''
                            />
                            <p className="hs-item--text">HTML</p>
                        </div>
                        <div className="hs-item">
                            <img
                                className='hs-item--img'
                                src={ScssIcon}
                                alt=''
                            />
                            <p className="hs-item--text">CSS/SCSS</p>
                        </div>
                        <div className="hs-item">
                            <img
                                className='hs-item--img'
                                src={GitIcon}
                                alt=''
                            />
                            <p className="hs-item--text">Git/Github</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
