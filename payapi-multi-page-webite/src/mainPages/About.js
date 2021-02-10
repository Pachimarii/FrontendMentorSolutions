import React from 'react';
import { AboutTop, AboutBottom } from '../components';
import imageDesktop from '../images/about/desktop/image-team-members.jpg';
import imageMobile from '../images/about/mobile/image-team-members.jpg';

const About = () => (
    <div className="page-container about-page-container">
        <AboutTop />
        <div className="about-img-container">
            <img className="img img-desktop" src={imageDesktop} alt="Team members working together" />
            <img className="img img-mobile" src={imageMobile} alt="Team members working together" />
        </div>
        <AboutBottom />
    </div>
)

export default About