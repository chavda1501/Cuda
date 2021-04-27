import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <div className="banner-section">
            <div className="container">
                <div className="banner-detail">
                    <h1>Hi there! We are the new kids on the block <br/>
                    and we build awesome websites and mobile apps.</h1>
                    <NavLink to="/" className="btn-orange">WORK WITH US!</NavLink>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home;