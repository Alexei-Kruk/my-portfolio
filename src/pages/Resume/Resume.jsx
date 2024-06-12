import React from 'react'

import { HardSkills } from '../../components/ResumeComponents/HardSkills/HardSkills';
import { Languages } from '../../components/ResumeComponents/Languages/Languages';
import { SoftSkills } from '../../components/ResumeComponents/SoftSkills/SoftSkills';
import { Experience } from '../../components/ResumeComponents/Experience/Experience';
import { Education } from '../../components/ResumeComponents/Education/Education';
import { HobbiesAndInterests } from '../../components/ResumeComponents/HobbiesAndInterests/HobbiesAndInterests';
import { WhatCanIDo } from '../../components/ResumeComponents/WhatCanIDo/WhatCanIDo';

import './Resume.css';


export const Resume = () => {
    return (
        <div className='container'>
            <div className="resume-wrapper">
                <div className="resume-color">
                    <div className="resume-flex">
                        <div className="block-h_skills-lang-s_skills resume__item--flex">
                            <HardSkills />
                            <Languages />
                            <SoftSkills />
                        </div>

                        <div className="exper-educ resume__item--flex">
                            <Experience />
                            <Education />
                            <HobbiesAndInterests />
                        </div>

                        <div className="what-can-hobby resume__item--flex">
                            <WhatCanIDo />
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    );
}
