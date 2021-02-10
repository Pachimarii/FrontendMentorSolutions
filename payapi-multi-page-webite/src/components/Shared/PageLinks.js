import React from 'react';
import { NavLink } from 'react-router-dom';

const PageLinks = ({type, changePage}) => {
    const links = ['pricing', 'about', 'contact'];
    return (
        <ul className="page-links">
            {links.map(link => (
                <li className="page-link" key={link}>
                    <NavLink to={`/${link}`}
                        onClick={() => changePage("other")}
                        activeClassName={type.localeCompare("desktop")===0 ? "active-link": "active-mobile-link"}>
                        {link}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

export default PageLinks;