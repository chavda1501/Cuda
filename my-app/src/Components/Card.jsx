import React from 'react'

const Card = (props) => {
    return(
        <>
        <div className="service-block">
            <div className="serivce-img">
                <img src={props.imgsrc} alt="flag" className="img-fluid"/>
            </div>
            <div className="service-detail">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
        </div>
        </>
    )
}
export default Card;