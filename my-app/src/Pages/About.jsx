import React from 'react'
import Card from './Card'
import flag from '../Assets/img/flag.png'
import pencil from '../Assets/img/pencil.png'
import setting from '../Assets/img/setting.png'
import rocek from '../Assets/img/rocek.png'

const About = () => {
    return (
        <>
        <div className="service-section">
            <div className="section-title">
                <h2>SERVICES WE PROVIDE</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Card imgsrc={flag} title="Branding" content="Lorem ipsum dolor sit amet, 
                        consectetuer adipiscing elit, sed diam nonummy nibh."/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={pencil} title="Design" content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem  "/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={setting} title="Development" content="At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium."/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={rocek} title="ROCKET SCIENCE" content="Et harum quidem rerum est et expedita distinctio. Nam libero tempore."/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default About;