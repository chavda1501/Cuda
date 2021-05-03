import React from 'react'
import Team from '../Components/Team'
import flag from '../Assets/img/flag.png'
import pencil from '../Assets/img/pencil.png'
import setting from '../Assets/img/setting.png'
import rocek from '../Assets/img/rocek.png'

const Work = () => {
    return (
        <>
        <div className="team-section">
            <div className="section-title">
                <h2>SERVICES WE PROVIDE</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <Team imgsrc={flag} title="ANNE HATHAWAY" link="CEO / Marketing Guru" data="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna."/>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Team imgsrc={pencil} title="Kate Upton" link="Creative Director" data="Duis aute irure dolor in in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat non diam proident."/>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Team imgsrc={setting} title="Olivia Wilde" link="Lead Designer" data="Nemo enim ipsam voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem nesciunt."/>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Team imgsrc={rocek} title="Ashley Greene" link="SEO / Developer" data="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Work;