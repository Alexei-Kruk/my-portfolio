import React from 'react'

import RuIcon from './img/RU.svg';
import EnIcon from './img/EN.svg';

import '../styles/ResumeComponents.css';
import './Languages.css';


export const Languages = () => {
    return (
        <div className='item-wrapper'>
            <div className="languages__item">
                <h1 className="resume-title">Languages</h1>

                <div className="resume-block">
                    <div className="lang-item">
                        <p className="lang__text">Russian</p>
                        <img
                            className='lang__img'
                            src={RuIcon}
                            alt=''
                        />
                    </div>
                    <div className="lang-item">
                        <p className="lang__text">English</p>
                        <img
                            className='lang__img'
                            src={EnIcon}
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
