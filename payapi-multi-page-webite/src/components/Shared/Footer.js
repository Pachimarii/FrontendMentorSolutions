import React from 'react';
import { Link } from 'react-router-dom';
import { PageLinks } from '../';
import logo from '../../images/shared/desktop/logo--white.svg';

const Footer = () => (
    <div className="footer">
        <Link to="/">
            <img className="footer-logo" src={logo} alt="PayAPI company logo" />
        </Link>
        <PageLinks type="footer"/>
        <div className="footer-socials">
            <a href="/" aria-label="Facebook">
                <i className="fab fa-facebook-square" />
            </a>
            <a href="/" aria-label="Twitter">
                <i className="fab fa-twitter" />
            </a>
            <a href="/" aria-label="LinkedIn">
                <i className="fab fa-linkedin" />
            </a>
        </div>
    </div>
)

export default Footer;