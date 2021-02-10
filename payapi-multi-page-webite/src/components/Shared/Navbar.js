import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { PageLinks, Button } from '../';
import logo from '../../images/shared/desktop/logo.svg';
import open from '../../images/shared/mobile/menu.svg'
import close from '../../images/shared/mobile/close.svg';
import bg from '../../images/shared/desktop/bg-pattern-circle.svg';

const Navbar = ({ changePage }) => {
    const [navDeployed, setNavDeployed] = useState(false);
    const navBtn = useRef();

    useEffect(() => {
        handleMobileNavClose();
    }, [])

    const handleNavOpen = () => {
        navBtn.current.classList.add('change');
    }

    const handleNavClose = () => {
        setTimeout(function() {
            navBtn.current.classList.remove('change');
        }, 500);
    }

    const handleMobileNavClose = () => {
        let mobileNavLinks = [...document.querySelectorAll('.page-link')].slice(3, 6);
        let linksPlusBtn = mobileNavLinks.concat(document.querySelectorAll('.btn-pink')[1]);
        
        linksPlusBtn.forEach(item => item.addEventListener('click', () => {
            closeAll();
        }))
    }

    const closeAll = () => {
        handleNavClose();
        setNavDeployed(false);
    }

    const logoOnclickEvent = () => {
        closeAll();
        changePage("home");
    }

    return (
        <div className="navbar">
            <NavLink to="/" onClick={logoOnclickEvent}>
                <img className="navbar-logo" src={logo} alt="PayAPI company logo" />
            </NavLink>
            <div className="navbar-links">
                <PageLinks type="desktop" changePage={changePage}/>
            </div>
            <Button text="Schedule a Demo" href="/contact" color="pink" />
            <div className={`navbar-links-mobile ${navDeployed ? 'deployed' : ''}`} onClick={handleMobileNavClose}>
                <hr />
                <PageLinks type="mobile" changePage={changePage}/>
                <Button text="Schedule a Demo" href="/contact" color="pink" />
            </div>
            <a 
                href="#"
                ref={navBtn}
                className="navbar-links-mobile-btn" 
                aria-label="Button for mobile menu deployment" 
                onClick={() => setNavDeployed(!navDeployed)}
            >
                <img className="open" src={open} alt="Hamburger icon" onClick={handleNavOpen}/>
                <img className={`close ${!navDeployed ? 'spin' : ''}`} src={close} alt="X shape" onClick={handleNavClose} />
            </a>
        </div>
    )
}

export default Navbar