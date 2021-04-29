import React from 'react'
import { Link } from 'react-router-dom';

const Team = (props) => {
    return(
        <>
        <div className="team-block">
           <div className="team-img">
                <img src={props.imgsrc} alt="flag" className="img-fluid"/>
            </div>
            <div className="team-detail">
                <h2>{props.title}</h2>
                <Link to="/">{props.link}</Link>
                <p>{props.data}</p>
                <ul className="socail-icon">
                    <li><Link to=""><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                    <li><Link to=""><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                    <li><Link to=""><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                    <li><Link to=""><i className="fa fa-envelope" aria-hidden="true"></i></Link></li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Team;