import React from 'react'
import '../styles/ResumeComponents.css';
import './SoftSkills.css';


export const SoftSkills = () => {
    return (
        <div className='item-wrapper'>
            <div className="soft-skills__item">
                <h1 className="resume-title">Soft Skills</h1>

                <p className='soft-skills__text'>
                    Sociable, able to work in a team, adapt to change, can be creative in solving problems,
                    able to accept feedback and strive for self-development
                </p>
            </div>
        </div>
    );
}
