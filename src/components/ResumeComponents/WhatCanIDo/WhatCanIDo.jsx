import React from 'react'
import '../styles/ResumeComponents.css';
import './WhatCanIDo.css';

import Apps from './img/apps_icon.svg';
import Inter from './img/inter_icon.svg';
import Adaptive from './img/adaptive_icon.svg';
import Anim from './img/anim_icon.svg';
import Api from './img/api_iconsvg.svg';
import Optim from './img/optim_icon.svg';


export const WhatCanIDo = () => {
    return (
        <div className='item-wrapper'>
            <div className="what-can__item">
                <h1 className="resume-title">What Can I Do</h1>

                <div className="what-can__column">
                    <div className="wc__item">
                        <img
                            className='wc--img'
                            src={Apps}
                            alt=''
                        />
                        <p className="wc--text">
                            Web & mobile applications
                        </p>
                    </div>
                    
                    <div className="wc__item">
                        <img
                            className='wc--img'
                            src={Inter}
                            alt=''
                        />
                        <p className="wc--text">
                            Interactive elements
                        </p>
                    </div>
                    <div className="wc__item">
                        <img
                            className='wc--img'
                            src={Adaptive}
                            alt=''
                        />
                        <p className="wc--text">
                            Responsive design
                        </p>
                    </div>
                    <div className="wc__item">
                        <img
                            className='wc--img'
                            src={Anim}
                            alt=''
                        />
                        <p className="wc--text">
                            Animations and on-page effects
                        </p>
                    </div>
                    <div className="wc__item">
                        <img
                            className='wc--img'
                            src={Api}
                            alt=''
                        />
                        <p className="wc--text">
                            API integration
                        </p>
                    </div>
                    <div className="wc__item">
                        <img
                            className='wc--img'
                            src={Optim}
                            alt=''
                        />
                        <p className="wc--text">
                            Performance optimization
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

