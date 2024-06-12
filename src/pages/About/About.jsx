import React from 'react'
import './About.css';


export const About = () => {
    return (
        <div className='container'>
            <div className="about-wrapper">
                <div className="about-block">
                    <h1 className="about__title">About</h1>

                    <p className="about-email">alexei.kruk.dev@gmail.com</p>

                    <p className='about-description'>
                        I`m a front-end developer with a deep interest in creating user-friendly
                        and intuitive interfaces. My experience includes working with HTML, CSS and JavaScript,
                        as well as knowledge of modern frameworks such as React. I strive for constant learning
                        and development, I am ready to learn new technologies and apply them in my work.
                        My goal is to be a highly skilled front-end development specialist and make a significant
                        contribution to the projects I work on.
                    </p>

                    <div className="about-adress">
                        <p className='line'>-----</p>
                        <p className="adress">Minsk, Belarus</p>
                        <p className='line'>-----</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
