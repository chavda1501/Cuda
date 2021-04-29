import React from 'react'
import { NavLink } from 'react-router-dom';

const Team = (props) => {
    return(
        <>
        <div className="team-block">
           <div className="team-img">
                <img src={props.imgsrc} alt="flag" className="img-fluid"/>
            </div>
            <div className="team-detail">
                <h2>{props.title}</h2>
                <NavLink to="/">{props.link}</NavLink>
                <p>{props.data}</p>
                <ul className="socail-icon">
                    <li><NavLink to="/"><i className="fa fa-facebook" aria-hidden="true"></i></NavLink></li>
                    <li><NavLink to="/"><i className="fa fa-twitter" aria-hidden="true"></i></NavLink></li>
                    <li><NavLink to="/"><i className="fa fa-linkedin" aria-hidden="true"></i></NavLink></li>
                    <li><NavLink to="/"><i className="fa fa-envelope" aria-hidden="true"></i></NavLink></li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Team;