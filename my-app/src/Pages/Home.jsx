import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <div className="banner-section">
            <div className="container">
                <div className="banner-detail">
                    <h1>Hi there! We are the new kids on the block <br/>
                    and we build awesome websites and mobile apps.</h1>
                    <Link to="/" className="btn-orange">WORK WITH US!</Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home;