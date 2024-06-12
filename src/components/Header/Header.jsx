import React from "react";
import './Header.css';
import PhoneIcon from './phone_icon.svg';

export const Header = () => {
    return (
        <div className="container">
            <div className="header-wrapper">
                <ul className="navbar">
                    <li className="nav__list">Home</li>
                    <li className="nav__list">About</li>
                    <li className="nav__list">Resume</li>
                    <li className="nav__list">Portfolio</li>
                </ul>

                <div className="nav__phone">
                    <img
                        className="icon__size"
                        src={PhoneIcon}
                        alt=""
                    />
                    <span>375 29 57 444 58</span>
                </div>    
            </div>
        </div>
    );
}
