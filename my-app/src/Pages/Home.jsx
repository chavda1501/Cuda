import React from 'react'
<<<<<<< HEAD
import { NavLink } from 'react-router-dom'
=======
import { Link } from 'react-router-dom'
>>>>>>> 17715136ea41c5a9464903efc987f30093fef9a3

const Home = () => {
    return (
        <>
        <div className="banner-section">
            <div className="container">
                <div className="banner-detail">
                    <h1>Hi there! We are the new kids on the block <br/>
                    and we build awesome websites and mobile apps.</h1>
<<<<<<< HEAD
                    <NavLink to="/" className="btn-orange">WORK WITH US!</NavLink>
=======
                    <Link to="/" className="btn-orange">WORK WITH US!</Link>
>>>>>>> 17715136ea41c5a9464903efc987f30093fef9a3
                </div>
            </div>
        </div>
        </>
    )
}
export default Home;