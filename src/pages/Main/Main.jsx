import React from "react";
import './Main.css';

import GitHunIcon from './img/github_icon.svg';
import FacebookIcon from './img/facebook_icon.svg';
import LinkedInIcon from './img/linkedin_icon.svg';
import InstagramIcon from './img/instagram_icon.svg';
import WhatsAppIcon from './img/whatsapp_icon.svg';


export const Main = () => {
    return (
        <div className="container">
            <div className="main-wrapper">
                <div className="title-block">
                    <div className="title--item">
                        <p className="title__firstname">
                            Alexei
                        </p>
                        <p className="title__lastname">
                            Kruk
                        </p>
                        <p className="title__stack">
                            Frontend Developer
                        </p>
                    </div>

                    <div className="title__btn">
                        <div className="title__btn--border">
                            <span className="btn__item">
                                Resume
                            </span>
                        </div>

                        <div className="title__btn--border">
                            <span className="btn__item">
                                Portfolio
                            </span>
                        </div>
                    </div>

                    <div className="block__links">
                        <img
                            className="icon--links-little"
                            src={GitHunIcon}
                            alt=""
                        />
                        <img
                            className="icon--links"
                            src={FacebookIcon}
                            alt=""
                        />
                        <img
                            className="icon--links"
                            src={LinkedInIcon}
                            alt=""
                        />
                        <img
                            className="icon--links-inst"
                            src={InstagramIcon}
                            alt=""
                        />
                        <img
                            className="icon--links-little"
                            src={WhatsAppIcon}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
