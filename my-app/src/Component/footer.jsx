import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return(
        <>
        <footer className="footer">
            <div className="container">
                <div className="f-menu">
                    <ul>
                        <li><NavLink to="/">Facebook</NavLink></li>
                        <li><NavLink to="/">Twitter</NavLink></li>
                        <li><NavLink to="/">Google+</NavLink></li>
                        <li><NavLink to="/">LinkedIn</NavLink></li>
                        <li><NavLink to="/">Behance</NavLink></li>
                        <li><NavLink to="/">Dribbble</NavLink></li>
                        <li><NavLink to="/">GitHub</NavLink></li>
                    </ul>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer;