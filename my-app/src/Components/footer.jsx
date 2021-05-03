import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
       <footer className="footer">
            <div className="container">
                <div className="f-menu">
                    <ul>
                        <li><Link to="/">Facebook</Link></li>
                        <li><Link to="/">Twitter</Link></li>
                        <li><Link to="/">Google+</Link></li>
                        <li><Link to="/">LinkedIn</Link></li>
                        <li><Link to="/">Behance</Link></li>
                        <li><Link to="/">Dribbble</Link></li>
                        <li><Link to="/">GitHub</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;