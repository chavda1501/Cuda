import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../Assets/img/logo.png'

const Header = () => {
    return(
        <>
        <div className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="logo" className="img-fluid"/>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink activeClassName="menu-active" className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="menu-active" className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="menu-active" className="nav-link" to="/work">work</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="menu-active" className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        </>
    )
}
export default Header;