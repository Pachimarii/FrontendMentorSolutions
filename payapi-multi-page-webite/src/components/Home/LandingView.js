import React from 'react';
import { Link } from 'react-router-dom';
import { DemoForm } from '..';
import phone from '../../images/home/desktop/illustration-phone-mockup.svg';

const LandingView = () => (
    <div className="hero">
        <div className="hero-text">
            <h1 className="hero-text-header">Start building with out APIs for absolutely free.</h1>
            <div className="hero-text-form-wrapper"><DemoForm /></div>
            <span className="hero-text-contact">
                Have any questions? <Link to="/contact">Contact us</Link>
            </span>
        </div>
        <div className="hero-img-wrapper">
            <img className="hero-img" src={phone} alt="iPhone view of showing PayAPI app notification" />
        </div>
    </div>
)

export default LandingView